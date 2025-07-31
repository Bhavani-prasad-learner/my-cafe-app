import { useState } from 'react'
import Navbar from './components/navbar'
import ClickSpark from './reactbits/clickspark.jsx';
import Background from './components/Background.jsx';
import MenuSection from './components/MenuSection'; 
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cart state: { [itemId]: quantity }
  const [cart, setCart] = useState({});

  const handleAddToCart = (itemId) => {
    setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prev => {
      const qty = (prev[itemId] || 0) - 1;
      if (qty <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: qty };
    });
  };



  const handleMenuClick = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="app-wrapper">
      <Background />
      <ClickSpark >
      <div className="foreground-content">
        
        <Navbar 
  onMenuClick={handleMenuClick} 
  onNavItemClick={handleCloseMenu}
  cart={cart}
/>
        {menuOpen && (
  <MenuSection 
    onClose={handleCloseMenu}
    cart={cart}
    onAddToCart={handleAddToCart}
    onRemoveFromCart={handleRemoveFromCart}
  />
) }
      </div>
      </ClickSpark>
    </div>
  );
}

export default App