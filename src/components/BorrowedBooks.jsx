import { useEffect, useState } from 'react';
import UserNavBar from './UserNavBar';
import { Link } from 'react-router-dom';


const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/borrowed-books/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error('Failed to fetch borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <UserNavBar />
      <div className="min-h-screen p-5 bg-[url('/images/library2.jpg')] bg-cover bg-center " >
      <div className=" justify-items-center bg-white p-6 rounded shadow-md " >
        <h2 className="text-2xl font-bold mb-4">
          Borrowed Books</h2>
        <table className=" min-w-full text-black border-separate border-spacing-2 border-slate-300 bg-slate-300" >
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.length > 0 ? (
              borrowedBooks.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                  <td className="border p-2">{book.return_date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">No borrowed books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
        <div> 
          <Link to="/user" className="text-white underline mb-4 block">Go Back</Link>
        </div>

  
      </div>
    </div>
  );
};

export default BorrowedBooks;





