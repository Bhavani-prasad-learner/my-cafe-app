import React from 'react';
import GooeyNav from './GooeyNav';

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Cart", href: "#" },
  { label: "Menu", href: "#menu" },
];

const Navbar = ({ onMenuClick, onNavItemClick }) => {
  const handleItemClick = (label, e) => {
    if (label === "Menu") {
      e.preventDefault();
      onMenuClick && onMenuClick();
    } else {
      onNavItemClick && onNavItemClick();
    }
  };

  return (
    <nav className="main-navbar">
      <GooeyNav
        items={items}
        particleCount={5}
        particleDistances={[70, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={500}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onItemClick={handleItemClick}
      />
    </nav>
  );
};

export default Navbar;