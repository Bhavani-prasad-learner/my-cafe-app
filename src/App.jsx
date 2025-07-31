import { useState } from 'react'
import Navbar from './components/navbar'
import ClickSpark from './reactbits/clickspark.jsx';
import Background from './components/Background.jsx';
import MenuSection from './components/MenuSection'; 
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="app-wrapper">
      <Background />
      <div className="foreground-content">
        <ClickSpark />
        <Navbar onMenuClick={handleMenuClick} />
        {menuOpen && <MenuSection onClose={handleCloseMenu} />}
      </div>
    </div>
  );
}

export default App