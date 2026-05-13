import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import QuickStartRust from './pages/QuickStartRust'
import QuickStartPython from './pages/QuickStartPython'
import Installation from './pages/Installation'
import WhatIsFlowgentra from './pages/WhatIsFlowgentra'
import Graphs from './pages/Graphs'
import Nodes from './pages/Nodes'
import StateConcepts from './pages/StateConcepts'
import Runtime from './pages/Runtime'
import AgentsGuide from './pages/AgentsGuide'
import LLMGuide from './pages/LLMClientGuide'
import MemoryGuide from './pages/MemoryGuide'
import HumanInLoopGuide from './pages/HumanInLoopGuide'
import RAGGuide from './pages/RAGGuide'
import ToolsGuide from './pages/ToolsGuide'
import MCPGuide from './pages/MCPGuide'
import ErrorHandlingGuide from './pages/ErrorHandlingGuide'
import ConfigurationGuide from './pages/ConfigurationGuide'
import DocumentLoadersGuide from './pages/DocumentLoadersGuide'
import RerankingGuide from './pages/RerankingGuide'
import EvaluationGuide from './pages/EvaluationGuide'
import AdvancedNodesGuide from './pages/AdvancedNodesGuide'
import SupervisorGuide from './pages/SupervisorGuide'
import ObservabilityGuide from './pages/ObservabilityGuide'
import PluginsGuide from './pages/PluginsGuide'
import MiddlewareGuide from './pages/MiddlewareGuide'
import ValidationGuide from './pages/ValidationGuide'
import DatabaseGuide from './pages/DatabaseGuide'
import AgentBuilderGuide from './pages/AgentBuilderGuide'
import PredefinedAgents from './pages/PredefinedAgents'
import LLMProviders from './pages/LLMProviders'
import BestPractices from './pages/BestPractices'
import FAQ from './pages/FAQ'
import TopicPage from './pages/TopicPage'
import GuidesList from './pages/GuidesList'
import ConceptsList from './pages/ConceptsList'
import Examples from './pages/Examples'
import Changelog from './pages/Changelog'
import Glossary from './pages/Glossary'
import PluginsCompleteGuide from './pages/PluginsCompleteGuide'
import MiddlewareCompleteGuide from './pages/MiddlewareCompleteGuide'
import ValidationCompleteGuide from './pages/ValidationCompleteGuide'
import PerformanceOptimizationGuide from './pages/PerformanceOptimizationGuide'
import TutorialResearchAssistant from './pages/TutorialResearchAssistant'
import SkillsGuide from './pages/SkillsGuide'

// Import navigation data structures
import { navigationStructure, searchCategories, featureHighlights, useCaseNavigation } from './data/navigation'
import { guidesData } from './data/guides'
import { conceptsData } from './data/concepts'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/flowgentra-ai-docs">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Get Started */}
              <Route path="/docs/getting-started"   element={<GettingStarted />} />
              <Route path="/docs/quickstart-rust"   element={<QuickStartRust />} />
              <Route path="/docs/quickstart-python" element={<QuickStartPython />} />
              <Route path="/docs/installation"      element={<Installation />} />

              {/* Core Concepts */}
              <Route path="/docs/what-is-flowgentra" element={<WhatIsFlowgentra />} />
              <Route path="/docs/state-concepts"     element={<StateConcepts />} />
              <Route path="/docs/graphs"             element={<Graphs />} />
              <Route path="/docs/nodes"              element={<Nodes />} />
              <Route path="/docs/runtime"            element={<Runtime />} />

              {/* Guides */}
              <Route path="/docs/agents"             element={<AgentsGuide />} />
              <Route path="/docs/predefined-agents"  element={<PredefinedAgents />} />
              <Route path="/docs/llm-client"         element={<LLMGuide />} />
              <Route path="/docs/llm-providers"      element={<LLMProviders />} />
              <Route path="/docs/tools"              element={<ToolsGuide />} />
              <Route path="/docs/skills"             element={<SkillsGuide />} />
              <Route path="/docs/mcp"                element={<MCPGuide />} />
              <Route path="/docs/memory"             element={<MemoryGuide />} />
              <Route path="/docs/rag"                element={<RAGGuide />} />
              <Route path="/docs/document-loaders"   element={<DocumentLoadersGuide />} />
              <Route path="/docs/supervisor"         element={<SupervisorGuide />} />
              <Route path="/docs/human-in-the-loop"  element={<HumanInLoopGuide />} />
              <Route path="/docs/error-handling"     element={<ErrorHandlingGuide />} />
              <Route path="/docs/evaluation"         element={<EvaluationGuide />} />
              <Route path="/docs/observability"      element={<ObservabilityGuide />} />
              <Route path="/docs/advanced-nodes"     element={<AdvancedNodesGuide />} />
              <Route path="/docs/reranking"          element={<RerankingGuide />} />
              <Route path="/docs/configuration"      element={<ConfigurationGuide />} />
              <Route path="/docs/plugins"            element={<PluginsCompleteGuide />} />
              <Route path="/docs/middleware"          element={<MiddlewareCompleteGuide />} />
              <Route path="/docs/validation"          element={<ValidationCompleteGuide />} />
              <Route path="/docs/performance"         element={<PerformanceOptimizationGuide />} />
              <Route path="/docs/database"           element={<DatabaseGuide />} />
              <Route path="/docs/api/agent-builder"        element={<AgentBuilderGuide />} />
              <Route path="/docs/tutorials/research-assistant" element={<TutorialResearchAssistant />} />

              {/* API Reference */}
              <Route path="/docs/api/:topicId" element={<TopicPage />} />

              {/* Organized Navigation */}
              <Route path="/docs/guides" element={<GuidesList guidesData={guidesData} />} />
              <Route path="/docs/concepts" element={<ConceptsList conceptsData={conceptsData} />} />

              {/* Resources */}
              <Route path="/docs/examples"       element={<Examples />} />
              <Route path="/docs/best-practices" element={<BestPractices />} />
              <Route path="/docs/glossary"       element={<Glossary />} />
              <Route path="/docs/faq"            element={<FAQ />} />
              <Route path="/docs/changelog"      element={<Changelog />} />

              {/* Redirects */}
              <Route path="/docs/api-reference" element={<Navigate to="/docs/api/state-graph" replace />} />
              <Route path="/docs" element={<Navigate to="/docs/getting-started" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
