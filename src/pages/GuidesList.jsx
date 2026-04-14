import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { guidesData, learningPaths } from '../data/guides'
import './GuidesList.css'

/**
 * GuidesList - Browse all guides organized by category
 * Shows difficulty levels, read times, and learning paths
 */
export default function GuidesList() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [expandedCategory, setExpandedCategory] = useState(null)

  const difficulties = {
    beginner: '🟢 Beginner',
    intermediate: '🟡 Intermediate',
    advanced: '🔴 Advanced',
  }

  const filterGuides = (guides) => {
    if (selectedDifficulty === 'all') return guides
    return guides.filter(g => g.difficulty === selectedDifficulty)
  }

  return (
    <div className="guides-container">
      <div className="guides-hero">
        <h1>📚 Guides & How-To's</h1>
        <p>Learn Flowgentra step by step with organized guides</p>
      </div>

      {/* Learning Paths */}
      <section className="learning-paths">
        <h2>🛣️ Recommended Learning Paths</h2>
        <div className="paths-grid">
          {learningPaths.map(path => (
            <div key={path.title} className="learning-path-card">
              <div className="path-icon">{path.icon}</div>
              <h3>{path.title}</h3>
              <p className="path-duration">⏱️ {path.duration}</p>
              <p>{path.description}</p>
              <div className="path-steps">
                {path.steps.slice(0, 3).map(step => (
                  <span key={step.id} className="step-bubble">
                    {step.title.split(' ')[0]}
                  </span>
                ))}
                <span className="step-more">+{path.steps.length - 3}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Difficulty Filter */}
      <div className="filter-section">
        <h3>Filter by Difficulty</h3>
        <div className="difficulty-filters">
          {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
            <button
              key={level}
              className={`filter-btn ${selectedDifficulty === level ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty(level)}
            >
              {level === 'all' ? 'All Levels' : difficulties[level]}
            </button>
          ))}
        </div>
      </div>

      {/* Organized by Category */}
      <section className="guides-by-category">
        {Object.entries(guidesData).map(([categoryId, category]) => {
          const filteredGuides = filterGuides(category.guides)
          if (filteredGuides.length === 0) return null

          return (
            <div key={categoryId} className="category-section">
              <div
                className="category-header"
                onClick={() => setExpandedCategory(expandedCategory === categoryId ? null : categoryId)}
              >
                <span className="category-icon">{category.icon}</span>
                <div className="category-info">
                  <h2>{category.category}</h2>
                  <p>{category.description}</p>
                </div>
                <span className="guide-count">{filteredGuides.length}</span>
                <span className="expand-icon">
                  {expandedCategory === categoryId ? '▼' : '▶'}
                </span>
              </div>

              {expandedCategory === categoryId && (
                <div className="guides-list">
                  {filteredGuides.map(guide => (
                    <div key={guide.id} className="guide-card">
                      <Link to={`/docs/${guide.category.toLowerCase().replace(/\s+/g, '-')}/${guide.id}`} className="guide-link">
                        <div className="guide-header">
                          <h3>{guide.title}</h3>
                          <span className={`difficulty ${guide.difficulty}`}>
                            {difficulties[guide.difficulty]}
                          </span>
                        </div>
                        <p className="guide-description">{guide.description}</p>
                        <div className="guide-meta">
                          <span className="read-time">📖 {guide.readTime}</span>
                          {guide.related && (
                            <span className="related-count">
                              🔗 {guide.related.length} related
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* Quick Start Links */}
      <section className="quick-start">
        <h2>⚡ Quick Start</h2>
        <div className="quick-links">
          <Link to="/docs/getting-started/installation" className="quick-link">
            📦 Installation
          </Link>
          <Link to="/docs/quickstart-python" className="quick-link">
            🐍 Python Quick Start
          </Link>
          <Link to="/docs/quickstart-rust" className="quick-link">
            🦀 Rust Quick Start
          </Link>
          <Link to="/docs/first-agent" className="quick-link">
            🤖 Build First Agent
          </Link>
        </div>
      </section>
    </div>
  )
}
