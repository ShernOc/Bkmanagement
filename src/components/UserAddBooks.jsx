import { useState, useEffect} from 'react';
import UserNavBar from './UserNavBar';
import { Link } from 'react-router-dom';

const UserAddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/books/');
      if (!response.ok) {
        throw new Error('Failed to fetch books.');
      }
      const data = await response.json();
      setAddedBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks(); // fetches the books
  }, []);


  const handleAddBook = async (e) => {
    e.preventDefault();

    const bookData = { title, author };

    try {
      const response = await fetch('http://localhost:8000/books/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`Book added successfully: ${result.title}`);
        setTitle('');
        setAuthor('');
        fetchBooks();
      } else {
        throw new Error('Failed to add the book.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <UserNavBar/>
      <div className="flex justify-center items-center h-screen bg-[url('/images/library2.jpg')] bg-cover bg-center ">
      <div>
        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleAddBook}>
          <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Add Book
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>

      <br />
      {/* Table fpr added books */}
      <div className=" justify-items-center p-6 bg-white rounded shadow-md ">
        <h2 className="text-3xl font-bold mb-4 text-center">Added Books</h2>
        <table className="min-w-full text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
            </tr>
          </thead>
          <tbody>
            {addedBooks.length > 0 ? (
              addedBooks.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="border p-2 text-center">No books added yet.</td>
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
    </div>
  );
};

export default UserAddBooks;





