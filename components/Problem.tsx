'use client'

export default function Problem() {
  const problems = [
    {
      num: '01',
      title: 'Senior GTM talent is expensive and hard to find',
      body: "A full-time CMO costs $400K+ before equity. At the seed or Series A stage, that's a burn category most boards won't approve. But going without real marketing leadership means your growth strategy is either nonexistent or built by people learning on the job.",
    },
    {
      num: '02',
      title: 'Most agencies don\u2019t understand your market',
      body: "They've run brand campaigns at mid-market SaaS companies. They'll talk about funnels and positioning frameworks. What they can't do: market a ZK-proof protocol to enterprise, orchestrate a TGE, or build developer adoption for cross-chain infrastructure.",
    },
    {
      num: '03',
      title: 'We built Every Dimension to close that gap',
      body: "A firm purpose-built for the intersection of Web3 and SaaS \u2014 with deep operating experience across infrastructure protocols, consumer crypto, and enterprise data. We embed with your team, operate at the speed you need, and bring the pattern recognition that only comes from doing this at scale.",
    },
  ]

  return (
    <section
      id="problem"
      style={{
        background: '#111111',
        borderTop: '1px solid #1f1f1f',
        borderBottom: '1px solid #1f1f1f',
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
          The Gap
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            fontWeight: 800,
            letterSpacing: '-1.8px',
            lineHeight: 1.08,
            marginBottom: '20px',
            color: '#fff',
          }}
        >
          Great products don&rsquo;t
          <br />
          market themselves.
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#8a8a8a',
            maxWidth: '580px',
            lineHeight: 1.7,
            marginBottom: '60px',
          }}
        >
          The window between product-market fit and category leadership is
          where most companies stall. Here&rsquo;s why &mdash; and how we
          solve it.
        </p>

        {/* Problem grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid #1f1f1f',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
          className="prob-grid"
        >
          {problems.map((p, i) => (
            <div
              key={p.num}
              style={{
                background: '#161616',
                padding: '44px 36px',
                borderRight: i < 2 ? '1px solid #1f1f1f' : 'none',
              }}
              className="prob-item"
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.4px',
                  lineHeight: 1.3,
                  marginBottom: '14px',
                  color: '#fff',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#8a8a8a',
                  lineHeight: 1.75,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #problem { padding: 72px 24px !important; }
          .prob-grid {
            grid-template-columns: 1fr !important;
          }
          .prob-item {
            border-right: none !important;
            border-bottom: 1px solid #1f1f1f;
          }
          .prob-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  )
}
