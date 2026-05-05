import { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/* ─── ICONS ─── */
const IcoWA = ({ s = 20, color = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
)
const IcoFB = ({ s = 20, color = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const IcoIG = ({ s = 20, color = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const IcoPhone = ({ s = 20, color = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" transform="translate(1,1) scale(0.88)"/>
  </svg>
)
const IcoHome   = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
const IcoHotel  = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="16" rx="1"/><path d="M2 12h20M6 12V6M18 12V6"/></svg>
const IcoCar    = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 11l2-5h10l2 5M3 11h18v7H3z"/><path d="M7 18v2M17 18v2"/><circle cx="7.5" cy="14.5" r="1"/><circle cx="16.5" cy="14.5" r="1"/></svg>
const IcoCheck  = ({ s = 13 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
const IcoArrow  = ({ s = 13 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
const IcoMap    = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
const IcoStar   = ({ s = 13 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
const IcoDl     = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
const IcoPalette= ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0010 10c.926 0 1.648-.746 1.648-1.667 0-.437-.18-.834-.45-1.12A1.667 1.667 0 0114.334 18H16a6 6 0 006-6c0-5.523-4.477-10-10-10z"/><circle cx="8.5" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="5.5" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="7.5" r="1" fill="currentColor" stroke="none"/></svg>
const IcoNeedle = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 3.5L3.5 20.5M9 4l4 4-8 8a2 2 0 002.8 2.8L16 10l4-4"/></svg>
const IcoZap    = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
const IcoRefresh= ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
const IcoShield = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const IcoAward  = ({ s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>

/* ─── NAV DATA ─── */
const NAV = [
  { label: 'Home',             href: '#home' },
  { label: 'At Your Location', href: '#location' },
  { label: 'About',            href: '#about' },
  { label: 'Gallery',          href: '#gallery' },
  { label: 'Services',         href: '#services' },
  { label: 'Contact',          href: '#contact' },
]

/* ─── CONTACTS ─── */
const CONTACTS = [
  { href: 'https://wa.me/639186539106',                               Icon: IcoWA,    color: '#25D366', label: 'WhatsApp / Call',  value: '0918 653 9106',        sub: 'Message us instantly' },
  { href: 'https://www.facebook.com/profile.php?id=61559055857122',  Icon: IcoFB,    color: '#1877F2', label: 'Facebook Page',    value: 'Golden Needle Tattoo', sub: 'Like & follow' },
  { href: 'https://www.instagram.com/joeystattooist_/',              Icon: IcoIG,    color: '#C13584', label: 'Instagram',        value: '@joeystattooist_',     sub: 'Latest work & updates' },
  { href: 'https://www.facebook.com/profile.php?id=61573327302000',  Icon: IcoFB,    color: '#1877F2', label: "Joey's Facebook",  value: 'Joey Agrabio',         sub: 'Connect personally' },
]

/* ─── GALLERY — accurate labels from actual image content ─── */
const GALLERY = [
  { src: '/images/work1.png',  label: 'In Session',          sub: 'Back Tattoo · Joey at Work' },
  { src: '/images/work3.png',  label: 'Chest & Shoulder',    sub: 'Heavy Blackwork · Completed Piece' },
  { src: '/images/work5.png',  label: 'Chest Work',          sub: 'Rib & Chest · In Progress' },
  { src: '/images/work4.png',  label: 'Happy Client',        sub: 'Joey with Satisfied Client' },
  { src: '/images/work7.png',  label: 'Full Back Color',     sub: 'Color Back Piece · Completed' },
  { src: '/images/work6.png',  label: 'Studio Session',      sub: 'Leg Piece · Studio Work' },
  { src: '/images/work9.png',  label: 'Arm Work',            sub: 'Arm Session · In Progress' },
  { src: '/images/work8.png',  label: 'Leg Tattoo',          sub: 'Leg & Calf · In Session' },
  { src: '/images/work10.png', label: 'International Client', sub: 'Joey & Happy International Guest' },
]

/* ─── SERVICES ─── */
const SERVICES = [
  { Ico: IcoPalette, title: 'Custom Design',          desc: 'Every tattoo starts as your idea. Joey works with you from initial sketch to final ink — no flash sheets, no shortcuts.' },
  { Ico: IcoNeedle,  title: 'Large-Scale Pieces',     desc: 'Full backs, sleeves, chest plates — elaborate work that commands a room. Joey specialises in ambitious, multi-session projects.' },
  { Ico: IcoAward,   title: 'Black & Grey Realism',   desc: 'Photorealistic portraits and detailed scenes with breathtaking depth — developed through three decades of mastery.' },
  { Ico: IcoZap,     title: 'Color & Neo-Traditional', desc: 'Bold palettes, saturated fills, timeless composition. Tattoos that hold their brilliance for years.' },
  { Ico: IcoRefresh, title: 'Cover-Up & Rework',      desc: 'Unwanted ink gets a second life. Expert planning and execution turns old pieces into something worth showing off.' },
  { Ico: IcoShield,  title: 'Touch-Up & Aftercare',   desc: 'Your tattoo is a lifelong investment. We ensure it stays sharp and vibrant — with free touch-up guidance for every client.' },
]

/* ─── RULE ─── */
function Rule({ left = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11, margin: '20px 0', justifyContent: left ? 'flex-start' : 'center' }}>
      <div style={{ height: 1, width: left ? 40 : 60, background: 'linear-gradient(to right, transparent, #BF9B30)' }} />
      <div style={{ width: 5, height: 5, background: '#BF9B30', transform: 'rotate(45deg)', flexShrink: 0 }} />
      <div style={{ height: 1, width: left ? 40 : 60, background: 'linear-gradient(to left, transparent, #BF9B30)' }} />
    </div>
  )
}

/* ─── CALLING CARD ─── */
function CallingCard() {
  const cardRef = useRef(null)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return
    setDownloading(true)
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
        logging: false,
      })
      const link = document.createElement('a')
      link.download = 'golden-needle-calling-card.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) {
      console.error(e)
    }
    setDownloading(false)
  }

  return (
    <div style={{ width:'100%' }}>
      {/* Scale wrapper — card stays 440×248 for html2canvas; CSS scales it visually */}
      <div className="calling-card-outer">
        <div className="calling-card-inner">
          <div
            ref={cardRef}
            style={{
              width: 440, height: 248,
              background: 'linear-gradient(135deg, #0a0800 0%, #111000 50%, #0a0800 100%)',
              border: '1px solid rgba(191,155,48,0.45)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Corner accents */}
            {[['tl','top','left'],['tr','top','right'],['bl','bottom','left'],['br','bottom','right']].map(([k,y,x]) => (
              <div key={k} style={{
                position:'absolute', [y]:12, [x]:12, width:22, height:22,
                borderTop:    y==='top'    ? '1px solid #BF9B30' : 'none',
                borderBottom: y==='bottom' ? '1px solid #BF9B30' : 'none',
                borderLeft:   x==='left'   ? '1px solid #BF9B30' : 'none',
                borderRight:  x==='right'  ? '1px solid #BF9B30' : 'none',
              }}/>
            ))}
            {/* Glow */}
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, rgba(191,155,48,0.07) 0%, transparent 60%)', pointerEvents:'none' }}/>
            {/* Content row */}
            <div style={{ position:'relative', zIndex:1, display:'flex', height:'100%', padding:'28px 32px', gap:28, alignItems:'center' }}>
              {/* Logo col */}
              <div style={{ flexShrink:0, display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                <div style={{ width:88, height:88, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <img src="/images/logo.png" alt="Golden Needle" style={{ width:84, height:84, objectFit:'contain', mixBlendMode:'screen', filter:'brightness(1.05)' }} />
                </div>
                <div style={{ height:1, width:60, background:'linear-gradient(to right, transparent, rgba(191,155,48,0.5), transparent)' }} />
                <p style={{ fontFamily:'Cinzel, serif', fontSize:'0.42rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(191,155,48,0.6)', textAlign:'center' }}>Est. Subic Bay</p>
              </div>
              {/* Vertical divider */}
              <div style={{ width:1, height:'70%', background:'linear-gradient(to bottom, transparent, rgba(191,155,48,0.3), transparent)', flexShrink:0 }} />
              {/* Info col */}
              <div style={{ flex:1 }}>
                <p style={{ fontFamily:'Cinzel, serif', fontSize:'1.05rem', letterSpacing:'0.08em', color:'#E2C96A', lineHeight:1, marginBottom:3 }}>Golden Needle</p>
                <p style={{ fontFamily:'Cinzel, serif', fontSize:'0.5rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(191,155,48,0.5)', marginBottom:14 }}>Tattoo Studio</p>
                <p style={{ fontFamily:'Cormorant Garamond, serif', fontSize:'0.95rem', color:'#f0f0f0', fontStyle:'italic', fontWeight:400, letterSpacing:'0.04em', marginBottom:2 }}>Joey Agrabio</p>
                <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.52rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(191,155,48,0.6)', marginBottom:16 }}>Master Artist · 30 Years</p>
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {[
                    { text:'0918 653 9106',     Ico: () => <IcoWA s={8} color="rgba(191,155,48,0.7)" /> },
                    { text:'@joeystattooist_',  Ico: () => <IcoIG s={8} color="rgba(191,155,48,0.7)" /> },
                    { text:'Golden Needle Tattoo', Ico: () => <IcoFB s={8} color="rgba(191,155,48,0.7)" /> },
                  ].map((row, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:7 }}>
                      <div style={{ width:14, height:14, border:'1px solid rgba(191,155,48,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <row.Ico />
                      </div>
                      <span style={{ fontFamily:'Inter, sans-serif', fontSize:'0.6rem', color:'#aaa', letterSpacing:'0.06em' }}>{row.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:5, color:'#BF9B30' }}>
                  {[...Array(5)].map((_,i) => <IcoStar key={i} s={9} />)}
                  <span style={{ fontFamily:'Inter, sans-serif', fontSize:'0.48rem', color:'rgba(191,155,48,0.4)', marginLeft:5, letterSpacing:'0.12em' }}>SUBIC BAY, PHILIPPINES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download button */}
      <div style={{ textAlign:'center', marginTop:24 }}>
        <button onClick={handleDownload} disabled={downloading}
          style={{
            display:'inline-flex', alignItems:'center', gap:9,
            fontFamily:'Inter, sans-serif', fontSize:'0.68rem', fontWeight:500,
            letterSpacing:'0.18em', textTransform:'uppercase',
            color:'#060606', background:'linear-gradient(135deg, #D4B24A, #BF9B30)',
            padding:'13px 32px', border:'none', cursor: downloading ? 'wait' : 'pointer',
            opacity: downloading ? 0.7 : 1, transition:'all 0.25s',
          }}>
          <IcoDl s={15} /> {downloading ? 'Generating…' : 'Download Calling Card'}
        </button>
        <p style={{ color:'#444', fontSize:'0.66rem', marginTop:10, letterSpacing:'0.08em' }}>
          Saves as high-resolution PNG · Ready to print or share
        </p>
      </div>
    </div>
  )
}

/* ─── MAIN APP ─── */
export default function App() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ background: '#060606' }}>

      {/* ═══ NAV ═══ */}
      <nav className={`navbar${solid ? ' solid' : ''}`}>
        <div className="nav-container">
          <a href="#home" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
            <img src="/images/logo.png" alt="Golden Needle" style={{ width:48, height:48, objectFit:'contain', flexShrink:0 }} />
            <div>
              <p className="f-cin" style={{ color:'#BF9B30', fontSize:'0.9rem', letterSpacing:'0.1em', lineHeight:1.1 }}>Golden Needle</p>
              <p className="f-int" style={{ color:'#3a3a3a', fontSize:'0.48rem', letterSpacing:'0.3em', textTransform:'uppercase', marginTop:2 }}>Tattoo Studio · Subic Bay</p>
            </div>
          </a>

          <div style={{ display:'flex', gap:28 }} className="d-nav">
            {NAV.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
          </div>

          <a href="https://wa.me/639186539106" target="_blank" rel="noopener noreferrer"
            className="btn-gold d-nav" style={{ fontSize:'0.62rem', padding:'11px 22px', gap:8 }}>
            <IcoWA s={13} /> Book Now
          </a>

          <button onClick={() => setOpen(!open)} className="m-burger"
            style={{ background:'none', border:'none', cursor:'pointer', padding:6, display:'none', flexDirection:'column', gap:5 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block', width:22, height:1.5, background:'#BF9B30', transition:'transform 0.3s, opacity 0.3s',
                transform: open ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
                opacity: open && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {open && (
          <div style={{ background:'rgba(6,6,6,0.98)', borderTop:'1px solid rgba(191,155,48,0.12)', padding:'20px 24px' }}>
            {NAV.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="nav-link" style={{ display:'block', padding:'13px 0', borderBottom:'1px solid rgba(191,155,48,0.07)' }}>
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/639186539106" target="_blank" rel="noopener noreferrer"
              className="btn-gold" onClick={() => setOpen(false)}
              style={{ display:'flex', justifyContent:'center', marginTop:20, width:'100%' }}>
              <IcoWA s={14} /> Book on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      {/* Desktop: grid split. Mobile: single col, image is absolute bg behind text */}
      <section id="home" className="hero-section" style={{ position:'relative', overflow:'hidden', background:'#060606' }}>

        {/* Background image — absolute on mobile, normal grid child on desktop */}
        <div className="hero-img-col">
          <img src="/images/work7.png" alt="Full back tattoo by Joey Agrabio"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 55%, #060606 100%)' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, #060606 0%, transparent 30%)' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(6,6,6,0.55) 0%, transparent 20%)' }} />
        </div>

        {/* Text column */}
        <div className="hero-text-col" style={{ display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:2 }}>
          {/* Logo — displayed on a matching dark bg, no blend tricks needed */}
          <div style={{ marginBottom:36 }}>
            <img src="/images/logo.png" alt="Golden Needle"
              style={{ width:120, height:120, objectFit:'contain', display:'block' }} />
          </div>

          <p className="overline" style={{ marginBottom:20 }}>Subic Bay, Philippines</p>

          <h1 className="f-cin shimmer"
            style={{ fontSize:'clamp(2.6rem,5.5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:12 }}>
            Golden<br/>Needle
          </h1>

          <p className="f-cor"
            style={{ color:'#555', fontSize:'clamp(0.9rem,1.8vw,1.2rem)', letterSpacing:'0.3em', textTransform:'uppercase', fontStyle:'italic', fontWeight:300, marginBottom:0 }}>
            Tattoo Studio
          </p>

          <div className="hero-rule-wrap"><Rule left /></div>

          <p className="f-int hero-desc"
            style={{ color:'#777', fontSize:'clamp(0.86rem,1.4vw,0.97rem)', lineHeight:1.95, maxWidth:440, marginBottom:40, fontWeight:300 }}>
            Under the mastery of <strong style={{ color:'#BF9B30', fontWeight:500 }}>Joey Agrabio</strong> —
            a pioneer with <strong style={{ color:'#BF9B30', fontWeight:500 }}>over 30 years of artistry</strong> and a dedicated team committed to ink that lasts a lifetime.
          </p>

          <div className="hero-btn-row" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <a href="https://wa.me/639186539106" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book a Session <IcoArrow s={13} />
            </a>
            <a href="#gallery" className="btn-wire">
              View Gallery <IcoArrow s={13} />
            </a>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:40, color:'#BF9B30', opacity:0.4 }}>
            {[...Array(5)].map((_,i) => <IcoStar key={i} s={11} />)}
            <span style={{ fontSize:'0.68rem', letterSpacing:'0.12em', marginLeft:8 }}>Trusted by hundreds of clients</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:80, background:'linear-gradient(to top, #060606, transparent)', zIndex:3, pointerEvents:'none' }} />
      </section>

      {/* ═══ CONTACT STRIP ═══ */}
      <section className="contact-strip" id="contact-top">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <p className="overline" style={{ marginBottom:10 }}>Direct Contact</p>
            <h2 className="f-cin" style={{ fontSize:'clamp(1.6rem,3.5vw,2.3rem)', color:'#e8e8e8', letterSpacing:'0.06em' }}>Reach Joey Directly</h2>
            <Rule />
            <p style={{ color:'#555', fontSize:'0.88rem', maxWidth:380, margin:'0 auto', lineHeight:1.8 }}>
              All channels are active. We respond fast.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12 }}>
            {CONTACTS.map((c,i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="icon-box" style={{ color:c.color }}><c.Icon s={20} /></div>
                <div>
                  <p className="overline" style={{ marginBottom:5 }}>{c.label}</p>
                  <p className="f-cin" style={{ color:'#d8d8d8', fontSize:'0.8rem', letterSpacing:'0.04em', marginBottom:3 }}>{c.value}</p>
                  <p style={{ color:'#444', fontSize:'0.66rem' }}>{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AT YOUR LOCATION ═══ */}
      <section id="location" className="rs-section">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <p className="overline" style={{ marginBottom:10 }}>Exclusive Offering</p>
            <h2 className="f-cin shimmer" style={{ fontSize:'clamp(2rem,5vw,3.2rem)', letterSpacing:'0.05em' }}>We Come To You</h2>
            <Rule />
            <p style={{ color:'#666', fontSize:'clamp(0.9rem,1.8vw,1rem)', maxWidth:600, margin:'0 auto', lineHeight:1.95, fontWeight:300 }}>
              No studio? No problem. Joey and his team travel to you with a complete professional setup —
              the same <strong style={{ color:'#BF9B30', fontWeight:400 }}>sterile equipment, premium inks, and expert artistry</strong>,
              delivered wherever you are in Subic Bay.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:16, marginBottom:52 }}>
            {[
              { Ico:IcoHome,  badge:'Most Requested',       title:'Home Visits',
                desc:'Your home, your comfort. We arrive fully equipped — chair, lighting, sterile tools, and inks. You relax while Joey works his craft in your private space.',
                pts:['Private & relaxed setting','All equipment provided','Anywhere in Subic Bay'] },
              { Ico:IcoHotel, badge:'For Tourists & Visitors', title:'Hotel Room Sessions',
                desc:'Staying at a Subic Bay resort or hotel? We come to your room with a complete studio setup. The perfect permanent memory of your visit to the Philippines.',
                pts:['All Subic Bay hotels','Zero disruption','Ideal for travelers'] },
              { Ico:IcoCar,   badge:'Groups & Events',       title:'On-Location Service',
                desc:'Group sessions, private events, resort stays — wherever you are in the area, we can arrange a visit with multiple artists to accommodate everyone.',
                pts:['Multiple artists available','Group bookings welcome','Events & private villas'] },
            ].map((f,i) => (
              <div key={i} className="rs-card">
                <div className="rs-card-accent"/>
                <span className="badge">{f.badge}</span>
                <div style={{ width:50,height:50,border:'1px solid rgba(191,155,48,0.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'#BF9B30',marginBottom:20 }}>
                  <f.Ico s={22}/>
                </div>
                <h3 className="f-cin" style={{ fontSize:'1rem',color:'#e8e8e8',letterSpacing:'0.06em',marginBottom:12 }}>{f.title}</h3>
                <p style={{ color:'#666',fontSize:'0.86rem',lineHeight:1.9,marginBottom:20,fontWeight:300 }}>{f.desc}</p>
                <div style={{ display:'flex',flexDirection:'column',gap:7 }}>
                  {f.pts.map((pt,j) => (
                    <div key={j} style={{ display:'flex',alignItems:'center',gap:8,color:'#BF9B30' }}>
                      <IcoCheck s={11}/><span style={{ color:'#777',fontSize:'0.72rem',letterSpacing:'0.08em' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex',flexWrap:'wrap',gap:9,justifyContent:'center',marginBottom:44 }}>
            {['Sterile Equipment','Pro-Grade Inks','Full Setup Provided','Flexible Timing','All Subic Bay Area','Group Bookings'].map(item => (
              <div key={item} className="chip" style={{ color:'#BF9B30' }}>
                <IcoCheck s={10}/><span style={{ color:'#777' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center' }}>
            <a href="https://wa.me/639186539106" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize:'0.72rem',padding:'16px 44px' }}>
              <IcoWA s={16}/> Book At-Location Session
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="section about-section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px,1fr))', gap:80, alignItems:'center' }}>
            <div className="portrait-frame">
              <img src="/images/owner.png" alt="Joey Agrabio — Pioneer Tattoo Artist, Subic Bay"/>
              <div style={{ position:'absolute',bottom:24,left:24,right:24,zIndex:2,background:'rgba(6,6,6,0.93)',border:'1px solid rgba(191,155,48,0.28)',backdropFilter:'blur(10px)',padding:'13px 20px',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <div>
                  <p className="f-cin" style={{ color:'#BF9B30',fontSize:'0.85rem',letterSpacing:'0.06em' }}>Joey Agrabio</p>
                  <p style={{ color:'#555',fontSize:'0.55rem',letterSpacing:'0.2em',textTransform:'uppercase',marginTop:2 }}>Pioneer Artist · Subic Bay</p>
                </div>
                <div style={{ display:'flex',gap:3,color:'#BF9B30' }}>{[...Array(5)].map((_,i)=><IcoStar key={i} s={10}/>)}</div>
              </div>
            </div>

            <div>
              <p className="overline" style={{ marginBottom:12 }}>The Artist</p>
              <h2 className="f-cin" style={{ fontSize:'clamp(2rem,4.5vw,3rem)',color:'#eeeeee',letterSpacing:'0.04em',lineHeight:0.95,marginBottom:8 }}>Joey Agrabio</h2>
              <p className="f-cor" style={{ color:'#BF9B30',fontSize:'1.2rem',fontStyle:'italic',letterSpacing:'0.08em',marginBottom:28,fontWeight:400 }}>Joey's Tattooist</p>

              <Rule left />

              <div style={{ display:'flex',flexDirection:'column',gap:16,marginTop:24 }}>
                <p style={{ color:'#777',lineHeight:1.95,fontSize:'0.92rem',fontWeight:300 }}>
                  Joey Agrabio is the <strong style={{ color:'#C0C0C0',fontWeight:400 }}>pioneer of professional tattooing in Subic Bay</strong>. He arrived before the industry existed here, built a reputation from the ground up, and spent over <strong style={{ color:'#C0C0C0',fontWeight:400 }}>three decades</strong> perfecting a standard of artistry the entire region now recognises.
                </p>
                <p style={{ color:'#777',lineHeight:1.95,fontSize:'0.92rem',fontWeight:300 }}>
                  Golden Needle now operates with a <strong style={{ color:'#C0C0C0',fontWeight:400 }}>team of 5+ professional artists and apprentices</strong>, each mentored personally by Joey. From locals and OFW homecomings to international visitors and foreign military — every client gets work worth being proud of, forever.
                </p>
              </div>

              <div style={{ display:'flex',flexWrap:'wrap',gap:7,marginTop:26 }}>
                {['Pioneer Artist','Subic Bay Legend','30+ Years','5+ Artists','Mobile Service'].map(t => (
                  <span key={t} style={{ padding:'5px 13px',border:'1px solid rgba(191,155,48,0.18)',fontSize:'0.56rem',letterSpacing:'0.18em',textTransform:'uppercase',color:'#BF9B30',fontFamily:'Inter,sans-serif' }}>{t}</span>
                ))}
              </div>

              <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:11,marginTop:34 }}>
                {[{n:'30+',l:'Years'},{n:'5+',l:'Artists'},{n:'1K+',l:'Clients'},{n:'#1',l:'Subic Bay'}].map(s => (
                  <div key={s.l} className="stat-block">
                    <div className="stat-num">{s.n}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section id="gallery" className="section" style={{ background:'#0a0a0a',paddingBottom:0 }}>
        <div className="container">
          <div className="section-head">
            <p className="overline" style={{ marginBottom:10 }}>Portfolio</p>
            <h2 className="f-cin" style={{ fontSize:'clamp(1.8rem,4vw,2.7rem)',color:'#eeeeee',letterSpacing:'0.06em' }}>The Work</h2>
            <Rule />
            <p style={{ color:'#555',maxWidth:420,margin:'0 auto',fontSize:'0.86rem',lineHeight:1.85 }}>
              Three decades of craft visible in every line, shade, and color. Each piece is permanent — and intentional.
            </p>
          </div>
        </div>

        {/* Masonry-style grid — 3 columns */}
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:3 }} className="gallery-grid-3">
          {GALLERY.map((item,i) => (
            <div key={i} className="gallery-tile" style={{ height: [0,3,6].includes(i) ? 420 : 320 }}>
              <img src={item.src} alt={item.label}/>
              {/* Minimal hover — just gold border glow, no cluttered text */}
              <div style={{ position:'absolute',inset:0,border:'2px solid transparent',transition:'border-color 0.3s',zIndex:2 }} className="tile-border-hover"/>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center',padding:'44px 40px' }}>
          <a href="https://www.instagram.com/joeystattooist_/" target="_blank" rel="noopener noreferrer" className="btn-wire">
            <IcoIG s={15} color="#BF9B30"/> More on Instagram
          </a>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="section" style={{ background:'#080808' }}>
        <div className="container">
          <div className="section-head">
            <p className="overline" style={{ marginBottom:10 }}>What We Offer</p>
            <h2 className="f-cin" style={{ fontSize:'clamp(1.8rem,4vw,2.7rem)',color:'#eeeeee',letterSpacing:'0.06em' }}>Services</h2>
            <Rule />
            <p style={{ color:'#555',maxWidth:420,margin:'0 auto',fontSize:'0.86rem',lineHeight:1.85 }}>
              Every style, every scale — handled with the same uncompromising standard.
            </p>
          </div>
          <div className="service-grid">
            {SERVICES.map((s,i) => (
              <div key={i} className="svc-card">
                <div className="svc-icon" style={{ color:'#BF9B30' }}><s.Ico s={22}/></div>
                <h3 className="f-cin" style={{ fontSize:'0.92rem',color:'#e0e0e0',letterSpacing:'0.06em',marginBottom:12 }}>{s.title}</h3>
                <p style={{ color:'#555',fontSize:'0.83rem',lineHeight:1.9,fontWeight:300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALLING CARD ═══ */}
      <section id="calling-card" className="section contact-strip" style={{ borderTop:'none' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <p className="overline" style={{ marginBottom:10 }}>Save & Share</p>
            <h2 className="f-cin" style={{ fontSize:'clamp(1.6rem,3.5vw,2.3rem)',color:'#e8e8e8',letterSpacing:'0.06em' }}>Calling Card</h2>
            <Rule />
            <p style={{ color:'#555',fontSize:'0.86rem',maxWidth:380,margin:'0 auto',lineHeight:1.8 }}>
              Download Joey's calling card and share it with anyone who deserves great ink.
            </p>
          </div>
          <CallingCard />
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section contact-strip" style={{ borderBottom:'none' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <p className="overline" style={{ marginBottom:10 }}>Get In Touch</p>
          <h2 className="f-cin" style={{ fontSize:'clamp(1.6rem,3.5vw,2.3rem)',color:'#e8e8e8',letterSpacing:'0.06em' }}>Book Your Session</h2>
          <Rule />
          <p style={{ color:'#555',maxWidth:400,margin:'0 auto 40px',fontSize:'0.86rem',lineHeight:1.85 }}>
            In-studio or at your location — drop a message and we'll take it from there.
          </p>

          <a href="https://wa.me/639186539106" target="_blank" rel="noopener noreferrer"
            className="btn-gold" style={{ fontSize:'0.8rem',padding:'17px 52px',marginBottom:48,gap:12 }}>
            <IcoWA s={18}/> WhatsApp — 0918 653 9106
          </a>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))',gap:12,marginBottom:40 }}>
            {CONTACTS.map((c,i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="icon-box" style={{ color:c.color }}><c.Icon s={18}/></div>
                <div>
                  <p className="overline" style={{ marginBottom:5 }}>{c.label}</p>
                  <p style={{ color:'#ccc',fontSize:'0.8rem' }}>{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display:'inline-flex',alignItems:'center',gap:20,padding:'18px 36px',border:'1px solid rgba(191,155,48,0.12)',background:'rgba(191,155,48,0.02)' }}>
            <div style={{ display:'flex',alignItems:'center',gap:10,color:'#BF9B30' }}>
              <IcoMap s={17}/>
              <div style={{ textAlign:'left' }}>
                <p className="overline" style={{ marginBottom:3 }}>Location</p>
                <p style={{ color:'#888',fontSize:'0.86rem' }}>Subic Bay, Philippines</p>
              </div>
            </div>
            <div style={{ width:1,height:34,background:'rgba(191,155,48,0.12)' }}/>
            <div style={{ textAlign:'left' }}>
              <p className="overline" style={{ marginBottom:3 }}>Hours</p>
              <p style={{ color:'#888',fontSize:'0.86rem' }}>Walk-ins & Appointments</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div style={{ display:'flex',flexWrap:'wrap',gap:48,justifyContent:'space-between',marginBottom:44 }}>
            <div style={{ maxWidth:250 }}>
              <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:16 }}>
                <img src="/images/logo.png" alt="Logo" style={{ width:40,height:40,objectFit:'contain' }}/>
                <div>
                  <p className="f-cin" style={{ color:'#BF9B30',fontSize:'0.88rem',letterSpacing:'0.1em' }}>Golden Needle</p>
                  <p style={{ color:'#2e2e2e',fontSize:'0.48rem',letterSpacing:'0.28em',textTransform:'uppercase',marginTop:2 }}>Tattoo Studio</p>
                </div>
              </div>
              <p style={{ color:'#333',fontSize:'0.78rem',lineHeight:1.8 }}>
                Three decades of artistry, craft, and unforgettable ink — led by Joey Agrabio, Subic Bay's pioneer tattooist.
              </p>
            </div>

            <div>
              <p className="overline" style={{ marginBottom:16 }}>Navigate</p>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                {NAV.map(l => <a key={l.label} href={l.href} className="footer-link">{l.label}</a>)}
              </div>
            </div>

            <div>
              <p className="overline" style={{ marginBottom:16 }}>Connect</p>
              <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                {[
                  { href:'https://wa.me/639186539106',                               Ico:IcoWA, c:'#25D366', label:'0918 653 9106' },
                  { href:'https://www.instagram.com/joeystattooist_/',              Ico:IcoIG, c:'#C13584', label:'@joeystattooist_' },
                  { href:'https://www.facebook.com/profile.php?id=61559055857122',  Ico:IcoFB, c:'#1877F2', label:'Golden Needle Page' },
                  { href:'https://www.facebook.com/profile.php?id=61573327302000',  Ico:IcoFB, c:'#1877F2', label:'Joey Agrabio' },
                ].map((s,i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex',alignItems:'center',gap:9,textDecoration:'none',color:'#3a3a3a',transition:'color 0.25s',fontSize:'0.78rem' }}
                    onMouseEnter={e => e.currentTarget.style.color='#BF9B30'}
                    onMouseLeave={e => e.currentTarget.style.color='#3a3a3a'}>
                    <s.Ico s={14} color={s.c}/> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop:'1px solid rgba(191,155,48,0.07)',paddingTop:26,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,alignItems:'center' }}>
            <p style={{ color:'#252525',fontSize:'0.68rem' }}>
              © 2026 Golden Needle Tattoo Studio · Joey Agrabio · Subic Bay, Philippines
            </p>
            <div style={{ display:'flex',gap:4,color:'rgba(191,155,48,0.25)' }}>
              {[...Array(5)].map((_,i)=><IcoStar key={i} s={10}/>)}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .d-nav    { display: none !important; }
          .m-burger { display: flex !important; }
          .gallery-grid-3 { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 861px) {
          .m-burger { display: none !important; }
        }
        .tile-border-hover { pointer-events: none; }
        .gallery-tile:hover .tile-border-hover { border-color: rgba(191,155,48,0.55) !important; }
        @media (max-width: 500px) {
          .gallery-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
