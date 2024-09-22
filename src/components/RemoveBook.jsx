import { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import { Link } from 'react-router-dom';

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveBook = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/books/remove/${bookId}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage(`Book with ID ${bookId} has been removed successfully.`);
        setBookId('');
      } else {
        throw new Error('Failed to remove the book.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="flex justify-center items-center h-screen bg-[url('/images/library2.jpg')] bg-cover bg-center">
        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleRemoveBook}>
          <h2 className="text-2xl font-bold mb-4">Remove Book</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Remove Book
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>
      <div><Link to="/admin" className="text-white underline mb-4 block">Go Back</Link></div>
      
    </div>
  );
};

export default RemoveBook;
