// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-5">
      <aside className="col-span-1 bg-gray-800 text-white p-4">
        <nav className="space-y-4">
          <Link to="/class-levels" className="block">Class Levels</Link>
          <Link to="/subjects" className="block">Subjects</Link>
          <Link to="/categories" className="block">Categories</Link>
          <Link to="/contents" className="block">Content Items</Link>
        </nav>
      </aside>
      <main className="col-span-4 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;