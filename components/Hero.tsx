'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 48px 100px',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-300px',
          left: '-200px',
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.22)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#3b82f6',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#3b82f6',
              boxShadow: '0 0 6px #3b82f6',
              flexShrink: 0,
            }}
          />
          GTM Strategy &middot; Web3 &amp; SaaS
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(44px, 7.5vw, 84px)',
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: '-3px',
            marginBottom: '28px',
            color: '#fff',
          }}
        >
          We turn ambitious
          <br />
          companies into
          <br />
          market{' '}
          <em style={{ fontStyle: 'normal', color: '#3b82f6' }}>leaders.</em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '20px',
            color: '#8a8a8a',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '44px',
          }}
        >
          Every Dimension is a{' '}
          <strong style={{ color: '#fff', fontWeight: 500 }}>
            GTM strategy firm
          </strong>{' '}
          that partners with Web3 protocols, crypto infrastructure companies,
          and high-growth SaaS teams to build the go-to-market engines that
          drive category leadership.
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#3b82f6',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 700,
              padding: '16px 38px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '-0.2px',
              transition: 'opacity 0.2s, transform 0.15s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '0.85'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 12px 40px rgba(59,130,246,0.35)'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            Work With Us
          </a>
          <span style={{ fontSize: '14px', color: '#444' }}>
            Strategy. Execution. Results.
          </span>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: '56px',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid #1f1f1f',
            flexWrap: 'wrap',
          }}
        >
          {[
            { val: '$1B', suffix: '+', label: 'Revenue pipeline generated' },
            { val: '7', suffix: '×', label: 'Average revenue growth delivered' },
            { val: '1M', suffix: '+', label: 'Users acquired across products' },
            { val: '$20M', suffix: '+', label: 'In partnership deals closed' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: '34px',
                  fontWeight: 800,
                  letterSpacing: '-1.5px',
                  color: '#fff',
                }}
              >
                {stat.val}
                <span style={{ color: '#3b82f6' }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#8a8a8a',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero {
            padding: 120px 24px 80px !important;
          }
          #hero h1 {
            letter-spacing: -1.5px !important;
          }
        }
      `}</style>
    </section>
  )
}
