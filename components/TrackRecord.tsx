'use client'

const companies = [
  {
    name: 'LayerZero',
    role: 'Head of Marketing — Cross-Chain Infrastructure',
    bullets: [
      <>
        Grew Twitter from <strong style={{ color: '#fff', fontWeight: 600 }}>240K → 510K+ followers</strong> (100%+ growth) while driving <strong style={{ color: '#fff', fontWeight: 600 }}>100M+ organic impressions</strong>
      </>,
      <>
        Led content and community strategy positioning LayerZero as the defining cross-chain messaging protocol
      </>,
      <>
        Built ecosystem presence across developer communities and DeFi partners at protocol scale
      </>,
    ],
  },
  {
    name: 'Polyhedra Network',
    role: 'Head of Marketing — ZK Infrastructure',
    bullets: [
      <>
        Closed <strong style={{ color: '#fff', fontWeight: 600 }}>$10M+ in ecosystem partnership deals</strong>, including a strategic deal with Google Cloud
      </>,
      <>
        Led TGE marketing, achieving a <strong style={{ color: '#fff', fontWeight: 600 }}>3× price increase</strong> at token generation event
      </>,
      <>
        Positioned ZK proof technology credibly for both developer and enterprise audiences simultaneously
      </>,
    ],
  },
  {
    name: 'Tria',
    role: 'Fractional CMO — Consumer Crypto / Account Abstraction',
    bullets: [
      <>
        Scaled users from <strong style={{ color: '#fff', fontWeight: 600 }}>50K → 500K+</strong> and drove <strong style={{ color: '#fff', fontWeight: 600 }}>$100M+ in on-chain transactions</strong>
      </>,
      <>
        Closed a <strong style={{ color: '#fff', fontWeight: 600 }}>$10M strategic partnership with Aptos</strong>; drove 100K+ users through a single partner campaign
      </>,
      <>
        Built AI-powered marketing ops tracking 42 KPIs across all channels — created full structure from scratch
      </>,
    ],
  },
  {
    name: 'People Data Labs',
    role: 'First GTM Hire — B2B SaaS / Data Infrastructure',
    bullets: [
      <>
        Scaled ARR from <strong style={{ color: '#fff', fontWeight: 600 }}>$5M to $35M</strong> as the founding GTM leader — 7× growth
      </>,
      <>
        Built marketing team <strong style={{ color: '#fff', fontWeight: 600 }}>1 → 10 FTEs</strong>, SDR team <strong style={{ color: '#fff', fontWeight: 600 }}>3 → 13</strong>, managed <strong style={{ color: '#fff', fontWeight: 600 }}>$3M+ annual paid budget</strong> producing 30K MQLs/year
      </>,
      <>
        Launched self-serve product generating <strong style={{ color: '#fff', fontWeight: 600 }}>$1M+ in revenue</strong>; generated $100M+ in total pipeline
      </>,
    ],
  },
]

export default function TrackRecord() {
  return (
    <section
      id="track-record"
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
          Proof
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
          The track record
          <br />
          speaks for itself
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
          Four companies. Three verticals. Each one built from near-zero into
          something real.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
          className="proof-grid"
        >
          {companies.map((co) => (
            <ProofCard key={co.name} {...co} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #track-record { padding: 72px 24px !important; }
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProofCard({
  name,
  role,
  bullets,
}: {
  name: string
  role: string
  bullets: React.ReactNode[]
}) {
  return (
    <div
      style={{
        background: '#161616',
        border: '1px solid #1f1f1f',
        borderRadius: '12px',
        padding: '38px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(59,130,246,0.35)'
        el.style.transform = 'translateY(-2px)'
        const accent = el.querySelector('.proof-accent') as HTMLDivElement
        if (accent) accent.style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#1f1f1f'
        el.style.transform = 'translateY(0)'
        const accent = el.querySelector('.proof-accent') as HTMLDivElement
        if (accent) accent.style.opacity = '0'
      }}
    >
      {/* Accent bar */}
      <div
        className="proof-accent"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: '#3b82f6',
          opacity: 0,
          transition: 'opacity 0.25s',
        }}
      />
      <div
        style={{
          fontSize: '24px',
          fontWeight: 800,
          letterSpacing: '-0.8px',
          marginBottom: '4px',
          color: '#fff',
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#3b82f6',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: '26px',
        }}
      >
        {role}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {bullets.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontSize: '14.5px',
              color: '#8a8a8a',
              paddingLeft: '22px',
              position: 'relative',
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                color: '#3b82f6',
                fontWeight: 700,
              }}
            >
              →
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
