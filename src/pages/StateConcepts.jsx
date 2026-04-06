import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'basics', label: 'The Basics' },
  { id: 'creating', label: 'Creating State' },
  { id: 'serialization', label: 'Serialization' },
]

export default function StateConcepts() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        State Management
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        State is the data container that flows through your graph. Every node receives the current state, modifies it, and returns it. Understanding state is key to understanding how Flowgentra works.
      </p>

      <Section id="basics" title="The Basics">
        <CodeBlock
          rust={`use flowgentra_ai::DynState;

let mut state = DynState::new();
state.set("user", "Alice");
state.set("score", 0i64);

// Typed getters
state.get_string("user")    // Some("Alice")
state.get_int("score")      // Some(0)
state.get_bool("flag")      // None if missing or wrong type
state.get_float("ratio")    // None

// Check and remove
state.contains_key("user")  // true
state.remove("score");`}
          python={`from flowgentra_ai import State

state = State({"user": "Alice", "score": 0})

# Read
state["user"]           # "Alice"
state.get("score")      # 0
state.get("missing")    # None (no KeyError)

# Write
state["score"] = 42
state.set("tags", ["rust", "ai"])

# Check existence
"user" in state         # True
state.contains_key("x") # False

# Delete
del state["score"]
state.remove("tags")    # returns the value

# Iterate
state.keys()            # ["user"]
len(state)              # 1`}
        />
      </Section>

      <Section id="creating" title="Creating State">
        <CodeBlock
          rust={`// Empty
let state = DynState::new();

// From a JSON value
let state = DynState::from_value(serde_json::json!({
    "key": "value",
}));`}
          python={`# From a dict
state = State({"key": "value"})
state = State.from_dict({"key": "value"})

# From JSON
state = State.from_json('{"key": "value"}')

# Empty
state = State()`}
        />
      </Section>

      <Section id="serialization" title="Serialization">
        <CodeBlock
          rust={`// To JSON string
let json = state.to_json()?;

// From JSON string
let state = DynState::from_json(&json)?;`}
          python={`# To dict
d = state.to_dict()    # {"key": "value", ...}

# To JSON string
j = state.to_json()    # '{"key":"value"}'`}
        />
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}