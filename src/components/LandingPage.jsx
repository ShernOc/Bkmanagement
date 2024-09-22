import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/images/library2.jpg')]  bg-cover bg-center "> 
    {/* links to all the Set Ups */}

    <nav className='inline-flex  items-center justify-center whitespace-nowrap space-x-4   bg-slate-900 rounded-md p-4'>
      {/* Link to User Sign In */}
      <Link to="/usersignin" className=" px-4 py-2 rounded mb-2 bg-blue-500 text-black font-semi-bold hover:bg-blue-700 hover:font-bold hover:text-white ">
        User Sign In
      </Link>
      <br/><br />

      {/* Link to User Sign Up */}
      <Link to="/usersignup">
        <button className=" px-4 py-2 rounded mb-2 bg-blue-500 text-black font-semi-bold hover:bg-blue-700 hover:font-semibold hover:text-white">
          User Sign Up
        </button>
      </Link>
      <br/><br />

      {/* Link to Admin Sign In */}
      <Link to="/adminsignin" className="px-4 py-2 mb-2 bg-blue-500 text-black rounded font-semi-bold  hover:bg-blue-700 hover:font-semibold hover:text-white">
        Admin Sign In
      </Link>
      
      {/* Link to Admin Register */}
      <Link to="/adminsignup">
        <button className="px-4 py-2 bg-blue-500 rounded text-black font-semi-bold  hover:bg-blue-700 hover:font-semibold hover:text-white">
          Admin Sign Up
        </button>
      </Link>
      </nav>
      <br />
      <h1 className="text-5xl font-bold text-sky-50 text-center">Book Smart</h1>
      <br/><br/><br />
      <p className='inline-flex items-center text-balance text-grey font-bold text-4xl bg-slate-50/50 rounded-full '>
      Discover, Borrow, and Manage Books Effortlessly. Your Library, Just a Click Away!
      </p>
    
    </div>
  );
};

export default LandingPage;
