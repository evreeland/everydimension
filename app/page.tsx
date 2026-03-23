import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import TrackRecord from '@/components/TrackRecord'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <TrackRecord />
        <About />
        <Contact />
      </main>
      <footer
        style={{
          padding: '40px 48px',
          borderTop: '1px solid #1f1f1f',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: '#0a0a0a',
        }}
      >
        <a
          href="#hero"
          style={{
            fontSize: '15px',
            fontWeight: 800,
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Every<span style={{ color: '#3b82f6' }}>Dimension</span>
        </a>
        <p style={{ fontSize: '13px', color: '#444' }}>
          everydimension.xyz &mdash; Fractional CMO for Web3 and SaaS
        </p>
        <p style={{ fontSize: '13px', color: '#444' }}>
          &copy; {new Date().getFullYear()} Every Dimension. All rights reserved.
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 32px 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </>
  )
}
