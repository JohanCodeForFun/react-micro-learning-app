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
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              MICRO-LEARNING<br />
              APP --&gt; FOR BUSY<br />
              PROFESSIONALS
            </h1>
            <p className="hero-subtitle">
              Delivering 3-minute lessons on<br />
              skills like leadership, coding,<br />
              and communication.
            </p>
            <button className="cta-button" onClick={() => document.getElementById('email-form')?.scrollIntoView({ behavior: 'smooth' })}>
              GET FREE MINI COURSE
            </button>
          </div>
          <div className="hero-right">
            <img
              src="/microlearning-web-app.png"
              alt="MicroLearn App Interface"
              className="hero-image"
            />
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
      <section className="cta-section" id="email-form">
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
        <p className="image-credit">
          Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Alexander Grey</a> on <a href="https://unsplash.com/photos/assorted-books-on-wooden-table-eMP4sYPJ9x0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </p>
      </footer>
    </div>
  )
}

export default App
