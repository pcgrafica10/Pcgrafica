'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const services = [
  { number: '01', title: 'PPF', text: 'Película transparente, flexible y resistente de poliuretano que protege la pintura original de la carrocería.', video: '/ppf.mp4' },
  { number: '02', title: 'Ploteo vehicular', text: 'Vinilos adhesivos de alta resistencia para cambiar el color, proteger la pintura o sumar diseños personalizados.', video: '/ploteo.mp4' },
  { number: '03', title: 'Limpieza de interiores', text: 'Higienización profunda, reacondicionamiento y protección de asientos, alfombras, techo, tablero y paneles.', video: '/limpieza-interiores.mp4' },
  { number: '04', title: 'Polarizado', text: 'Lámina tintada para mejorar la privacidad, reducir calor y rayos UV, y proteger el interior del vehículo.', video: '/polarizado.mp4' },
];

const projects = [
  { title: 'Ford Mustang', tag: 'Personalización visual', image: '/work-1.webp', position: 'center', className: 'project-main' },
  { title: 'Nissan GT-R', tag: 'Detalles & terminación', image: '/work-2.webp', position: 'center', className: 'project-top' },
  { title: 'AMG GT', tag: 'Gráfica vehicular', image: '/work-3.webp', position: 'center', className: 'project-bottom' },
];

