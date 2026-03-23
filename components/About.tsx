'use client'

export default function About() {
  const tags = [
    'Web3 Infrastructure',
    'ZK Protocols',
    'Consumer Crypto',
    'B2B SaaS',
    'Developer Marketing',
    'TGE Marketing',
    'Demand Gen',
    'Community',
  ]

  return (
    <section
      id="about"
      style={{
        background: '#0a0a0a',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: About text */}
          <div>
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
              About
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: 800,
                letterSpacing: '-1.8px',
                lineHeight: 1.08,
                marginBottom: '28px',
                color: '#fff',
              }}
            >
              One of the few people
              <br />
              who&rsquo;s done all three.
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: '#8a8a8a',
                lineHeight: 1.82,
                marginBottom: '20px',
              }}
            >
              Eric Vreeland has spent 15 years as the first marketing and GTM
              leader at companies ranging from enterprise SaaS data
              infrastructure to cross-chain crypto protocols to consumer wallet
              apps.{' '}
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                That full-stack range — from developer marketing at LayerZero to
                $35M ARR at People Data Labs — is the point.
              </strong>{' '}
              Most operators live in one world. Eric lives in all of them.
            </p>
            <p
              style={{
                fontSize: '17px',
                color: '#8a8a8a',
                lineHeight: 1.82,
                marginBottom: '20px',
              }}
            >
              Before going fractional, he held Head of Marketing and CMO roles
              across three Web3 companies spanning the full stack:
              infrastructure (LayerZero), ZK protocols (Polyhedra), and
              consumer crypto (Tria). Prior to that, he built the entire
              marketing and revenue motion at People Data Labs from scratch as
              their first GTM hire.
            </p>
            <p
              style={{
                fontSize: '17px',
                color: '#8a8a8a',
                lineHeight: 1.82,
              }}
            >
              He holds an{' '}
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                MBA from Berkeley Haas
              </strong>{' '}
              and a{' '}
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                BA in Economics from Princeton
              </strong>
              , where he was Varsity Water Polo Captain. Based in{' '}
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                Durham, NC
              </strong>
              . Works remotely across time zones. Operates like a founder, not
              a vendor.
            </p>
          </div>

          {/* Right: Aside cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Expertise */}
            <div
              style={{
                background: '#111111',
                border: '1px solid #1f1f1f',
                borderRadius: '12px',
                padding: '26px 28px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#444',
                  marginBottom: '10px',
                }}
              >
                Expertise
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(59,130,246,0.1)',
                      border: '1px solid rgba(59,130,246,0.18)',
                      color: '#3b82f6',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: '100px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div
              style={{
                background: '#111111',
                border: '1px solid #1f1f1f',
                borderRadius: '12px',
                padding: '26px 28px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#444',
                  marginBottom: '10px',
                }}
              >
                Education
              </div>
              <div
                style={{ fontSize: '15px', fontWeight: 500, color: '#fff', lineHeight: 1.6 }}
              >
                MBA, UC Berkeley Haas
                <br />
                <small style={{ color: '#8a8a8a', fontWeight: 400 }}>
                  Marketing &amp; Entrepreneurship
                </small>
                <br />
                <br />
                BA Economics, Princeton University
                <br />
                <small style={{ color: '#8a8a8a', fontWeight: 400 }}>
                  Varsity Water Polo Captain
                </small>
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                background: '#111111',
                border: '1px solid #1f1f1f',
                borderRadius: '12px',
                padding: '26px 28px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#444',
                  marginBottom: '10px',
                }}
              >
                Location
              </div>
              <div
                style={{ fontSize: '15px', fontWeight: 500, color: '#fff', lineHeight: 1.6 }}
              >
                Durham, NC — Remote-first
                <br />
                <small style={{ color: '#8a8a8a', fontWeight: 400 }}>
                  Available to travel NYC / DC / SF
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about { padding: 72px 24px !important; }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
