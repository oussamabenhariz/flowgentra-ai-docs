import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { conceptsData } from '../data/concepts'
import './ConceptsList.css'

/**
 * ConceptsList - Browse all core concepts
 * Organized by learning section with deep dives
 */
export default function ConceptsList() {
  const [expandedConcept, setExpandedConcept] = useState(null)

  return (
    <div className="concepts-container">
      <div className="concepts-hero">
        <h1>🧠 Core Concepts</h1>
        <p>Understand the foundations of Flowgentra AI</p>
      </div>

      {/* Concept Sections */}
      {Object.entries(conceptsData).map(([sectionId, section]) => (
        <section key={sectionId} className="concept-section">
          <div className="section-header">
            <h2>
              <span className="section-icon">{section.icon}</span>
              {section.section}
            </h2>
            <p className="section-description">{section.description}</p>
          </div>

          <div className="concepts-grid">
            {section.concepts.map(concept => (
              <div
                key={concept.id}
                className="concept-card"
                onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
              >
                <div className="concept-header">
                  <h3>{concept.title}</h3>
                  <p className="concept-short-desc">{concept.shortDesc}</p>
                </div>

                {expandedConcept === concept.id && (
                  <div className="concept-expanded">
                    {concept.keyTakeaways && (
                      <div className="takeaways">
                        <h4>Key Takeaways</h4>
                        <ul>
                          {concept.keyTakeaways.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {concept.agentPatterns && (
                      <div className="patterns">
                        <h4>Agent Patterns</h4>
                        <div className="patterns-list">
                          {concept.agentPatterns.map((pattern, i) => (
                            <div key={i} className="pattern-item">
                              <strong>{pattern.name}:</strong> {pattern.desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.nodeTypes && (
                      <div className="node-types">
                        <h4>Node Types</h4>
                        <div className="types-grid">
                          {concept.nodeTypes.map((type, i) => (
                            <div key={i} className="type-item">
                              <strong>{type.name}</strong>
                              <p>{type.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.examples && (
                      <div className="examples">
                        <h4>Examples</h4>
                        <ul>
                          {concept.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {concept.edgeTypes && (
                      <div className="edge-types">
                        <h4>Edge Types</h4>
                        <div className="types-list">
                          {concept.edgeTypes.map((edge, i) => (
                            <div key={i} className="edge-item">
                              <strong>{edge.name}:</strong> {edge.desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.routing && (
                      <div className="routing">
                        <h4>Routing</h4>
                        <ul>
                          {concept.routing.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {concept.handlerPattern && (
                      <div className="handler-pattern">
                        <h4>Handler Pattern</h4>
                        <ul>
                          {concept.handlerPattern.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {concept.providers && (
                      <div className="providers">
                        <h4>Providers</h4>
                        <div className="providers-list">
                          {concept.providers.map((provider, i) => (
                            <div key={i} className="provider-item">
                              <strong>{provider.name}</strong>
                              <p>{provider.models}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.memoryTypes && (
                      <div className="memory-types">
                        <h4>Memory Types</h4>
                        <div className="types-list">
                          {concept.memoryTypes.map((type, i) => (
                            <div key={i} className="type-item">
                              <strong>{type.name}:</strong> {type.desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.components && (
                      <div className="components">
                        <h4>Components</h4>
                        <div className="components-list">
                          {concept.components.map((comp, i) => (
                            <div key={i} className="component-item">
                              <strong>{comp.name}:</strong> {comp.desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {concept.workflow && (
                      <div className="workflow">
                        <h4>Workflow</h4>
                        <ol>
                          {concept.workflow.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    <button
                      className="learn-more-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Navigate to detailed guide
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                )}

                <div className="expand-hint">
                  {expandedConcept === concept.id ? '▲ Click to collapse' : '▼ Click to expand'}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Navigation Back */}
      <div className="nav-back">
        <Link to="/docs/getting-started">← Back to Getting Started</Link>
      </div>
    </div>
  )
}
