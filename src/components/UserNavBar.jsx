import { Link } from 'react-router-dom';

const UserNavBar = () => {
  return (
    <nav className="inline-flex whitespace-nowrap bg-slate-950 p-4 ">
      <ul className="flex space-x-4">

      {/* whitespace-nowrap bg-slate-950 shadow-md rounded-md p-4  */}

        <li>
          <Link
            to="/user/books-to-borrow"
            className="block text-center text-lg text-white bg-yellow-600 hover:text-black rounded-lg py-2 transition duration-200"
          >
            Books to Borrow
          </Link>
        </li>
        <li>
          <Link
            to="/user/add-books"
            className="block text-center text-lg text-white bg-yellow-600 hover:text-black rounded-lg py-2 transition duration-200"
          >
           Add books
          </Link>
        </li>
        <li>
          <Link
            to="/user/borrowed-books"
            className="block text-center text-lg text-white bg-yellow-600 hover:text-black rounded-lg py-2 transition duration-200"
          >
            Borrowed Books
          </Link>
        </li>
        <li>
          <Link
            to="/user/purchased-books"
            className="block text-center text-lg text-white bg-yellow-600 hover:text-black rounded-lg py-2 transition duration-200"
          >
            Purchased Books
          </Link>
        </li>
        <li>
          <Link
            to="/user/books-on-sale"
            className="block text-center text-lg text-white bg-yellow-600 hover:text-black rounded-lg py-2 transition duration-200"
          >
            Books on Sale
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavBar;
