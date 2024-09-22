import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar'; // Assuming you're using an admin navbar
import { Link } from 'react-router-dom';

const AdminPurchasedBooks = () => {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    const fetchPurchasedBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/purchased-books/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Group purchased books by username
        const userBookGroups = data.reduce((acc, book) => {
          const { username } = book;
          if (!acc[username]) {
            acc[username] = [];
          }
          acc[username].push(book);
          return acc;
        }, {});

        setPurchasedBooks(userBookGroups);
      } catch (error) {
        console.error('Failed to fetch purchased books:', error);
      }
    };

    fetchPurchasedBooks();
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen p-5 bg-[url('/images/library2.jpg')] bg-cover bg-center">
      <div className=" justify-items-center bg-white p-6 rounded shadow-md ">
          <h2 className="text-3xl font-bold mb-4">Purchased Books</h2>
        <table className="min-w-full text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
          <thead>
            <tr>
              <th className="border p-2">Username</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Date of Purchase</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(purchasedBooks).length > 0 ? (
              Object.keys(purchasedBooks).map((username) => (
                <React.Fragment key={username}>
                  <tr>
                    <td colSpan="4" className="border p-2 font-bold bg-gray-200">
                      {username}
                    </td>
                  </tr>
                  {purchasedBooks[username].map((book) => (
                    <tr key={book.id}>
                      <td className="border p-2">{username}</td>
                      <td className="border p-2">{book.title}</td>
                      <td className="border p-2">{book.author}</td>
                      <td className="border p-2">{book.date_of_purchase}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">No purchased books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <div className='items-center'>
        <Link to="/admin" className="text-white underline mb-4 block">Go Back</Link></div>
        
      </div>
    </div>
  );
};

export default AdminPurchasedBooks;
