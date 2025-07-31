import React, { useState } from 'react';
import './Cart.css';
import cartIcon from '../assets/icons8-cart-30.png';
import slideUpIcon from '../assets/icons8-slide-up-30.png';
import plusIcon from '../assets/icons8-plus-24.png';
import minusIcon from '../assets/icons8-minus-24.png';

const initialCart = [
  {
    id: 1,
    name: 'Masala Chai',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    price: 40,
    extra: 'Traditional Indian spiced tea, served hot.',
    quantity: 1
  },
  {
    id: 2,
    name: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
    price: 90,
    extra: 'Classic Italian coffee, creamy and rich.',
    quantity: 2
  },
  {
    id: 3,
    name: 'Mango Smoothie',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    price: 70,
    extra: 'Chilled smoothie with real mangoes.',
    quantity: 1
  },
  {
    id: 4,
    name: 'Lemonade',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    price: 35,
    extra: 'Made with fresh lemons and mint.',
    quantity: 1
  }
];

function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [expanded, setExpanded] = useState(null);
  const [showQty, setShowQty] = useState({});

  const handleQty = (id, delta) => {
    setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-list">
        {cart.map((item, idx) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-img-wrap">
              <img src={item.image} alt={item.name} className="cart-img" />
            </div>
            <div className="cart-main-info">
              <div className="cart-item-header">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₹{item.price}</span>
              </div>
              <div className="cart-actions">
                <button
                  className="cart-icon-btn"
                  onClick={() => setShowQty(q => ({ ...q, [item.id]: !q[item.id] }))}
                  aria-label="Change quantity"
                >
                  <img src={cartIcon} alt="Cart" />
                </button>
                <button
                  className="slideup-btn"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  aria-label="Show more"
                >
                  <img src={slideUpIcon} alt="Slide up" />
                </button>
              </div>
              {showQty[item.id] && (
                <div className="qty-control">
                  <button onClick={() => handleQty(item.id, -1)}><img src={minusIcon} alt="-" /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQty(item.id, 1)}><img src={plusIcon} alt="+" /></button>
                </div>
              )}
            </div>
            <div className={`cart-extra-info ${expanded === idx ? 'open' : ''}`}>
              <span>{item.extra}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
