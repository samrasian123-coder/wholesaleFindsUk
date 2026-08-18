import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, CheckCircle, Globe, ShieldCheck, Package, Star, Truck, ArrowRight, BarChart3, Warehouse, Tag, Image, MessageCircle, Plus, Minus } from 'lucide-react';
import './Home.css';

const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-label">ONE UK PLATFORM THREE SELLING ROUTES</div>
            <h1 className="hero-title">Everything UK Resellers<br/>Need In One Platform</h1>
            <p className="hero-desc">
              Buy in bulk fulfil customer orders with<br/>
              dropshipping or join our exclusive Vinted Program<br/>
              all from one UK-based platform
            </p>
            <div className="hero-actions">
              <Link to="/wholesale" className="btn btn-teal">Browse Wholesale</Link>
              <Link to="/dropshipping" className="btn btn-primary">Start Dropshipping</Link>
              <Link to="/vinted" className="btn btn-dark-teal">Vinted Program</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP TRENDING WINNING PRODUCTS */}
      <section className="trending-section">
        <div className="container">
          <h2 className="section-title-center">Top Trending Winning Products This Week</h2>
          <div className="trending-grid">
            {[1, 2, 3, 4].map((num) => (
              <div className="trending-card" key={num}>
                <div className="lock-icon-wrap">
                  <Lock size={32} />
                </div>
                <p className="lock-text">Join free<br/>to unlock<br/>this<br/>product</p>
                <div className="place-badge">
                  <span className="fire-emoji">🔥</span>
                  <span className="place-text">{num === 1 ? '1st' : num === 2 ? '2nd' : num === 3 ? '3rd' : '4th'} place</span>
                </div>
              </div>
            ))}
          </div>
          <div className="trending-products-row">
            {[1, 2, 3, 4].map((num) => (
              <div className="product-thumb" key={num}>
                <img src="/images/watch.jpg" alt="Trending product" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED IN ONE PLATFORM */}
      <section className="platform-section">
        <div className="container">
          <h2 className="section-title-center">Everything you need in one platform</h2>
          <div className="platform-grid">
            {/* Wholesale Buying */}
            <div className="platform-card card-teal-border">
              <div className="platform-card-header">
                <Package size={24} className="platform-icon" />
                <h3 className="platform-card-title teal-text">Wholesale<br/>Buying</h3>
              </div>
              <ul className="platform-features">
                <li><CheckCircle size={18} className="check-teal" /> Low MOQ from trusted UK suppliers</li>
                <li><CheckCircle size={18} className="check-teal" /> Tiered pricing the more you buy</li>
                <li><CheckCircle size={18} className="check-teal" /> UK stock ready to dispatch</li>
              </ul>
              <Link to="/wholesale" className="btn btn-teal">Browse Wholesale</Link>
            </div>

            {/* Dropshipping Fulfilment */}
            <div className="platform-card card-orange-border">
              <div className="platform-card-header">
                <Truck size={24} className="platform-icon" />
                <h3 className="platform-card-title orange-text">Dropshipping<br/>Fulfilment</h3>
              </div>
              <ul className="platform-features">
                <li><CheckCircle size={18} className="check-orange" /> Sell without holding stock</li>
                <li><CheckCircle size={18} className="check-orange" /> White-label packing slips</li>
                <li><CheckCircle size={18} className="check-orange" /> Tracked fulfilment to your customers</li>
              </ul>
              <Link to="/dropshipping" className="btn btn-primary">Start Dropshipping</Link>
            </div>

            {/* Vinted Support */}
            <div className="platform-card card-grey-border">
              <div className="platform-card-header">
                <BarChart3 size={24} className="platform-icon" />
                <h3 className="platform-card-title grey-text">Vinted<br/>Support</h3>
              </div>
              <ul className="platform-features">
                <li><CheckCircle size={18} className="check-grey" /> Guide to eligible pre-owned listings</li>
                <li><CheckCircle size={18} className="check-grey" /> Photo and title best practices</li>
                <li><CheckCircle size={18} className="check-grey" /> Pro rule guidance and support</li>
              </ul>
              <Link to="/vinted" className="btn btn-dark-teal">Vinted Program</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR BUYING JOURNEY */}
      <section className="journey-section">
        <div className="container journey-container">
          <div className="journey-heading">
            <h2>Choose<br/>your<br/>buying<br/>journey</h2>
          </div>
          <div className="journey-cards">
            <div className="journey-card journey-teal">
              <Package size={28} />
              <h3>Wholesale</h3>
              <p>Bulk pricing, tier discounts, request-a-quote on 100+ units. £50 minimum order.</p>
              <Link to="/wholesale" className="journey-link teal-link">View wholesale</Link>
            </div>
            <div className="journey-card journey-orange">
              <Truck size={28} />
              <h3>Dropshipping</h3>
              <p>White-label packing slips, prepaid label option, reseller tools built for UK resellers.</p>
              <Link to="/dropshipping" className="journey-link orange-link">Start dropshipping</Link>
            </div>
            <div className="journey-card journey-grey">
              <Tag size={28} />
              <h3>Vinted</h3>
              <p>Source reseller-priced stock with listing photos included built for Vinted sellers.</p>
              <Link to="/vinted" className="journey-link grey-link">Join Vinted</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="howitworks-section">
        <div className="container">
          <div className="hiw-label">How it Works</div>
          <h2 className="section-title-center dark-title">From browse to delivered in 3 steps</h2>
          <div className="steps-grid">
            <div className="step-item">
              <Globe size={40} className="step-icon" />
              <h4>Browse</h4>
              <p>Find wholesale, dropshipping & Vinted stock with UK pricing</p>
            </div>
            <div className="step-arrow"><ArrowRight size={28} /></div>
            <div className="step-item">
              <Package size={40} className="step-icon" />
              <h4>Order</h4>
              <p>Secure checkout £50 min wholesale Prepaid labels supported</p>
            </div>
            <div className="step-arrow"><ArrowRight size={28} /></div>
            <div className="step-item">
              <Truck size={40} className="step-icon" />
              <h4>Delivered</h4>
              <p>Tracked UK delivery with unbranded dropship packing</p>
            </div>
          </div>
        </div>
      </section>

      {/* DROPSHIPPER TOOL */}
      <section className="dropshipper-tool-section">
        <div className="container">
          <div className="dropshipper-card">
            <div className="dropshipper-content">
              <div className="dropshipper-label">Dropshiper tool</div>
              <h3>Know your margin<br/>before you list</h3>
              <p>Compare our dropshipping price + warehouse handling against your selling price Every product page shows your estimated profit</p>
            </div>
            <Link to="/dropshipping" className="btn btn-primary btn-large">Check product<br/>opportunities</Link>
          </div>
        </div>
      </section>

      {/* BUILT FOR SERIOUS UK SELLERS */}
      <section className="serious-section">
        <div className="container">
          <h2 className="section-title-center dark-title">Built for serious UK sellers</h2>
          <div className="serious-grid">
            <div className="serious-card">
              <Warehouse size={24} className="serious-icon" />
              <h4>UK warehouse</h4>
              <p>Fast UK dispatch from our trusted warehouse partners</p>
            </div>
            <div className="serious-card">
              <BarChart3 size={24} className="serious-icon" />
              <h4>Tiered wholesale pricing</h4>
              <p>Lower your costs the more you buy with clear tiered pricing</p>
            </div>
            <div className="serious-card">
              <Truck size={24} className="serious-icon" />
              <h4>White-label dropshipping</h4>
              <p>Branded packing spe prepared labels and tracked delivery.</p>
            </div>
            <div className="serious-card">
              <Image size={24} className="serious-icon" />
              <h4>Reseller tools</h4>
              <p>Product data, images and tools to help you sell with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-main-title">Frequently asked questions</h2>
          <p className="faq-subtitle">Clearer answers and cleaner punctuation throughout</p>
          <div className="faq-grid">
            <div className="faq-column">
              <FaqItem 
                question="What is the minimum order for wholesale?"
                answer="It varies by product category. Each product page shows its own minimum order quantity once you're logged into your wholesale account."
                defaultOpen={true}
              />
              <FaqItem 
                question="How do I get access to wholesale pricing?"
                answer="Sign up for free. Once you're logged in, wholesale pricing unlocks automatically, no separate approval wait."
              />
              <FaqItem 
                question="How does dropshipping work?"
                answer="You list the products and take the orders, we hold the stock. When an order comes in, we pack it with white-label packaging and ship it out on a prepaid label, so you never handle stock or arrange courier collection yourself."
              />
              <FaqItem 
                question="How do I know if a product is worth selling?"
                answer="Every dropshipping product shows your estimated profit margin on the page, our cost plus handling against your selling price, so you can decide before you list it."
              />
            </div>
            <div className="faq-column">
              <FaqItem 
                question="How fast do orders get dispatched?"
                answer="All orders from our UK warehouse are dispatched the same day."
              />
              <FaqItem 
                question="What is the Vinted Program?"
                answer="A dedicated range of reseller-priced stock sourced for Vinted, complete with ready-to-use listing photos and guidance on eligible items, titles, and Vinted's selling rules."
              />
              <FaqItem 
                question="Can I store my wholesale stock with you?"
                answer="Yes. Buy in bulk and leave it in our warehouse, we'll dispatch it for you as your own customer orders come in."
              />
              <FaqItem 
                question="Can I use both wholesale and dropshipping on one account?"
                answer="Yes, a single login gives you access to both, so you can switch between them as your business grows."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="whatsapp-section">
        <div className="container">
          <div className="whatsapp-card">
            <div className="whatsapp-left">
              <MessageCircle size={40} className="whatsapp-icon" />
              <div className="whatsapp-text">
                <h3>Talk to us on WhatsApp</h3>
                <p>Questions about products, orders or support we reply within a few hours.</p>
              </div>
            </div>
            <a href="#" className="btn btn-whatsapp">Open Whatsapp</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="final-cta-banner">
        <div className="container final-cta-container">
          <h2 className="final-cta-title">Ready to launch your next reseller journey?</h2>
          <div className="final-cta-actions">
            <Link to="/wholesale" className="btn btn-white-outline">Browse Wholesale</Link>
            <Link to="/signup" className="btn btn-white-solid">Try For Free</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