const process = [
  ['01', 'Nos contás tu idea', 'Escuchamos lo que imaginás y entendemos el objetivo del proyecto.'],
  ['02', 'Definimos la propuesta', 'Ordenamos referencias, materiales y alcance para darle dirección.'],
  ['03', 'Diseñamos y producimos', 'Convertimos el concepto en una solución visual lista para aplicar.'],
  ['04', 'Entregamos el resultado', 'Cuidamos cada terminación hasta el último detalle.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#inicio" aria-label="PC Gráfica, inicio" onClick={closeMenu}>
          <Image src="/logo.optimized.png" alt="PC Gráfica" width={150} height={78} priority />
        </a>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú"><span /><span /></button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegación principal">
          {['Inicio', 'Servicios', 'Trabajos', 'Nosotros', 'Contacto'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>Pedir presupuesto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <Image className="hero-image" src="/hero.webp" alt="Ford Mustang personalizado en el taller de PC Gráfica" fill priority sizes="100vw" />
        <Image className="hero-mobile-image" src="/hero-mobile.webp" alt="Auto personalizado de PC Gráfica" fill priority sizes="(max-width: 600px) 100vw, 0px" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title"><span>Tu vehículo.</span><span className="outline">Tu identidad.</span></h1>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Pedir presupuesto <span>↗</span></a>
            <a className="button button-ghost" href="#trabajos">Ver trabajos <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading reveal">
          <div><p className="eyebrow"><span /> Lo que hacemos</p><h2>Servicios pensados<br />para <em>destacar.</em></h2></div>
          <p>Desde la primera idea hasta la aplicación final, construimos piezas visuales con carácter, precisión y una terminación impecable.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const content = <><div className="service-top"><span>{service.number}</span><i>↗</i></div><h3>{service.title}</h3><p>{service.text}</p></>;
            return service.video
              ? <a className="service-card service-card-video reveal" key={service.number} href={service.video} target="_blank" rel="noreferrer" aria-label={`Ver video de ${service.title}`}>{content}</a>
              : <article className="service-card reveal" key={service.number}>{content}</article>;
          })}
        </div>
      </section>

      <section className="portfolio" id="trabajos">
        <div className="section portfolio-inner">
          <div className="section-heading reveal">
            <div><p className="eyebrow"><span /> Portfolio seleccionado</p><h2>Trabajos que hablan<br /><em>por sí solos.</em></h2></div>
            <p>Cada proyecto es una oportunidad para llevar una idea más lejos y convertirla en presencia.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <article className={`project-card ${project.className}`} key={project.title} style={{ backgroundImage: `linear-gradient(0deg, rgba(3,5,8,.78), rgba(3,5,8,.05) 60%), url('${project.image}')`, backgroundPosition: project.position }}><div className="project-meta"><span>{project.tag}</span><h3>{project.title}</h3></div><span className="project-arrow">↗</span></article>)}
          </div>
          <a className="text-link" href="#contacto">Ver todos los proyectos <span>↗</span></a>
        </div>
      </section>

      <section className="section difference" id="nosotros">
        <div className="difference-visual reveal"><div className="difference-image" /><div className="stat-card"><strong>+10</strong><span>años creando<br />impacto visual</span></div></div>
        <div className="difference-copy reveal">
          <p className="eyebrow"><span /> El diferencial PC</p><h2>Diseño, impacto y<br /><em>terminación profesional.</em></h2>
          <p className="lead">No se trata solo de aplicar un vinilo. Se trata de entender una idea, potenciarla y ejecutarla con criterio.</p>
          <div className="benefits">
            <div><span>01</span><h3>Atención personalizada</h3><p>Un acompañamiento cercano en cada decisión.</p></div>
            <div><span>02</span><h3>Diseño a medida</h3><p>Ningún proyecto es igual a otro.</p></div>
            <div><span>03</span><h3>Calidad en terminaciones</h3><p>Precisión visible en cada detalle.</p></div>
            <div><span>04</span><h3>Soluciones integrales</h3><p>Diseño, producción y aplicación en un solo lugar.</p></div>
          </div>
        </div>
      </section>

      <section className="process-section"><div className="section">
        <div className="section-heading reveal"><div><p className="eyebrow"><span /> Nuestro proceso</p><h2>Así <em>trabajamos.</em></h2></div><p>Un proceso simple y claro para que disfrutes la transformación desde el primer boceto hasta el resultado final.</p></div>
        <div className="process-grid">{process.map(([number, title, text]) => <article key={number} className="process-card reveal"><span>{number}</span><div className="process-line" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="cta-section"><div className="cta-bg" /><div className="cta-content reveal"><p className="eyebrow"><span /> Tu próximo proyecto</p><h2>¿Tenés una idea?<br /><em>Hagámosla realidad.</em></h2><a className="button button-primary" href="#contacto">Pedir presupuesto <span>↗</span></a></div></section>

      <section className="section contact" id="contacto">
        <div className="contact-copy reveal"><p className="eyebrow"><span /> Contacto</p><h2>Hablemos de tu<br /><em>próximo proyecto.</em></h2><p>Contanos qué tenés en mente. Nosotros le damos forma, carácter y una terminación a la altura.</p><div className="contact-links"><a href="#contacto"><span>WhatsApp</span><strong>Escribinos ahora</strong><i>↗</i></a><a href="https://www.instagram.com/pcgrafica/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@pcgrafica</strong><i>↗</i></a></div></div>
        <form className="contact-form reveal" onSubmit={(event) => event.preventDefault()}>
          <label>Nombre<input type="text" placeholder="Tu nombre" /></label><label>Teléfono<input type="tel" placeholder="Tu teléfono" /></label>
          <label>Servicio<select defaultValue=""><option value="" disabled>Elegí una opción</option><option>Ploteo vehicular</option><option>Gráfica automotriz</option><option>Diseño personalizado</option><option>Otro proyecto</option></select></label>
          <label>Mensaje<textarea placeholder="Contanos brevemente tu idea" rows={3} /></label><button className="button button-primary" type="submit">Enviar consulta <span>↗</span></button><small>Maqueta visual · El formulario no envía datos.</small>
        </form>
      </section>

      <footer><div className="footer-main"><Image src="/logo.optimized.png" alt="PC Gráfica" width={180} height={94} /><p>Diseño y personalización<br />que dejan marca.</p><div className="footer-nav"><a href="#servicios">Servicios</a><a href="#trabajos">Trabajos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PC Gráfica</span><span>Gráfica automotriz · Buenos Aires</span></div></footer>
    </main>
  );
}
