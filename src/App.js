import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './header/Navbar';
import Home from './pages/dashboard/Home';
import MarketOverview from './pages/dashboard/MarketOverview';
import Subscription from './pages/subscription/Subscription';
import User from './pages/user/User';
import Profile from './pages/profile/Profile';
import Wallet from './pages/wallet/Wallet';
import Contact from './pages/wallet/Contact';
import MyComponent from './components/mycomponent';  // Ensure this is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketOverview />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycomponent" element={<MyComponent />} />  {/* Check path and component name */}
      </Routes>
    </Router>
  );
}

export default App;
