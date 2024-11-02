// src/header/Header.js
import React from 'react';
import './Header.css'; // Assuming you'll create a CSS file for styling the header

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">My Application</h1>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/profile">Profile</a></li>
                    <li className="nav-item"><a href="/dashboard">Dashboard</a></li>
                    <li className="nav-item"><a href="/subscription">Subscription</a></li>
                    <li className="nav-item"><a href="/wallet">Wallet</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
