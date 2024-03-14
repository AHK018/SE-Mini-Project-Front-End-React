import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from './Loader';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                username,
                password
            });
            const { access_token } = response.data;
            Cookies.set('token', access_token, { expires: 1 }); // expire in 1 day
            window.location.href = '/dashboard';
        } catch (error) {
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-mono min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username" name="username" type="text" autoComplete="username" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            Login
                        </button>
                    </div>
                </form>
                {loading && <Loader />}
                {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
