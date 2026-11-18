

import React, { useState } from "react";
const BASE = import.meta.env.BASE_URL;
import {
  Menu, X, Phone, Mail, MapPin, Clock, ArrowRight,
  ChevronLeft, ChevronRight, Star
} from "lucide-react";
import "./App.css";

const photo = (id, width = 850) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const collections = [
  {
    id: "beds",
    label: "BEDROOM",
    title: "Beds & Mattresses",
    description: "Discover comfortable beds and mattresses in a range of styles and sizes. Find the right centrepiece for a restful bedroom.",
    button: "Explore More Beds",
    products: [
      ["Black Orchid","A contemporary upholstered bed designed to bring comfort and style to your bedroom.","/images/photo-1505693416388-ac5ce068fe85.avif","POPULAR"],
      ["The Ultra Collection", "A clean, modern mattress design created for everyday comfort.", "/images/photo-1631049307264-da0ec9d70304.avif"],
      ["Premium Sleep", "A refined bedroom collection with a timeless, comfortable finish.", "/images/photo-1616486338812-3dadae4b4ace.avif"],
      ["Galaxy Ottoman Set", "A practical ottoman style with useful under-bed storage.", "/images/photo-1618221195710-dd6b41faaea6.avif", "BEST SELLER"],
      ["Taurus", "A stylish bedroom centrepiece with a modern upholstered look.", "/images/photo-1615874694520-474822394e73.avif"],
      ["Pure Silk", "A simple, elegant bedroom look for a relaxing home.", "images/photo-1505693416388-ac5ce068fe85.avif"]
    ]
  },
  {
    id: "sofas",
    label: "LIVING ROOM",
    title: "Sofas & Armchairs",
    description: "Explore inviting sofas, corner suites and armchairs selected to bring comfort and character to your living space.",
    button: "Explore More Sofas",
    products: [
      ["Worcester", "A welcoming corner sofa style with generous seating for family time.", "/images/photo-1555041469-a586c61ea9bc.avif"],
      ["Lilliana", "Contemporary comfort with a relaxed, modern silhouette.", "/images/photo-1550254478-ead40cc54513.avif"],
      ["Orion", "A modern sofa look with a soft and elegant finish.", "/images/photo-1550581190-9c1c48d21d6c.avif"],
      ["Newcastle", "Spacious seating designed for comfortable everyday living.", "/images/photo-1600210492486-724fe5c67fb0.avif", "BEST SELLER"],
      ["Olivia", "A timeless design that complements a range of interiors.", "images/photo-1600566753086-00f18fb6b3ea2.avif"],
      ["Aston", "Classic upholstery and a comfortable seating style.", "/images/photo-1618221195710-dd6b41faaea6.avif"]
    ]
  },
{
  id: "wardrobes",
  label: "BEDROOM STORAGE",
  title: "Wardrobes & Storage",
  description: "Make the most of your space with practical wardrobe and storage styles.",
  button: "Explore More Wardrobes",
  products: [
    ["Alger Slider", "Modern sliding wardrobe design.", "/images/photo-1769690398694-9c5d5ca4b4ea.avif"],
    ["Splitpart 2 Door Slider", "Contemporary two-door wardrobe.", "/images/photo-1784651858840-0f077fad4e1e.avif", "BEST SELLER"],
    ["Kendra 4 Door Robe", "Spacious wardrobe with practical storage.", "/images/photo-1784651858840-0f077fad4e1e.avif"],
    ["Alba", "Elegant modern wardrobe design.", "/images/photo-1769690398694-9c5d5ca4b4ea.avif"],
    ["Amelia", "Stylish bedroom storage.", "/images/photo-1784651858840-0f077fad4e1e.avif"],
    ["2 Door Sliding Wardrobe", "Space-saving sliding wardrobe.", "/images/photo-1769690398694-9c5d5ca4b4ea.avif"]
  ]
}
];

