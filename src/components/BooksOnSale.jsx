import { useEffect, useState } from 'react';
import UserNavBar from './UserNavBar';
import { Link } from 'react-router-dom';

const BooksOnSale = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksOnSale = async () => {
      const response = await fetch('http://localhost:8000/books/on-sale/');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooksOnSale();
  }, []);

  const handleBuy = async (book) => {
    console.log('Buying Book:', book);
  };

  return (
    <div className="bg-[url('/images/library2.jpg')] bg-cover bg-center min-h-screen">    
    {/* userNavbar  */}
      <UserNavBar/>

      <h2 className="text-3xl font-bold text-white">Books On Sale</h2>
      <table className="w-24 min-w-full  text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
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
                <button onClick={() => handleBuy(book)} className="bg-green-500 text-white p-1">Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/user" className="text-white underline mb-4 block">Go Back</Link>

    </div>
  );
};

export default BooksOnSale;
