import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const UserDashboard = () => {
  // Navigates to log out
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate('/'); // Redirect to the landing page after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-5 bg-[url('/images/manreading.jpg')] bg-cover bg-center">
      <h2 className="text-7xl font-bold mb-6 text-white text-justify hover:text-gray-300 p-20">Book Smart</h2>

      <h3 className='text-xl font-semibold  opacity-60 text-white '>Welcome to Book Smart . We are excited to have you as part of our community.  From here, you can explore a wide range of books, borrow what interests you, purchase and discover exciting new reads.</h3>
      <br />
      <nav className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link to="/user/add-books"
              className="block text-center text-lg text-white bg-slate-900 hover:bg-slate-700 rounded-lg py-2 transition duration-200"
            >
              Add Books
            </Link>
          </li>
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
      {/* Logout Button */}
      <div>
        <br />
        <button
          onClick={handleLogout}
          className="block w-full text-center text-lg text-white bg-gray-600 hover:bg-gray-700 rounded-lg py-2 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
