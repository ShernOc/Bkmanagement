import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const UsersignUp= () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('Signing up with:', { username, email, password });
    
    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     
      // User signed up
      const user = userCredential.user;
      console.log('User signed up:', user);
      await updateProfile(user, { displayName: username });

      navigate('/user'); // helps to navigate to ther user dashboard

      // Optionally, store the username in your database here
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please log in');
        console.error('Error signing up: Email is already in use.');
      } else {
        setError('Failed to sign up. Please check your details.');
        console.error('Error signing up:', error.message);
      }
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen absolute inset-0 bg-[url('/images/library3.jpg')] bg-cover bg-center ">
      <form className="bg-white p-6 rounded shadow-md opacity-85" onSubmit={handleSignUp}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display errors when user repeats email */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 hover:font-semibold text-white p-2 rounded w-full">
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/usersignin" className="text-blue-600">Sign In</Link>
          <br />
         <Link to="/" className="blue-white underline mb-4 block">Go Back</Link>
        </p>
      </form>
    </div>
  );
};

export default UsersignUp;