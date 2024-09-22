import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Ensure Firebase is configured
import { signOut } from 'firebase/auth';

const AdminDashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate('/'); // Redirect to the admin sign-in page after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex absolute justify-center items-center h-screen inset-0 bg-[url('/images/library.jpg')] bg-cover bg-center"> 
      <div className="p-5 bg-white bg-opacity-70 rounded-md shadow-lg w-4/5 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <p className="mt-2 text-gray-700 font-bold">
          Welcome to the Dashboard! Where you can add, remove, view borrowed books and purchased books from your clients.
          </p>

        <div className="mt-4 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/book-count" className="text-blue-500 hover:underline">View Added Books</Link>
            </li>
            <li>
              <Link to="/admin/remove-book" className="text-blue-500 hover:underline">Remove Book</Link>
            </li>
            <li>
              <Link to="/admin/borrowed-books" className="text-blue-500 hover:underline">View Borrowed Books</Link>
            </li>
            <li>
              <Link to="/admin/purchased-books" className="text-blue-500 hover:underline">View Purchased Books</Link>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
