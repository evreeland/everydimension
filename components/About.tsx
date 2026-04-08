'use client'

export default function About() {
  const principles = [
    {
      title: 'Operators, not advisors',
      body: 'We embed with your team and execute alongside you. No decks handed off at the door \u2014 we own outcomes, not recommendations.',
    },
    {
      title: 'Full-stack GTM',
      body: 'From developer marketing and community to TGE strategy and enterprise partnerships. We cover every dimension of go-to-market.',
    },
    {
      title: 'Built for Web3 + SaaS',
      body: 'Deep experience across infrastructure protocols, ZK, consumer crypto, and enterprise data. We speak your market\u2019s language natively.',
    },
  ]

  const sectors = [
    'Web3 Infrastructure',
    'ZK Protocols',
    'Consumer Crypto',
    'DeFi',
    'B2B SaaS',
    'Developer Tools',
    'Data Infrastructure',
    'Fintech',
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
          Our Approach
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
          Strategy that ships.
          <br />
          Not strategy that sits.
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#8a8a8a',
            maxWidth: '620px',
            lineHeight: 1.75,
            marginBottom: '64px',
          }}
        >
          Every Dimension was founded on a simple premise: the best GTM work
          happens when strategic thinking and hands-on execution come from
          the same team. We bring 15+ years of operating experience scaling
          companies from seed to nine figures &mdash; and we bring it to
          every engagement.
        </p>

        {/* Principles grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '64px',
          }}
          className="about-grid"
        >
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                background: '#111111',
                border: '1px solid #1f1f1f',
                borderRadius: '12px',
                padding: '36px 30px',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(59,130,246,0.35)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor =
                  '#1f1f1f'
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.3px',
                  marginBottom: '12px',
                  color: '#fff',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#8a8a8a',
                  lineHeight: 1.72,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div
          style={{
            background: '#111111',
            border: '1px solid #1f1f1f',
            borderRadius: '12px',
            padding: '32px 36px',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#444',
              marginBottom: '16px',
            }}
          >
            Sectors We Serve
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {sectors.map((tag) => (
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about { padding: 72px 24px !important; }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
