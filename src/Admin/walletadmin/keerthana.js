// src/profile/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Assuming you'll create a CSS file for styling the profile

function Profile() {
    // State variables to hold user information
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [editing, setEditing] = useState(false);

    // Function to toggle editing mode
    const toggleEdit = () => {
        setEditing(!editing);
    };

    // Function to handle form submission (e.g., to save changes)
    const handleSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
        // Here you could add code to save the profile info (e.g., sending it to a server)
    };

    return (
        <div className="profile">
            <h2>User Profile</h2>

            {editing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="em