const reviews = [
  { text: "A really lovely local furniture shop. The team were helpful, the service was friendly and we are very happy with our purchase.", name: "Happy Customer" },
  { text: "Great customer service and a lovely selection of furniture. We were helped to find exactly what we needed.", name: "Satisfied Customer" },
  { text: "Excellent value and helpful advice. It is great to have an independent furniture shop nearby.", name: "Local Customer" }
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Home", "#home"], ["About", "#about"], ["Beds", "#beds"], ["Sofas", "#sofas"], ["Wardrobes", "#wardrobes"], ["Contact", "#contact"]];
  return <>
    <div className="top-strip">
      <div className="container top-inner">
        <span><MapPin size={12} /> 27/29 Yorkshire St, Oldham OL1 3RZ</span>
        <a href="tel:01616376710"><Phone size={12} /> 0161 637 6710</a>
      </div>
    </div>
    <header className="header">
      <div className="container nav">
        <a href="#home" className="brand" aria-label="AP Furnishing home">
          <strong>AP</strong><span>FURNISHING</span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="tel:01616376710">Call Us</a>
      </div>
    </header>
  </>;
}

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-shade" />

      <div className="hero-content">
        <span className="eyebrow light">
          OLDHAM'S HOME OF QUALITY FURNITURE
        </span>

        <h1>
          Quality Furniture.<br />
          Affordable Prices.
        </h1>

        <p>
          A small independent retailer with over 30 years of experience,
          serving Oldham since 2013.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="tel:01616376710">
            Call 0161 637 6710
          </a>
          <a className="button outline" href="#beds">
            View Our Stock
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    ["◷", "30+ Years Experience", "Friendly advice and furniture knowledge to help you choose."],
    ["⌖", "Local Delivery Available", "Ask our team about delivery options for your new furniture."],
    ["◉", "Open 6 Days a Week", "Visit our Oldham showroom and explore our collections."]
  ];
  return <section className="benefits"><div className="container benefit-grid">
    {items.map(([icon, title, desc]) => <article className="benefit" key={title}>
      <span className="benefit-icon">{icon}</span><h3>{title}</h3><p>{desc}</p>
    </article>)}
  </div></section>;
}

function About() {
  return <section className="about section" id="about">
    <div className="container about-grid">
      <div className="showroom">
       <img src="/images/photo-1441986300917-64674bd600d8.avif"alt="AP Furnishing showroom"loading="lazy"/>
        <div className="image-caption"><strong>Your Friendly Local Furniture Store</strong><span>AP Furnishing · Oldham</span></div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">ABOUT US</span>
        <h2>Independent. Local. Trusted.</h2>
        <p>AP Furnishing is an independent furniture retailer serving the Oldham community. With over 30 years of experience in the furniture industry, we understand how important it is to find the right furniture for your home.</p>
        <p>We take pride in offering friendly service and practical advice, from the moment you walk through our doors to the day your furniture arrives.</p>
        <p>Whether you're looking for your next bed, a comfortable sofa or practical storage, visit our showroom and discover furniture to suit your home and budget. No pressure, no fuss — just friendly advice.</p>
        <a href="#contact" className="text-button">Find Us in Oldham <ArrowRight size={14} /></a>
      </div>
    </div>
  </section>;
}

