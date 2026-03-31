import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">MicroLearn</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#topics">Topics</a>
            <a href="#email-form" className="nav-cta">Get Started Free</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">✨ New lessons every week</div>
            <h1 className="hero-title">
              Learn three Skills in<br />
              <span className="gradient-text">3 Minutes a Day</span>
            </h1>
            <p className="hero-subtitle">
              Bite-sized lessons on leadership, coding, and communication —
              designed for busy professionals who never stop growing.
            </p>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => document.getElementById('email-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Free Mini Course
              </button>
              <a href="#features" className="secondary-link">See how it works →</a>
            </div>
          </div>
          <div className="hero-right">
            <img
              src="/microlearn-hero-image_480px.png"
              alt="MicroLearn App Interface"
              className="hero-image"
            />
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Active Learners</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Micro Lessons</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3 min</span>
            <span className="stat-label">Avg. Lesson Length</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4.9 ★</span>
            <span className="stat-label">Learner Rating</span>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section" id="features">
        <div className="section-header">
          <p className="section-label">Why MicroLearn</p>
          <h2 className="section-title">Learning, reimagined for your schedule</h2>
          <p className="section-desc">We took the best of education and stripped away everything that wastes your time.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <span className="feature-icon">🎯</span>
            </div>
            <h3>Focused Learning</h3>
            <p>Each lesson delivers exactly one skill or concept you can apply immediately.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <span className="feature-icon">🎮</span>
            </div>
            <h3>Gamified Progress</h3>
            <p>Earn points, unlock badges, and track your streak as you build new skills.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <span className="feature-icon">⏰</span>
            </div>
            <h3>Fits Your Schedule</h3>
            <p>3-minute lessons mean you can learn during coffee breaks or commutes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <span className="feature-icon">📈</span>
            </div>
            <h3>Stay Competitive</h3>
            <p>Keep pace with rapidly evolving skill demands in leadership, coding, and communication.</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="topics-section" id="topics">
        <div className="section-header">
          <p className="section-label">Curriculum</p>
          <h2 className="section-title">What You'll Learn</h2>
          <p className="section-desc">From hard tech skills to soft skills — we have you covered.</p>
        </div>
        <div className="topics-grid">
          <div className="topic-tag">🚀 Leadership Skills</div>
          <div className="topic-tag">💻 Web Development</div>
          <div className="topic-tag">💬 Communication</div>
          <div className="topic-tag">📊 Data Analytics</div>
          <div className="topic-tag">🗂️ Product Management</div>
          <div className="topic-tag">🎨 Design Thinking</div>
          <div className="topic-tag">⏱️ Time Management</div>
          <div className="topic-tag">🎤 Public Speaking</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="email-form">
        <div className="cta-content">
          <div className="cta-badge">🎁 Free - no credit card required</div>
          <h2 className="cta-title">Start with a Free Mini Course</h2>
          <p className="cta-subtitle">
            Get our "Mini Course of the Week" delivered to your inbox.
            Learn something new every week, completely free.
          </p>

          {!isSubmitted ? (
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="submit-btn">
                Get Free Course →
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Thanks! Check your inbox for your first mini course.</p>
            </div>
          )}

          <p className="privacy-note">
            🔒 No spam. Unsubscribe anytime. We respect your time and inbox.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">MicroLearn</span>
          </div>
          <p className="footer-tagline">Built for busy professionals who never stop growing.</p>
          <p className="footer-copy">&copy; 2025 MicroLearn. All rights reserved.</p>
          <p className="image-credit">
            Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Alexander Grey</a> on <a href="https://unsplash.com/photos/assorted-books-on-wooden-table-eMP4sYPJ9x0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
