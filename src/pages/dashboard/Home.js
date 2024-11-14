// src/pages/dashboard/Home.js
import React from 'react';
import PageLayout from '../../components/PageLayout';
import Login from '../../components/Login';

function Home() {
  return (
    <PageLayout title="Welcome to the Home page. Explore our market insights and services">
      <h2 className="text-xl font-bold">Home</h2>
      <p className="mt-4">.</p>
      <Login />
    </PageLayout>
  );
}

export default Home;
