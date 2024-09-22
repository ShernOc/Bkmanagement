import { useEffect, useState } from 'react';
import UserNavBar from './UserNavBar';
import { Link } from 'react-router-dom';

const UserPurchasedBooks = () => {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    const fetchPurchasedBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/user/purchased-books/', {
          headers: {
            'Authorization': `Bearer ${token}`, // Send token for authentication
          },
        });
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPurchasedBooks(data);
      } catch (error) {
        console.error('Failed to fetch purchased books:', error);
      }
    };

    fetchPurchasedBooks();
  }, []);

  return (
    <div>
      <UserNavBar />
      <div className="min-h-screen p-5 bg-[url('/images/library2.jpg')] bg-cover bg-center">
      <div className=" justify-items-center bg-white p-6 rounded shadow-md " >
        <h2 className="text-3xl font-bold mb-4  text-center">Purchased Books</h2>
        <table className="w-24 min-w-full  text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Date of Purchase</th>
            </tr>
          </thead>
          <tbody>
            {purchasedBooks.length > 0 ? (
              purchasedBooks.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                  <td className="border p-2">{book.date_of_purchase}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center">No purchased books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/user" className="text-white underline mb-4 block">Go Back</Link>
      </div>
      </div>   
    </div>
  );
};

export default UserPurchasedBooks;
