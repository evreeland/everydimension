'use client'

const services = [
  {
    icon: '🎯',
    title: 'Positioning & Narrative',
    body: "You have a great product. Making people understand why it matters is a different skill. We build the story that makes your category — not just your feature set — compelling to developers, enterprises, and investors alike.",
  },
  {
    icon: '🚀',
    title: 'GTM for Developer & Enterprise Adoption',
    body: "Developer marketing isn't content marketing with a technical skin. It requires credibility, the right channels, and a motion that respects how engineers evaluate tools. We build programs that drive real integration and adoption.",
  },
  {
    icon: '✍️',
    title: 'Content & Thought Leadership',
    body: "Technical blogs, ecosystem reports, founder POV pieces, and the distribution strategy to put them in front of the right people. Content that builds authority — not just traffic numbers nobody believes.",
  },
  {
    icon: '🌐',
    title: 'Community & Social Foundation',
    body: "From Discord architecture to Twitter/X growth strategy — we build channels that compound. Organic community is the cheapest acquisition you'll ever run. But only if you set it up right from the start.",
  },
  {
    icon: '💻',
    title: 'TGE Preparation (End-to-End)',
    body: "Token launches reward preparation and punish improvisation. We handle narrative positioning, community sequencing, KOL strategy, exchange coordination, and the full 90-day communications plan surrounding a TGE.",
  },
  {
    icon: '🤝',
    title: 'PR & Ecosystem Partnerships',
    body: "Earned media and strategic partnerships that carry real weight — not press releases nobody reads. We close ecosystem deals and drive coverage that shapes how protocols are perceived at launch and beyond.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#0a0a0a',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
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
              What We Do
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: 800,
                letterSpacing: '-1.8px',
                lineHeight: 1.08,
                color: '#fff',
              }}
            >
              GTM that actually
              <br />
              moves things
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#3b82f6',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 700,
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '-0.2px',
              transition: 'opacity 0.2s, transform 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '0.85'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }}
          >
            Start a Conversation
          </a>
        </div>

        {/* Service cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="svc-grid"
        >
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services { padding: 72px 24px !important; }
          .svc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  body,
}: {
  icon: string
  title: string
  body: string
}) {
  return (
    <div
      style={{
        background: '#111111',
        border: '1px solid #1f1f1f',
        borderRadius: '12px',
        padding: '36px 30px',
        transition: 'border-color 0.25s, transform 0.2s, box-shadow 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(59,130,246,0.45)'
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow =
          '0 20px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#1f1f1f'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.18)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          marginBottom: '20px',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: '17px',
          fontWeight: 700,
          letterSpacing: '-0.3px',
          marginBottom: '10px',
          lineHeight: 1.3,
          color: '#fff',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#8a8a8a',
          lineHeight: 1.72,
        }}
      >
        {body}
      </p>
    </div>
  )
}
