import React from 'react';

const UserManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Market Insyte</h1>
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Tasks</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="text-blue-600 font-semibold cursor-pointer">Users</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
          <p className="text-gray-600">Manage user profiles, roles, and permissions</p>
        </div>

        {/* Search and Add User */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search User"
            className="border border-gray-300 rounded-lg p-2 w-1/3 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Add User
          </button>
        </div>

        {/* User Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200 text-gray-600 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Keerthana Reddy</td>
                <td className="p-4">KRM01@indianatech@gmail.com</td>
                <td className="p-4">Admin</td>
                <td className="p-4 space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-green-500 hover:text-green-700">View</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
              {/* Additional user rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
