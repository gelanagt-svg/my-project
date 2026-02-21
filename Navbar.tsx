import React from 'react';

interface NavbarProps {
  onSelect: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => {
  return (
    <nav>
      <button onClick={() => onSelect('dashboard')}>Dashboard</button>
      <button onClick={() => onSelect('compliance')}>Compliance Tasks</button>
      <button onClick={() => onSelect('risk')}>Risk Register</button>
    </nav>
  );
};

export default Navbar;