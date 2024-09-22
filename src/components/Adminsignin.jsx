import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';

const Adminsignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in successfully
      console.log('admin signed in:', userCredential.user);
      navigate('/admin');
    } catch (error) {
      // Handle sign-in error
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="flex absolute justify-center items-center h-screen inset-0 bg-[url('/images/library.jpg')] bg-cover bg-center">
      <form className="bg-white p-6 rounded shadow-md opacity-85" onSubmit={handleSignIn}>
        <h2 className="text-2xl font-bold mb-4">Admin Sign in</h2>
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
          Sign in
        </button>
        <p className="mt-4">
          No account? <Link to="/adminsignup" className="text-blue-600">Sign Up</Link>
          <br />
          <Link to="/" className="blue-white underline mb-4 block">Go Back</Link>
        </p>
      </form>
    </div>
  );
};

export default Adminsignin;
