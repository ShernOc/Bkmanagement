import { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';
import { Link } from 'react-router-dom';

const AdminBorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/borrowed-books/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Transform the data to count borrowed books per user
        const userBookCounts = data.reduce((acc, book) => {
          const { username } = book;
          acc[username] = acc[username] || { count: 0, books: [] };
          acc[username].count += 1;
          acc[username].books.push(book);
          return acc;
        }, {});

        setBorrowedBooks(Object.entries(userBookCounts).map(([username, { count, books }]) => ({
          username,
          count,
          books
        })));
      } catch (error) {
        console.error('Failed to fetch borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="p-5 bg-[url('/images/library2.jpg')] bg-cover bg-center min-h-screen">
      <div className="bg-white p-6 rounded shadow-md ">
        <h2 className="text-3xl font-bold ">Borrowed Books</h2>
        <table className="min-w-full text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
          <thead>
            <tr>
              <th className="border p-2">Username</th>
              <th className="border p-2">Borrowed Books </th>
              <th className="border p-2">Books List</th>
              <th className="border p-2">Return Dates</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.length > 0 ? (
              borrowedBooks.map((user) => (
                <tr key={user.username}>
                  <td className="border p-2">{user.username}</td>
                  <td className="border p-2">{user.count}</td>
                  <td className="border p-2">
                    <ul>
                      {user.books.map(book => (
                        <li key={book.id}>{book.title}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul>
                      {user.books.map(book => (
                        <li key={book.id}>{book.return_date}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">No borrowed books found.</td>
              </tr>
            )}
          </tbody>
        </table>

        <Link to="/admin" className="text-white underline mb-4 block">Go Back</Link>
      </div>
      </div>
    </div>
  );
};

export default AdminBorrowedBooks;
