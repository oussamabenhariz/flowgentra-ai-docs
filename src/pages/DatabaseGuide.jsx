import React from 'react';
import DocLayout from '../components/DocLayout';

const DatabaseGuide = () => {
  const content = `# Database Module

## Overview

Flowgentra provides database integrations for:
- Storing documents & vectors (RAG)
- Agent memory & conversation history
- Custom data persistence

Supported backends:
- **SQLite** - Single-file, no setup
- **PostgreSQL** - Production SQL databases
- **MongoDB** - NoSQL document storage
- **Chroma** - Vector database (built-in)

## SQL Database

### SQLite

Simplest option, great for development:

**Python:**
\`\`\`python
from flowgentra_ai.db import SqliteDatabase

db = SqliteDatabase("./agents.db")
conversations = db.query("SELECT * FROM conversations")
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::db::SqliteDatabase;

let db = SqliteDatabase::new("./agents.db")?;
let conversations = db.query("SELECT * FROM conversations")?;
\`\`\`

### PostgreSQL

For production and team environments:

**Python:**
\`\`\`python
from flowgentra_ai.db import PostgresDatabase

db = PostgresDatabase(
    host="localhost",
    port=5432,
    database="flowgentra",
    user="user", 
    password="password"
)
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::db::PostgresDatabase;

let db = PostgresDatabase::new(
    "postgresql://user:password@localhost/flowgentra"
)?;
\`\`\`

### Schema Management

Create tables automatically:

**Python:**
\`\`\`python
db.create_tables()  # Creates all required tables
\`\`\`

**Rust:**
\`\`\`rust
db.create_tables().await?;
\`\`\`

## Document Store

For storing documents without SQL:

**Python:**
\`\`\`python
from flowgentra_ai.db import MongoDocumentStore

store = MongoDocumentStore(
    connection_string="mongodb://localhost:27017",
    database="docs"
)

# Insert
store.insert("collection_name", {
    "id": "doc_1",
    "content": "Hello world",
    "metadata": {"source": "file.txt"}
})

# Query
docs = store.query("collection_name", {"source": "file.txt"})

# Delete
store.delete("collection_name", "doc_1")
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::doc_store::{DocumentStore, MongoDocumentStore};

let store = MongoDocumentStore::new("mongodb://localhost").await?;

store.insert("docs", Document {
    id: "doc_1".to_string(),
    content: "Hello world".to_string(),
    metadata: {{"source": "file.txt".to_string()}}.into(),
}).await?;
\`\`\`

## Vector Store Integration

Store and query embeddings:

**Python:**
\`\`\`python
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings

embeddings = Embeddings.huggingface("sentence-transformers/all-MiniLM-L6-v2")
vector_store = InMemoryVectorStore(embeddings)

# Add documents
vector_store.add_documents([
    {"id": "1", "text": "Hello world"},
    {"id": "2", "text": "Goodbye world"},
])

# Search
results = vector_store.search("hello", k=1)
# returns: [{"id": "1", "text": "Hello world", "score": 0.95}]
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::rag::InMemoryVectorStore;

let embeddings = HuggingFaceEmbeddings::new("sentence-transformers/all-MiniLM-L6-v2")?;
let mut store = InMemoryVectorStore::new(embeddings);

store.add_documents(vec![
    Document { id: "1", text: "Hello world" },
    Document { id: "2", text: "Goodbye world" },
]).await?;

let results = store.search("hello", 1).await?;
\`\`\`

## Best Practices

1. **Choose the right backend**
   - Development: SQLite
   - Production: PostgreSQL
   - NoSQL needs: MongoDB
   - Vector search: Chroma or Pinecone

2. **Index frequently queried fields**
   - Add database indexes for agent_id, thread_id
   - Speeds up checkpoint retrieval

3. **Archive old conversations**
   - Delete > 90 days of conversation history periodically
   - Keeps database size manageable

4. **Monitor connection pool**
   - PostgreSQL: Configure pool size (default: 5)
   - Avoid connection exhaustion

5. **Backup strategy**
   - SQLite: Copy database file daily
   - PostgreSQL: Use pg_dump or WAL archiving

## Migration & Backup

### SQLite to PostgreSQL

\`\`\`python
from flowgentra_ai.db import SqliteDatabase, PostgresDatabase

sqlite_db = SqliteDatabase("./old.db")
postgres_db = PostgresDatabase("postgresql://localhost/new")

# Migrate all tables
for table in sqlite_db.list_tables():
    rows = sqlite_db.query(f"SELECT * FROM {table}")
    for row in rows:
        postgres_db.insert(table, row)
\`\`\`

### Backup

\`\`\`bash
# SQLite
cp agents.db agents.db.backup

# PostgreSQL
pg_dump -U user -d flowgentra > backup.sql
\`\`\`
`;

  return (
    <DocLayout 
      title="Database Module"
      description="Integrate databases for persistence, storage, and vector search."
      content={content}
    />
  );
};

export default DatabaseGuide;