function Collection({ collection }) {
  return <section className="collection section" id={collection.id}>
    <div className="container">
      <div className="collection-heading">
        <div><span className="eyebrow">{collection.label}</span><h2>{collection.title}</h2></div>
        <p>{collection.description}</p>
      </div>
      <div className="product-grid">
        {collection.products.map(([name, description, image, tag]) => (
          <article className="product-card" key={name}>
            <div className="product-photo">
              <img src={image} alt={`${name} furniture`} loading="lazy" />
              {tag && <span className="product-tag">{tag}</span>}
            </div>
            <div className="product-copy">
              <h3>{name}</h3><p>{description}</p>
              <a href={`mailto:apfurnishing@gmail.com?subject=${encodeURIComponent(`Enquiry about ${name}`)}`}>
                <Mail size={12} /> Enquire about this range
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="collection-footer">
        <a className="small-button" href={`mailto:apfurnishing@gmail.com?subject=${encodeURIComponent(collection.title + " enquiry")}`}>{collection.button}</a>
      </div>
    </div>
  </section>;
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const change = (step) => setActive((current) => (current + step + reviews.length) % reviews.length);
  return <section className="testimonials">
    <div className="container testimonial-content">
      <span className="eyebrow light">WHAT OUR CUSTOMERS SAY</span><h2>Testimonials</h2>
      <div className="stars" aria-label="Five stars">{[1,2,3,4,5].map(n => <Star key={n} size={13} fill="currentColor" />)}</div>
      <blockquote>“{reviews[active].text}”</blockquote>
      <strong className="review-name">{reviews[active].name}</strong>
      <div className="review-controls">
        <button onClick={() => change(-1)} aria-label="Previous testimonial"><ChevronLeft size={15} /></button>
        {reviews.map((review, index) => <button key={review.name} className={`dot ${active === index ? "active" : ""}`} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} />)}
        <button onClick={() => change(1)} aria-label="Next testimonial"><ChevronRight size={15} /></button>
      </div>
    </div>
  </section>;
}

function Contact() {
  return <section className="contact section" id="contact">
    <div className="container">
      <div className="section-title"><span className="eyebrow">GET IN TOUCH</span><h2>Contact Us</h2></div>
      <div className="contact-grid">
        <article className="contact-card"><MapPin /><h3>Address</h3><p>AP Furnishing<br />27/29 Yorkshire St<br />Oldham, OL1 3RZ</p><a href="https://www.google.com/maps/search/?api=1&query=27%2F29+Yorkshire+Street+Oldham+OL1+3RZ" target="_blank" rel="noreferrer">Get Directions <ArrowRight size={12} /></a></article>
        <article className="contact-card"><Phone /><h3>Contact</h3><p>0161 637 6710<br />Call us for product enquiries<br />and availability.</p><a href="tel:01616376710">Call Now <ArrowRight size={12} /></a></article>
        <article className="contact-card"><Clock /><h3>Opening Hours</h3><div className="hours"><span>Mon – Fri</span><b>9:00 am – 5:00 pm</b><span>Saturday</span><b>9:00 am – 4:00 pm</b><span>Sunday</span><b>Closed</b></div></article>
      </div>
      <a className="email-line" href="mailto:apfurnishing@gmail.com"><Mail size={14} /> apfurnishing@gmail.com</a>
    </div>
  </section>;
}


function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AP <span>FURNISHING</span>
          </a>

          <p className="footer-description">
            Making your house feel like home. Discover quality beds,
            sofas and wardrobes at affordable prices from your local
            independent furniture shop in Oldham.
          </p>

          <a href="#contact" className="footer-discover">
            Discover our showroom <ArrowRight size={16} />
          </a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#beds">Beds</a></li>
            <li><a href="#sofas">Sofas</a></li>
            <li><a href="#wardrobes">Wardrobes</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Furniture</h3>
          <ul>
            <li><a href="#beds">Beds & Mattresses</a></li>
            <li><a href="#sofas">Sofas & Suites</a></li>
            <li><a href="#wardrobes">Wardrobes</a></li>
            <li><a href="#beds">Bedroom Furniture</a></li>
            <li><a href="#sofas">Living Room Furniture</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=27%2F29+Yorkshire+St%2C+Oldham+OL1+3RZ"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-item"
          >
            <MapPin size={19} />
            <span>27/29 Yorkshire St,<br />Oldham OL1 3RZ</span>
          </a>

          <a href="tel:01616376710" className="footer-contact-item">
            <Phone size={18} />
            <span>0161 637 6710</span>
          </a>

          <a
            href="mailto:apfurnishing@gmail.com"
            className="footer-contact-item"
          >
            <Mail size={18} />
            <span>apfurnishing@gmail.com</span>
          </a>

          <a href="#contact" className="footer-contact-button">
            Visit Our Showroom <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AP Furnishing. All rights reserved.
        </p>

        <p className="footer-tagline">
          Quality Furniture. Affordable Prices.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}


export default function App() {
  return <>
    <Header /><main><Hero /><Benefits /><About />
      {collections.map(collection => <Collection key={collection.id} collection={collection} />)}
      <Testimonials /><Contact />
    </main><Footer />
  </>;
}