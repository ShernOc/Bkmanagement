import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen inset-0 bg-[url('/images/library2.jpg')] bg-cover bg-center">
        {/* links to all the Set Ups */}
        <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-10 justify-center">
      <li>
         {/* Link to User Sign In */}
          <Link
            to="/usersignin"
            className="text-black bg-slate-400 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md transition"
          >
            User Sign in
          </Link>
        </li>
        <li>
                  {/* Links to Usersignup */}
          <Link
            to="/usersignup"
            className="text-black bg-slate-400  hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md transition"
          >
            User Sign UP
          </Link>
        </li>
        <li>
                  {/* Link to User Admin signin  */}
          <Link
            to="/admin/adminsignin"
            className="text-black bg-slate-400  hover:bg-slate-600  hover:text-white px-3 py-2 rounded-md transition"
          >
            Admin Sign In
          </Link>
        </li>
        <li>
                  {/* Link to Admin register */}
          <Link
            to="/admin/signup"
            className="text-black bg-slate-400  hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md transition"
          >
            Admin Sign Up
          </Link>
        </li>
      </ul>
    </nav>

      <br /><br />
      <div className=' items-center'>
        <h1 className="text-5xl font-bold text-sky-50 text-center">Book Smart</h1>
        <br /><br /><br />
        <p className='flex justify-center bg-slate-300 text-4xl font-bold  opacity-80'>
          Discover, Borrow, and Manage Books Effortlessly. Your Library, Just a Click Away!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
