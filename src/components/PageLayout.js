



// src/components/PageLayout.js
import React from 'react';

function PageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-pink-100 text-center p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default PageLayout;
