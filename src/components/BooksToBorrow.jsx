import { useEffect, useState } from 'react';
import UserNavBar from './UserNavBar';
import { Link } from 'react-router-dom';

const BooksToBorrow = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:8000/books/to-borrow/');
      const data = await response.json();
      setBooks(data);
    };
    
    fetchBooks();
  }, []);

  const handleBorrow = async (book) => {
    // Logic to handle borrowing a book
    console.log('Borrowing Book:', book);
  };

  return (
  <div>
      <UserNavBar/>
    <div className="p-5 bg-[url('/images/library2.jpg')] bg-cover bg-center min-h-screen">
    <div className=" justify-items-center bg-white p-6 rounded shadow-md ">
      <h2 className="text-3xl font-bold text-center">Books To Borrow</h2>
      
      <table className="w-24 min-w-full  text-black border-separate border-spacing-2 border-black bg-slate-300">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">
                <button onClick={() => handleBorrow(book)} className="bg-blue-500 text-white p-1">Borrow</button>
              </td>
            </tr>
          ))}
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

export default BooksToBorrow;
