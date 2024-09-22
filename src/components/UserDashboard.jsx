import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase'; // Ensure you have Firebase initialized
import { signOut } from 'firebase/auth';

const UserDashboard = () => {
  const navigate = useNavigate(); // Used for navigating after logout

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate('/'); // Redirect to the landing page after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-5 bg-[url('public/images/manreading.jpg')] bg-cover bg-center">
      <h2 className="text-7xl font-bold mb-6 text-white text-justify hover:text-just p-20" >User Dashboard</h2>
      <nav className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/user/books-to-borrow" 
              className="block text-center text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 transition duration-200"
            >
              Books to Borrow
            </Link>
          </li>
          <li>
            <Link 
              to="/user/borrowed-books" 
              className="block text-center text-lg text-white bg-green-600 hover:bg-green-700 rounded-lg py-2 transition duration-200"
            >
              Borrowed Books
            </Link>
          </li>
          <li>
            <Link 
              to="/user/purchased-books" 
              className="block text-center text-lg text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg py-2 transition duration-200"
            >
              Purchased Books
            </Link>
          </li>
          <li>
            <Link 
              to="/user/books-on-sale" 
              className="block text-center text-lg text-white bg-red-600 hover:bg-red-700 rounded-lg py-2 transition duration-200"
            >
              Books on Sale
            </Link>
          </li>
          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-center text-lg text-white bg-gray-600 hover:bg-gray-700 rounded-lg py-2 transition duration-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserDashboard;