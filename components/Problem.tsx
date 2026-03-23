'use client'

export default function Problem() {
  const problems = [
    {
      num: '01',
      title: 'Senior GTM costs $400K+/year — before equity',
      body: "At the seed or Series A stage, that's a burn category most boards won't approve. But going without real marketing leadership means your growth strategy is either nonexistent or delegated to people who are figuring it out alongside you.",
    },
    {
      num: '02',
      title: 'Most fractional CMOs are generalists with a deck',
      body: "They've run brand campaigns at mid-market SaaS companies. They'll talk about funnels and positioning frameworks. What they haven't done: market a ZK-proof protocol to enterprise, ship a TGE, or build developer adoption for cross-chain infrastructure.",
    },
    {
      num: '03',
      title: 'Every Dimension is different',
      body: 'A specific track record across Web3 infrastructure, ZK protocols, consumer crypto, and B2B SaaS. Three TGE-adjacent campaigns. $10M+ in ecosystem partnership deals. And the hands-on work ethic to actually execute — not just advise.',
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
          You need a CMO.
          <br />
          You don&rsquo;t need a full-time one.
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
          The window between product-market fit and real scale is where most
          early-stage companies lose momentum. Here&rsquo;s why.
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
