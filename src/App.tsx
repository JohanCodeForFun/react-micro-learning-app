import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (would connect to backend in production)
    console.log('Email submitted:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="logo-badge">⚡ MicroLearn</div>
          <h1 className="hero-title">
            Master New Skills in Just<br />
            <span className="highlight">3 Minutes</span>
          </h1>
          <p className="hero-subtitle">
            Bite-sized lessons designed for busy professionals who want to keep growing without sacrificing their schedule.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">3 min</div>
              <div className="stat-label">Per Lesson</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Skills to Learn</div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="value-section">
        <h2 className="section-title">Why MicroLearn?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Focused Learning</h3>
            <p>Each lesson delivers exactly one skill or concept you can apply immediately.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Gamified Progress</h3>
            <p>Earn points, unlock badges, and track your streak as you build new skills.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Fits Your Schedule</h3>
            <p>3-minute lessons mean you can learn during coffee breaks or commutes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Stay Competitive</h3>
            <p>Keep pace with rapidly evolving skill demands in leadership, coding, and communication.</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="topics-section">
        <h2 className="section-title">What You'll Learn</h2>
        <div className="topics-grid">
          <div className="topic-tag">Leadership Skills</div>
          <div className="topic-tag">Web Development</div>
          <div className="topic-tag">Communication</div>
          <div className="topic-tag">Data Analytics</div>
          <div className="topic-tag">Product Management</div>
          <div className="topic-tag">Design Thinking</div>
          <div className="topic-tag">Time Management</div>
          <div className="topic-tag">Public Speaking</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">🎁 Start with a Free Mini Course</h2>
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
                Get Free Course
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Thanks! Check your inbox for your first mini course.</p>
            </div>
          )}

          <p className="privacy-note">
            No spam. Unsubscribe anytime. We respect your time and inbox.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MicroLearn. Built for busy professionals who never stop growing.</p>
      </footer>
    </div>
  )
}

export default App
