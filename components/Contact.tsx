'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mkoqdrno', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: '#161616',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '15px',
    padding: '13px 15px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
    width: '100%',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#8a8a8a',
    letterSpacing: '0.3px',
    marginBottom: '7px',
    display: 'block',
  }

  return (
    <section
      id="contact"
      style={{
        background: '#111111',
        borderTop: '1px solid #1f1f1f',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '14px',
          }}
        >
          Let&rsquo;s Talk
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            fontWeight: 800,
            letterSpacing: '-1.8px',
            lineHeight: 1.08,
            marginBottom: '60px',
            color: '#fff',
          }}
        >
          Ready to build
          <br />
          something real?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                marginBottom: '14px',
                color: '#fff',
              }}
            >
              The right engagement starts with the right conversation.
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: '#8a8a8a',
                lineHeight: 1.75,
                marginBottom: '36px',
              }}
            >
              If you&rsquo;re building something in Web3 or SaaS and you need
              senior GTM leadership that can hit the ground running &mdash; not
              a six-week onboarding &mdash; let&rsquo;s talk. Typical
              engagements run 3&ndash;6 months with flexible scope.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:eric.vreeland@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '15px',
                  color: '#8a8a8a',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#8a8a8a')
                }
              >
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#161616',
                    border: '1px solid #1f1f1f',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '17px',
                    flexShrink: 0,
                  }}
                >
                  ✉
                </span>
                eric.vreeland@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/evreeland"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '15px',
                  color: '#8a8a8a',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#8a8a8a')
                }
              >
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#161616',
                    border: '1px solid #1f1f1f',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#3b82f6',
                    flexShrink: 0,
                  }}
                >
                  in
                </span>
                linkedin.com/in/evreeland
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '12px',
                  padding: '48px 36px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px',
                  }}
                >
                  Message sent.
                </h3>
                <p style={{ color: '#8a8a8a', fontSize: '15px' }}>
                  I&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
                  className="form-row"
                >
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6'
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#2a2a2a'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6'
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#2a2a2a'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#2a2a2a'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your company, stage, and what you're trying to solve..."
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '140px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#2a2a2a'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '14px' }}>
                    Something went wrong. Please try emailing directly at eric.vreeland@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    background: '#3b82f6',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '16px',
                    fontWeight: 700,
                    padding: '16px 36px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    alignSelf: 'flex-start',
                    letterSpacing: '-0.2px',
                    transition: 'opacity 0.2s, transform 0.15s',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') {
                      const el = e.currentTarget as HTMLButtonElement
                      el.style.opacity = '0.85'
                      el.style.transform = 'translateY(-1px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.opacity = status === 'sending' ? '0.7' : '1'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact { padding: 72px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
