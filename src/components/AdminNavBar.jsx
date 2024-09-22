import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-4 justify-center">
      <li>
          <Link
            to="/admin/"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded-md transition"
          >
            Admin Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/book-count"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded-md transition"
          >
            User Book Count
          </Link>
        </li>
        <li>
          <Link
            to="/admin/remove-book"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded-md transition"
          >
            Remove Books
          </Link>
        </li>
        <li>
          <Link
            to="/admin/borrowed-books"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded-md transition"
          >
            Borrowed Books
          </Link>
        </li>
        <li>
          <Link
            to="/admin/purchased-books"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded-md transition"
          >
            Purchased Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
