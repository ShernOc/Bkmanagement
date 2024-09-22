import React, { useState } from 'react';
import { auth } from '../config/firebase';
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const AdminsignUp= () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('Signing up with:', { username, email, password });
    
    try {
      // Create admin with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Admin signed up
      const user = userCredential.user;
      console.log('Admin signed up:', user);
      await updateProfile(user, { displayName: username });
      navigate('/admin'); // navigates to the admin dashboard. 

      // Optionally, store the username in your database here
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please log in or reset your password.');
        console.error('Error signing up: Email is already in use.');
      } else {
        setError('Failed to sign up. Please check your details.');
        console.error('Error signing up:', error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('/images/library3.jpg')] bg-cover bg-center">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSignUp}>
        <h2 className="text-2xl font-bold mb-4">Admin Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* Display errors when admin repeats email */}
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
          Already have an account? <Link to="/adminsignin" className="text-blue-600">Admin Sign Up </Link>
          <br />
         <Link to="/" className="blue-white underline mb-4 block">Go Back</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminsignUp;
