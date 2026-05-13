import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what-is-validation', label: 'What is Validation?' },
  { id: 'validation-types', label: 'Validation Types' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'built-in-validators', label: 'Built-in Validators' },
  { id: 'advanced-patterns', label: 'Advanced Patterns' },
  { id: 'in-workflows', label: 'In Agent Workflows' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function ValidationGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Validation System
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Ensure data integrity throughout your agent workflows with Flowgentra's validation system. Validate inputs, state transitions, and outputs to catch errors early and maintain reliable execution.
      </p>

      <Section id="what-is-validation" title="What is Validation?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Validation ensures data meets expected criteria:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Input validation</strong>: Check user inputs before processing</li>
          <li><strong>State validation</strong>: Verify state integrity between nodes</li>
          <li><strong>Output validation</strong>: Confirm results meet requirements</li>
          <li><strong>Schema validation</strong>: Enforce data structure contracts</li>
        </ul>
      </Section>

      <Section id="validation-types" title="Validation Types">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Schema Validation</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Validate data structure against JSON schemas:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.validation import SchemaValidator
from pydantic import BaseModel

class UserQuery(BaseModel):
    question: str
    max_length: int = 1000
    category: Optional[str] = None

validator = SchemaValidator(UserQuery)

# Validate input
try:
    valid_data = validator.validate({"question": "What is AI?", "max_length": 500})
    print("Valid:", valid_data.question)
except ValidationError as e:
    print("Invalid:", e)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Custom Validators</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Create domain-specific validation logic:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.validation import Validator

class QuestionValidator(Validator):
    def validate(self, data):
        if not isinstance(data, dict):
            raise ValidationError("Input must be a dictionary")

        question = data.get("question", "")
        if not question.strip():
            raise ValidationError("Question cannot be empty")

        if len(question) > 2000:
            raise ValidationError("Question too long (max 2000 chars)")

        # Business rule: must contain question words
        question_words = ["what", "how", "why", "when", "where", "who"]
        if not any(word in question.lower() for word in question_words):
            raise ValidationError("Question must contain question words")

        return data`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>State Validators</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Validate state transitions between nodes:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.validation import StateValidator

class ConversationStateValidator(StateValidator):
    def validate_transition(self, old_state, new_state, node_name):
        # Ensure conversation flows logically
        if node_name == "answer" and not old_state.get("question"):
            raise ValidationError("Cannot answer without a question")

        # Check message limits
        messages = new_state.get("messages", [])
        if len(messages) > 100:
            raise ValidationError("Too many messages in conversation")

        return new_state`}
        />
      </Section>

      <Section id="configuration" title="Configuration">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>In Python</h4>
        <CodeBlock
          python={`from flowgentra_ai.agent import AgentBuilder
from flowgentra_ai.validation import ValidationChain

# Create validation chain
validators = ValidationChain()
validators.add_input_validator(QuestionValidator())
validators.add_state_validator(ConversationStateValidator())

# Apply to agent
agent = AgentBuilder() \\
    .with_validation(validators) \\
    .build()`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>In Configuration</h4>
        <CodeBlock
          python={`# config.yaml
validation:
  input_validators:
    - type: schema
      schema: UserQuery
      strict: true

    - type: custom
      class: "myapp.validators.QuestionValidator"

  state_validators:
    - type: custom
      class: "myapp.validators.ConversationStateValidator"

  output_validators:
    - type: schema
      schema: AgentResponse`}
        />
      </Section>

      <Section id="built-in-validators" title="Built-in Validators">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Type Validators</h4>
        <CodeBlock
          python={`from flowgentra_ai.validation import TypeValidator

# Validate data types
string_validator = TypeValidator(str)
int_validator = TypeValidator(int, min_value=0, max_value=100)
list_validator = TypeValidator(list, max_length=10)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Range Validators</h4>
        <CodeBlock
          python={`from flowgentra_ai.validation import RangeValidator

# Numeric ranges
score_validator = RangeValidator(0.0, 1.0)  # 0.0 to 1.0
count_validator = RangeValidator(1, 100)    # 1 to 100

# String lengths
name_validator = RangeValidator(min_length=1, max_length=50)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Regex Validators</h4>
        <CodeBlock
          python={`from flowgentra_ai.validation import RegexValidator

email_validator = RegexValidator(r'^[^@]+@[^@]+\.[^@]+$')
phone_validator = RegexValidator(r'^\\+?1?[-.\\s]?\\(?[0-9]{3}\\)?.*')`}
        />
      </Section>

      <Section id="advanced-patterns" title="Advanced Patterns">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Conditional Validation</h4>
        <CodeBlock
          python={`class ConditionalValidator(Validator):
    def validate(self, data):
        # Different rules based on input type
        if data.get("type") == "user_query":
            return self._validate_user_query(data)
        elif data.get("type") == "system_command":
            return self._validate_system_command(data)
        else:
            raise ValidationError("Unknown input type")

    def _validate_user_query(self, data):
        # User queries need questions
        if "question" not in data:
            raise ValidationError("User queries must have questions")
        return data`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Cross-Field Validation</h4>
        <CodeBlock
          python={`class CrossFieldValidator(Validator):
    def validate(self, data):
        start_date = data.get("start_date")
        end_date = data.get("end_date")

        if start_date and end_date:
            if start_date > end_date:
                raise ValidationError("Start date must be before end date")

        budget = data.get("budget", 0)
        items = data.get("items", [])

        total_cost = sum(item.get("cost", 0) for item in items)
        if total_cost > budget:
            raise ValidationError(f"Total cost ${total_cost} exceeds budget ${budget}")

        return data`}
        />
      </Section>

      <Section id="in-workflows" title="In Agent Workflows">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Input Validation</h4>
        <CodeBlock
          python={`from flowgentra_ai.graph import StateGraph
from flowgentra_ai.validation import InputValidator

def validate_input_node(state):
    validator = InputValidator(QuestionValidator())
    try:
        validated_input = validator.validate(state["user_input"])
        state["validated_input"] = validated_input
        return state
    except ValidationError as e:
        state["error"] = str(e)
        return state

graph = StateGraph(dict)
graph.add_node("validate", validate_input_node)
graph.set_entry_point("validate")`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>State Validation</h4>
        <CodeBlock
          python={`from flowgentra_ai.validation import StateTransitionValidator

# Automatically validate state between all nodes
graph = StateGraph(dict)
graph.add_state_validator(ConversationStateValidator())

# Or validate specific transitions
graph.add_transition_validator("ask_question", "provide_answer", AnswerValidator())`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Design Principles</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li><strong>Fail Fast</strong>: Validate early, provide clear error messages</li>
            <li><strong>Single Responsibility</strong>: One validator, one concern</li>
            <li><strong>Composable</strong>: Combine simple validators into complex ones</li>
            <li><strong>Testable</strong>: Easy to unit test validation logic</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Performance</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li><strong>Cache validation results</strong>: Avoid re-validating unchanged data</li>
            <li><strong>Validate early</strong>: Catch errors before expensive operations</li>
            <li><strong>Use async validation</strong>: For external API calls</li>
            <li><strong>Profile validators</strong>: Monitor performance impact</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Production Considerations</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li><strong>Graceful Degradation</strong>: Continue with defaults on validation failure</li>
            <li><strong>Monitoring</strong>: Track validation success/failure rates</li>
            <li><strong>Logging</strong>: Log validation errors with context</li>
            <li><strong>User-Friendly</strong>: Convert technical errors to user messages</li>
          </ul>
        </div>
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 40 }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#e6edf3',
        marginBottom: 16,
        scrollMarginTop: '80px'
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}