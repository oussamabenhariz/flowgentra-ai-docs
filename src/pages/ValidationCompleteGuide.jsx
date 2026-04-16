import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import Alert from '../components/Alert'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'types', label: 'Validation Types' },
  { id: 'schema', label: 'Schema Validation' },
  { id: 'custom', label: 'Custom Validators' },
  { id: 'examples', label: 'Practical Examples' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'next', label: 'Next Steps' },
]

export default function ValidationGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>
        Input Validation
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 32, lineHeight: 1.7, fontSize: '1.0625rem' }}>
        Ensure data quality and type safety. Validate state before and after node execution.
      </p>

      <section id="overview" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Overview</h2>
        <p style={prose}>
          Validation ensures that data flowing through your graph meets expected standards. Flowgentra supports:
        </p>
        <ul style={ul}>
          <li><strong>Type validation:</strong> Ensure fields match expected types</li>
          <li><strong>Schema validation:</strong> Validate structure with Pydantic, JSON Schema</li>
          <li><strong>Constraint validation:</strong> Check ranges, lengths, patterns</li>
          <li><strong>Custom validators:</strong> Domain-specific validation logic</li>
        </ul>
      </section>

      <section id="types" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Types of Validation</h2>
        
        <div style={{ marginTop: 20 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 8 }}>1. Type Validation (Built-in)</div>
            <p style={{ color: '#8b949e', margin: 0, marginBottom: 12 }}>Python provides type hints, mypy for static checking:</p>
            <CodeBlock python={`from typing import TypedDict

class AgentState(TypedDict):
    user_id: int          # Must be int
    query: str            # Must be str
    confidence: float     # Must be float
    tags: list[str]       # Must be list of strings
    
    # Uses type hints for mypy and IDE autocomplete
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 8 }}>2. Schema Validation (Pydantic)</div>
            <p style={{ color: '#8b949e', margin: 0, marginBottom: 12 }}>Use Pydantic for runtime validation with constraints:</p>
            <CodeBlock python={`from pydantic import BaseModel, Field, validator

class UserMessage(BaseModel):
    user_id: int = Field(..., gt=0)  # Must be positive
    content: str = Field(..., min_length=1, max_length=1000)
    priority: str = Field('normal', regex='^(low|normal|high)$')
    
    @validator('content')
    def content_no_spam(cls, v):
        if 'viagra' in v.lower():
            raise ValueError('Spam detected')
        return v
    
# Validates at runtime:
msg = UserMessage(user_id=123, content="Hello!")  # ✓ OK
msg = UserMessage(user_id=-1, content="X")  # ✗ Raises ValidationError
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 8 }}>3. Constraint Validation</div>
            <p style={{ color: '#8b949e', margin: 0, marginBottom: 12 }}>Validate ranges, patterns, and relationships:</p>
            <CodeBlock python={`class SearchRequest(BaseModel):
    query: str = Field(..., min_length=2, max_length=100)
    page: int = Field(1, ge=1, le=1000)  # 1 to 1000
    limit: int = Field(10, ge=1, le=100)  # 1 to 100
    sort_by: str = Field('relevance', pattern='^(relevance|date|rating)$')
`} />
          </div>
        </div>
      </section>

      <section id="schema" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Schema Validation with Pydantic</h2>
        
        <CodeBlock python={`from pydantic import BaseModel, Field, validator, model_validator
from typing import Optional

class SearchState(BaseModel):
    query: str = Field(..., min_length=1, max_length=500, description="Search query")
    filters: dict = Field(default_factory=dict)
    page: int = Field(1, ge=1)
    results: Optional[list] = None
    error: Optional[str] = None
    
    @validator('page')
    def valid_page(cls, v):
        if v < 1:
            raise ValueError('page must be >= 1')
        return v
    
    @model_validator(mode='after')
    def validate_state_consistency(self):
        # Can't have both results and error
        if self.results and self.error:
            raise ValueError('Cannot have both results and error')
        return self

# Use in graph:
from flowgentra_ai.graph import StateGraph, END

def search_node(state: SearchState) -> SearchState:
    # State is already validated
    results = do_search(state.query)
    return SearchState(
        query=state.query,
        filters=state.filters,
        page=state.page,
        results=results,
    )

# Create graph with Pydantic state:
builder = StateGraph(SearchState)
builder.add_node("search", search_node)
builder.set_entry_point("search")
builder.add_edge("search", END)
graph = builder.compile()

# Invoke with validation:
try:
    result = graph.invoke(SearchState(query="python", page=1))
except Exception as e:
    print(f"Validation error: {e}")
`} />
      </section>

      <section id="custom" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Custom Validators</h2>
        
        <CodeBlock python={`from pydantic import BaseModel, field_validator
import re

class PaymentState(BaseModel):
    amount: float
    currency: str
    card_number: str
    
    @field_validator('amount')
    @classmethod
    def amount_positive(cls, v):
        if v <= 0:
            raise ValueError('Amount must be positive')
        if v > 1_000_000:
            raise ValueError('Amount exceeds limit')
        return round(v, 2)
    
    @field_validator('currency')
    @classmethod
    def valid_currency(cls, v):
        valid = ['USD', 'EUR', 'GBP', 'JPY']
        if v not in valid:
            raise ValueError(f'Currency must be one of {valid}')
        return v
    
    @field_validator('card_number')
    @classmethod
    def valid_card(cls, v):
        # Simple Luhn check
        digits = [int(d) for d in v if d.isdigit()]
        if len(digits) not in [15, 16]:
            raise ValueError('Card number must be 15-16 digits')
        return v

# Usage:
try:
    payment = PaymentState(
        amount=-100,  # ✗ Raises ValueError
        currency='USD',
        card_number='4532015112830366'
    )
except ValueError as e:
    print(f"Invalid payment: {e}")
`} />
      </section>

      <section id="examples" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Practical Examples</h2>
        
        <div style={{ marginTop: 20 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>Example 1: Email Validation</div>
            <CodeBlock python={`from pydantic import BaseModel, EmailStr, Field

class UserSignup(BaseModel):
    email: EmailStr  # Built-in email validator
    username: str = Field(..., min_length=3, max_length=20, regex='^[a-z0-9_]+$')
    password: str = Field(..., min_length=8)
    
    @field_validator('password')
    @classmethod
    def strong_password(cls, v):
        # Must have: uppercase, lowercase, digit, special char
        if not any(c.isupper() for c in v):
            raise ValueError('Password needs uppercase')
        if not any(c.islower() for c in v):
            raise ValueError('Password needs lowercase')
        if not any(c.isdigit() for c in v):
            raise ValueError('Password needs digit')
        return v
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>Example 2: API Request Validation</div>
            <CodeBlock python={`from pydantic import BaseModel, HttpUrl, Field
from enum import Enum

class HTTPMethod(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"

class APIRequest(BaseModel):
    method: HTTPMethod
    url: HttpUrl  # Built-in URL validator
    headers: dict = Field(default_factory=dict)
    body: str = Field(default="", max_length=104857600)  # 100MB limit
    timeout: int = Field(30, ge=1, le=300)
    
    @field_validator('headers')
    @classmethod
    def valid_headers(cls, v):
        # Basic header validation
        for key in v.keys():
            if not all(c.isprintable() for c in key):
                raise ValueError(f'Invalid header name: {key}')
        return v
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>Example 3: Document Metadata</div>
            <CodeBlock python={`from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class Document(BaseModel):
    title: str = Field(..., min_length=1, max_length=500)
    content: str = Field(..., min_length=10)
    author: str
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: Optional[datetime] = None
    tags: list[str] = Field(default_factory=list, max_length=10)
    status: str = Field('draft', regex='^(draft|published|archived)$')
    version: int = Field(1, ge=1)
    
    @field_validator('tags')
    @classmethod
    def tag_length(cls, v):
        for tag in v:
            if len(tag) < 2 or len(tag) > 20:
                raise ValueError('Tags must be 2-20 chars')
        return v
`} />
          </div>
        </div>
      </section>

      <section id="best-practices" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Best Practices</h2>
        
        <Alert type="tip" title="Validation Strategy">
          <strong>Validate early, validate often:</strong> Validate at graph entry, between nodes, and at critical boundaries.
        </Alert>

        <div style={{ marginTop: 20, background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
          <div style={{ fontWeight: 600, color: '#52b788', marginBottom: 12 }}>✓ Good Pattern</div>
          <CodeBlock python={`# 1. Validate at entry
class InputState(BaseModel):
    query: str = Field(..., min_length=1)

# 2. Validate node output (if it can be invalid)
def my_node(state: InputState) -> InputState:
    processed = process_query(state.query)
    # State is already valid, just update
    return InputState(query=processed)

# 3. Pydantic automatic validation at runtime
graph = builder.compile()
result = graph.invoke(InputState(query="hello"))  # ✓ Valid
result = graph.invoke(InputState(query=""))  # ✗ Raises ValidationError
`} />
        </div>
      </section>

      <section id="next" style={{ borderTop: '1px solid #21262d', paddingTop: 40, marginTop: 60 }}>
        <h2 style={h2}>Next Steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { href: '/docs/middleware', label: '🔄 Middleware', desc: 'State transformation' },
            { href: '/docs/error-handling', label: '⚠️ Error Handling', desc: 'Exception strategies' },
            { href: '/docs/glossary', label: '📚 Glossary', desc: 'Key terminology' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: 'block',
                background: '#0d1117',
                border: '1px solid #21262d',
                borderRadius: 8,
                padding: 16,
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#3a86ff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
            >
              <div style={{ fontWeight: 600, color: '#3a86ff', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: '0.875rem', color: '#8b949e' }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </section>
    </DocLayout>
  )
}

const h2 = { fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }
const prose = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const ul = { color: '#8b949e', lineHeight: 1.8, paddingLeft: 20, margin: 0 }
