'use client'

const results = [
  {
    category: 'Revenue & Growth',
    icon: '↗',
    highlights: [
      { metric: '$5M to $35M ARR', detail: 'Scaled a B2B SaaS data company through 7\u00D7 revenue growth' },
      { metric: '$1B+ pipeline', detail: 'Total revenue pipeline generated across engagements' },
      { metric: '$1M+ self-serve launch', detail: 'Built and launched a product-led revenue channel from scratch' },
    ],
  },
  {
    category: 'User Acquisition',
    icon: '◈',
    highlights: [
      { metric: '50K to 500K+ users', detail: 'Scaled a consumer crypto platform through strategic campaigns' },
      { metric: '100M+ organic impressions', detail: 'Built social presence that drove protocol-level awareness' },
      { metric: '100K+ users in a single campaign', detail: 'Drove adoption through a major ecosystem partnership' },
    ],
  },
  {
    category: 'Strategic Partnerships',
    icon: '⬡',
    highlights: [
      { metric: '$20M+ in deals closed', detail: 'Ecosystem partnerships including a strategic deal with Google Cloud' },
      { metric: 'Enterprise positioning', detail: 'Positioned deep-tech protocols credibly for both developer and enterprise audiences' },
      { metric: 'Cross-ecosystem reach', detail: 'Built partnership networks spanning DeFi, infrastructure, and Layer 1s' },
    ],
  },
  {
    category: 'Token & Launch Strategy',
    icon: '◆',
    highlights: [
      { metric: '3\u00D7 price increase at TGE', detail: 'Led end-to-end token generation event marketing strategy' },
      { metric: 'Full-stack launch ops', detail: 'Narrative, community sequencing, KOL strategy, and exchange coordination' },
      { metric: '42 KPIs tracked', detail: 'Built AI-powered marketing ops infrastructure from zero' },
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
          Results
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
          What we&rsquo;ve built
          <br />
          for our partners
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
          Across Web3 infrastructure, consumer crypto, and enterprise SaaS
          &mdash; measurable outcomes, not slide decks.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
          className="results-grid"
        >
          {results.map((r) => (
            <ResultCard key={r.category} {...r} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #track-record { padding: 72px 24px !important; }
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ResultCard({
  category,
  icon,
  highlights,
}: {
  category: string
  icon: string
  highlights: { metric: string; detail: string }[]
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
        const accent = el.querySelector('.result-accent') as HTMLDivElement
        if (accent) accent.style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#1f1f1f'
        el.style.transform = 'translateY(0)'
        const accent = el.querySelector('.result-accent') as HTMLDivElement
        if (accent) accent.style.opacity = '0'
      }}
    >
      {/* Accent bar */}
      <div
        className="result-accent"
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
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '26px',
        }}
      >
        <span
          style={{
            width: '36px',
            height: '36px',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.18)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: '#3b82f6',
          }}
        >
          {icon}
        </span>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#3b82f6',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {highlights.map((h) => (
          <div key={h.metric}>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.4px',
                color: '#fff',
                marginBottom: '4px',
              }}
            >
              {h.metric}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: '#8a8a8a',
                lineHeight: 1.55,
              }}
            >
              {h.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
