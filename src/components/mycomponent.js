import React, { useState } from 'react';

function MyComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-2xl font-bold mb-6">Login Page</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyComponent;
