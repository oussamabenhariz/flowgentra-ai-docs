import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Installation from './pages/Installation'
import WhatIsFlowgentra from './pages/WhatIsFlowgentra'
import Graphs from './pages/Graphs'
import Nodes from './pages/Nodes'
import StateConcepts from './pages/StateConcepts'
import AgentsGuide from './pages/AgentsGuide'
import LLMClientGuide from './pages/LLMClientGuide'
import BestPractices from './pages/BestPractices'
import FAQ from './pages/FAQ'
import TopicPage from './pages/TopicPage'
import Examples from './pages/Examples'
import Changelog from './pages/Changelog'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/flowgentra-ai-docs">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs/getting-started" element={<GettingStarted />} />
              <Route path="/docs/installation" element={<Installation />} />
              <Route path="/docs/what-is-flowgentra" element={<WhatIsFlowgentra />} />
              <Route path="/docs/concepts/graphs" element={<Graphs />} />
              <Route path="/docs/concepts/nodes" element={<Nodes />} />
              <Route path="/docs/concepts/state" element={<StateConcepts />} />
              <Route path="/docs/guides/agents" element={<AgentsGuide />} />
              <Route path="/docs/guides/llm-client" element={<LLMClientGuide />} />
              <Route path="/docs/best-practices" element={<BestPractices />} />
              <Route path="/docs/faq" element={<FAQ />} />
              <Route path="/docs/api/:topicId" element={<TopicPage />} />
              {/* backward-compat redirect */}
              <Route path="/docs/api-reference" element={<Navigate to="/docs/api/state-graph" replace />} />
              <Route path="/docs/examples" element={<Examples />} />
              <Route path="/docs/changelog" element={<Changelog />} />
              <Route path="/docs" element={<Navigate to="/docs/getting-started" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
