import React from 'react';
import { Link } from 'react-router-dom';

const UserNavBar = () => {
  return (
    <nav className="bg-slate-950 shadow-md rounded-lg p-4 w-full max-w-md">
      <ul className="flex space-x-4">
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
      </ul>
    </nav>
  );
};

export default UserNavBar;
