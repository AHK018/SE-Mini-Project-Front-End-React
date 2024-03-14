import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Loader from './Loader';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            setUser(decodedToken.sub);
            setLoading(false);
        } else {
            navigate('/login');
        }
    }, []);

    const handleLogout = () => {
        setLoading(true);
        Cookies.remove('token');
        setLoading(false);
        navigate('/login');
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 font-mono">Welcome to the Dashboard</h2>
            {loading ? (
                <Loader />
            ) : user ? (
                <div className="font-mono">
                    <p>Hello, {user.email}</p>
                    <p>Role: {user.user}</p>
                    <button class="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Dashboard;
