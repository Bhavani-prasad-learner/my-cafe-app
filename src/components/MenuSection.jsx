import React, { useState } from 'react';
import './MenuSection.css';
import ClickSpark from '../reactbits/clickspark.jsx';
import starIcon from '../assets/icons8-rating-50.png';
import cartIcon from '../assets/icons8-cart-48.png';
import slideUpIcon from '../assets/icons8-slide-up-30.png';
import cofeeimage1 from '../assets/OIP.jpeg';
import latte from '../assets/download.webp';
import masala from '../assets/download-1.webp';
import greentea from '../assets/download-2.webp';
import lemon from '../assets/download-3.webp';
import coldbrew from "../assets/OIP-1.webp";
import lemontea from "../assets/OIP-2.webp";
import mango from "../assets/OIP-3.webp";
import watermelon from "../assets/OIP-4.webp";

const menuData = {
  tea: [
    { id: 1, title: "Masala Chai", desc: "Traditional Indian spiced tea.", image: masala, price: "₹40" },
    { id: 2, title: "Green Tea", desc: "Refreshing and healthy.", image: greentea, price: "₹50" },
    { id: 3, title: "Lemon Tea", desc: "Tangy lemony black tea.", image: lemontea, price: "₹45" }
  ],
  coffee: [
    { id: 4, title: "Cappuccino", desc: "Espresso with milk foam.", image: cofeeimage1, price: "₹90" },
    { id: 5, title: "Latte", desc: "Smooth milky coffee.", image: latte, price: "₹100" },
    { id: 6, title: "Cold Brew", desc: "Chilled and slow-brewed.", image: coldbrew, price: "₹110" }
  ],
  drinks: [
    { id: 7, title: "Lemonade", desc: "Cool and refreshing.", image: lemon, price: "₹35" },
    { id: 8, title: "Mango Smoothie", desc: "Sweet mango delight.", image: mango, price: "₹70" },
    { id: 9, title: "Watermelon Juice", desc: "Fresh & chilled.", image: watermelon, price: "₹60" }
  ]
};

export default function MenuSection({ cart, onAddToCart, onRemoveFromCart }) {
  const [filter, setFilter] = useState('tea');
  const [expanded, setExpanded] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  // Remove modal state and handlers for cart icon

  return (
    <div className="menu-section-wrapper">
      
      <div className="menu-filters-fixed">
        {['tea', 'coffee', 'drinks'].map(type => (
          <button
            key={type}
            className={filter === type ? 'active' : ''}
            onClick={() => {
              setFilter(type);
              setExpanded(null);
              setActiveCard(null);
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="menu-list-scroll">
        <div className="menu-list">
          {menuData[filter].map((item) => (
            <div
              className={`menu-card ${activeCard === item.id ? 'active-glow' : ''}`}
              key={item.id}
              onClick={() => setActiveCard(item.id)}
            >
              <div className="menu-card-image-area">
                <div className="menu-card-topbar">
                  <img src={starIcon} alt="rating" className="icon-btn" />
                  <div style={{ position: 'relative', display: 'inline-block' }}>
  <img
    src={cartIcon}
    alt="cart"
    className="icon-btn clickable"
    onClick={(e) => {
      e.stopPropagation();
      setExpanded(expanded === item.id ? null : item.id);
    }}
  />
  {(cart && cart[item.id] > 0) && (
    <span className="cart-badge">{cart[item.id]}</span>
  )}
</div>
                </div>
                <img src={item.image} alt={item.title} className="menu-card-img-full-tall" />
                
                <div className="menu-card-bottom-overlay">
                  <span className="menu-card-name-bottom">{item.title}</span>
                  <button
                    className="menu-card-slideup-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded(expanded === item.id ? null : item.id);
                    }}
                  >
                    <img src={slideUpIcon} alt="Expand" />
                  </button>
                  <span className="menu-card-price-bottom">{item.price}</span>
                </div>
              </div>
              <div className={`menu-card-extra ${expanded === item.id ? 'open' : ''}`}>
  <div className="menu-card-desc">{item.desc}</div>
  <div className="cart-controls">
    <button onClick={e => { e.stopPropagation(); onRemoveFromCart(item.id); }} className="cart-qty-btn">-</button>
    <span className="cart-qty-display">{cart && cart[item.id] ? cart[item.id] : 0}</span>
    <button onClick={e => { e.stopPropagation(); onAddToCart(item.id); }} className="cart-qty-btn">+</button>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
