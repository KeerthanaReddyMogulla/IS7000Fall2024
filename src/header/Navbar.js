import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pink-300 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Market Insyte</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/markets">Market Overview</Link>
        <Link to="/subscription">Subscriptions</Link>
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/mycomponent">MyComponent</Link>  {/* Ensure this link is correct */}
      </div>
    </nav>
  );
}

export default Navbar;
