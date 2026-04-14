import React from 'react';
import DocLayout from '../components/DocLayout';

const LLMProviders = () => {
  const content = `# Supported LLM Providers

## Overview

Flowgentra supports 7 major LLM providers, including commercial, open-source, and self-hosted options.

## 1. OpenAI

Most popular, best quality models. Requires API key.

**Setup:**
\`\`\`bash
export OPENAI_API_KEY="sk-..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.OpenAI,
    model="gpt-4",  # or "gpt-3.5-turbo", "gpt-4-turbo"
    temperature=0.7,
    max_tokens=2048,
    api_key="sk-...",  # optional, uses env var if not provided
)
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::llm::{LLMConfig, LLMProvider};

let llm_config = LLMConfig {
    provider: LLMProvider::OpenAI,
    model: "gpt-4".to_string(),
    temperature: 0.7,
    max_tokens: 2048,
    api_key: std::env::var("OPENAI_API_KEY").ok(),
    ..Default::default()
};
\`\`\`

**YAML:**
\`\`\`yaml
llm:
  provider: openai
  model: gpt-4
  temperature: 0.7
  max_tokens: 2048
\`\`\`

**Models:**
- gpt-4: Latest, best quality, higher cost
- gpt-4-turbo: Cheaper, nearly same quality
- gpt-3.5-turbo: Most affordable, good for simple tasks

**Pricing:** $0.03-0.30 per 1K tokens (varies by model)

## 2. Anthropic Claude

Excellent reasoning, built-in tool use. API key required.

**Setup:**
\`\`\`bash
export ANTHROPIC_API_KEY="sk-ant-..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Anthropic,
    model="claude-3-opus",  # or "claude-3-sonnet", "claude-3-haiku"
    temperature=0.7,
    max_tokens=4096,
)
\`\`\`

**Models:**
- claude-3-opus: Most capable, best for reasoning
- claude-3-sonnet: Good balance of quality and speed
- claude-3-haiku: Fastest, cheapest

**Features:**
- Extended context (up to 200K tokens)
- Built-in tool use
- Excellent reasoning

**Pricing:** $0.008-0.24 per 1K tokens

## 3. Mistral

European open-weight model. Good performance, affordable.

**Setup:**
\`\`\`bash
export MISTRAL_API_KEY="..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Mistral,
    model="mistral-large",  # or "mistral-medium", "mistral-small"
    temperature=0.7,
)
\`\`\`

**Models:**
- mistral-large: Strongest, good reasoning
- mistral-medium: Good balance
- mistral-small: Fast, cheap

**Pricing:** $0.0007-0.007 per 1K tokens (very affordable)

## 4. Groq

Ultra-fast inference. Great for latency-sensitive apps.

**Setup:**
\`\`\`bash
export GROQ_API_KEY="gsk_..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Groq,
    model="mixtral-8x7b",  # Open-weight model
    temperature=0.7,
)
\`\`\`

**Models:**
- mixtral-8x7b: Most capable
- llama2-70b: Good option

**Advantages:**
- Sub-100ms inference
- Very affordable
- OpenWeights models

**Pricing:** Free tier + pay-as-you-go

## 5. Ollama

Run models locally, no API key needed. Perfect for privacy.

**Setup:**
\`\`\`bash
# Download and run Ollama
ollama pull llama2
ollama serve
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Ollama,
    model="llama2",  # or "neural-chat", "mistral", etc.
    base_url="http://localhost:11434",  # Ollama default
)
\`\`\`

**Available Models:**
- llama2: Good general purpose
- neural-chat: Optimized for conversation
- mistral: Fast and capable
- dolphin-mixtral: Stronger reasoning

**Advantages:**
- Privacy (runs locally)
- No API costs
- No rate limits
- Fully controllable

**Disadvantages:**
- Requires local hardware
- Models smaller than API models
- Setup overhead

## 6. Azure OpenAI

Enterprise Azure hosting of OpenAI models.

**Setup:**
\`\`\`bash
export AZURE_OPENAI_API_KEY="..."
export AZURE_OPENAI_ENDPOINT="https://your-instance.openai.azure.com/"
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.AzureOpenAI,
    model="gpt-4",
    base_url="https://your-instance.openai.azure.com/",
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
)
\`\`\`

**Uses:**
- Compliance/data sovereignty
- Enterprise deployments
- Private VNet support

## 7. HuggingFace Hosted Inference

Run open-weight models on HuggingFace.

**Setup:**
\`\`\`bash
export HUGGINGFACE_API_KEY="hf_..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.HuggingFace,
    model="meta-llama/Llama-2-7b-chat",
    api_key=os.getenv("HUGGINGFACE_API_KEY"),
)
\`\`\`

**Popular Models:**
- meta-llama/Llama-2-*: Meta's Llama 2
- OpenAssistant/oasst-sft-6-epoch-3: Open Assistant
- mosaicml/mpt-30b: MPT model

## Provider Comparison

| Provider | Speed | Quality | Cost | Privacy | Setup |
|----------|-------|---------|------|---------|-------|
| OpenAI | Fast | Excellent | Medium | Cloud | Easy |
| Anthropic | Fast | Excellent | Medium | Cloud | Easy |
| Mistral | Very Fast | Good | Very Low | Cloud | Easy |
| Groq | Ultra Fast | Good | Low | Cloud | Easy |
| Ollama | Medium | Good | Free | Local | Medium |
| Azure | Fast | Excellent | Medium | Hybrid | Hard |
| HuggingFace | Medium | Variable | Low | Cloud | Easy |

## Switching Between Providers

### From Code

Change config and rebuild agent:

\`\`\`python
# Start with OpenAI
agent = Agent.create(llm_config=openai_config)

# Switch to Anthropic
new_agent = Agent.create(llm_config=anthropic_config)
\`\`\`

### From YAML

Just change the provider:

\`\`\`yaml
# llm.yaml
llm:
  provider: anthropic  # was: openai
  model: claude-3-opus
  temperature: 0.7
\`\`\`

## Fallback Chain

Use multiple providers with fallbacks:

\`\`\`python
from flowgentra_ai.llm import FallbackChain

chain = FallbackChain([
    openai_config,      # Try OpenAI first
    anthropic_config,   # Fallback to Anthropic
    groq_config,        # Fallback to Groq
])

agent = Agent.create(llm_config=chain)

# If OpenAI fails, automatically tries Anthropic, then Groq
result = await agent.run(state)
\`\`\`

## Best Practices

1. **For production:** Use tier-1 providers (OpenAI, Anthropic)
2. **For cost:** Use Mistral or Groq
3. **For privacy:** Use Ollama locally
4. **For variety:** Use fallback chains
5. **Monitor costs:** Track token usage per provider
6. **Test models:** Try multiple before committing

## Next Steps

- Explore model capabilities: https://docs.openai.com/en/docs
- Learn about tool use: [Tools Guide](/docs/tools)
- Tune temperature: [Prompting Best Practices](/docs/prompting)
`;

  return (
    <DocLayout 
      title="Supported LLM Providers"
      description="Complete guide to 7 LLM providers: OpenAI, Anthropic, Mistral, Groq, Ollama, Azure, HuggingFace."
      content={content}
    />
  );
};

export default LLMProviders;
