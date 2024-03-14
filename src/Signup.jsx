import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/signup', {
        email,
        password
      });
      console.log(response.data);
      window.location.href = '/login';
    } catch (error) {
      setError('Error signing up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4
                     border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-6a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
                        clipRule="evenodd"/>
                </svg>
              </span>
              Sign Up
            </button>
          </div>
        </form>
        {loading && <Loader />}
        {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
