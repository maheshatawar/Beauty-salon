import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const services = [
  { category: 'Hair', name: 'The Luma Cut', description: 'A shape-led cut, wash, and finish designed around your texture.', duration: '60 min', price: '$85', featured: true },
  { category: 'Color', name: 'Sunlit Balayage', description: 'Hand-painted dimension that grows out softly and catches the light.', duration: '2 hr 30 min', price: '$220' },
  { category: 'Skin', name: 'Quiet Glow Facial', description: 'A restorative facial ritual for hydrated, calm, luminous skin.', duration: '75 min', price: '$120', featured: true },
  { category: 'Hair', name: 'Gloss & Go', description: 'A luminous color refresh and bouncy blowout for your next occasion.', duration: '45 min', price: '$70' },
  { category: 'Skin', name: 'Sculpt & Soothe', description: 'Facial massage and warm botanicals to release tension and restore.', duration: '50 min', price: '$95' },
  { category: 'Nails', name: 'Barely There Mani', description: 'A precise, clean manicure finished with your perfect sheer shade.', duration: '45 min', price: '$55' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All services')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const categories = ['All services', 'Hair', 'Color', 'Skin', 'Nails']
  const filteredServices = activeCategory === 'All services' ? services : services.filter((service) => service.category === activeCategory)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Luma and Co. home"><span className="wordmark-mark">L</span><span>Luma <em>&</em> Co.</span></a>
        <nav className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation"><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a><a href="#story" onClick={() => setIsMenuOpen(false)}>Our space</a><a href="#visit" onClick={() => setIsMenuOpen(false)}>Visit us</a></nav>
        <div className="header-actions"><a className="instagram-link" href="#instagram" aria-label="Luma and Co. on Instagram"><Camera size={18} strokeWidth={1.7} /></a><button className="button button-dark button-small" type="button" onClick={() => setIsBookingOpen(true)}>Book a visit <ArrowRight size={16} /></button><button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </header>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><Sparkles size={14} /> A considered beauty studio</p><h1>Rituals for your <i>real</i> life.</h1><p className="hero-intro">Modern hair, skin, and beauty care for people who like their appointments to feel as good as the results.</p><a className="text-link" href="#services">Explore our services <ArrowRight size={17} /></a><div className="hero-note"><span className="note-line"></span><span>Now welcoming new clients<br />in East Village, NYC</span></div></div><div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=85" alt="Woman with softly styled hair in a sunlit salon" /><div className="image-stamp"><span>Est.</span><strong>2018</strong><span>New York</span></div></div></section>
      <section className="intro-strip" id="story"><p className="eyebrow">The Luma feeling</p><h2>Good hair days, <i>made</i> slowly.</h2><p>Come in for the change, stay for the calm. Every service is personal, unhurried, and finished with a little more care than expected.</p></section>
      <section className="services-section" id="services"><div className="section-heading"><div><p className="eyebrow">The menu</p><h2>Choose your <i>ritual.</i></h2></div><p className="section-description">Small luxuries, thoughtful details, and a result that still feels like you.</p></div><div className="category-tabs" role="tablist" aria-label="Service categories">{categories.map((category) => <button className={activeCategory === category ? 'category-tab active' : 'category-tab'} type="button" role="tab" aria-selected={activeCategory === category} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="service-grid">{filteredServices.map((service, index) => <article className={service.featured ? 'service-card featured' : 'service-card'} key={service.name}>{service.featured && <span className="popular-tag">A Luma favorite</span>}<span className="service-number">0{index + 1}</span><div className="service-card-body"><p className="service-category">{service.category}</p><h3>{service.name}</h3><p className="service-description">{service.description}</p><div className="service-meta"><span><Clock3 size={15} /> {service.duration}</span><strong>{service.price}</strong></div></div><button className="service-arrow" type="button" aria-label={`Book ${service.name}`} onClick={() => setIsBookingOpen(true)}><ArrowRight size={18} /></button></article>)}</div></section>
      <section className="visit-section" id="visit"><div><p className="eyebrow">Your next appointment</p><h2>Make a little room<br />for <i>yourself.</i></h2></div><div className="visit-action"><p>We keep our days intentionally spacious. That means fewer appointments, more attention, and time to get it right.</p><button className="button button-light" type="button" onClick={() => setIsBookingOpen(true)}>Find your time <CalendarDays size={17} /></button></div></section>
      <footer className="site-footer"><span>© 2024 Luma & Co.</span><span>114 E 7th Street, New York</span><a href="#instagram"><Camera size={17} /> @lumaandco</a></footer>
      {isBookingOpen && <div className="modal-backdrop" role="presentation" onClick={() => setIsBookingOpen(false)}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Close booking form" onClick={() => setIsBookingOpen(false)}><X size={20} /></button><p className="eyebrow">Start your ritual</p><h2 id="booking-title">Find your <i>time.</i></h2><p className="modal-copy">Leave us a few details and our studio team will be in touch with available times.</p><form onSubmit={(event) => event.preventDefault()}><label>Name<input type="text" placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@email.com" /></label><label>What are you in for?<div className="select-wrap"><select defaultValue=""><option value="" disabled>Choose a service</option>{services.map((service) => <option key={service.name}>{service.name}</option>)}</select><ChevronDown size={17} /></div></label><button className="button button-dark modal-submit" type="submit">Request an appointment <Check size={17} /></button></form></div></div>}
    </main>
  )
}

export default App
