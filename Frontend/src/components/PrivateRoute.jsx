import React from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
// PrivateRoute component to check if user is authenticated
const PrivateRoute = ({ element: Element, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null initially, true or false after verification
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            if (token) {
                try {
                    const response = await axios.post('http://localhost:3000/verifyToken', {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setIsAuthenticated(response.status === 200);
                } catch (error) {
                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, [token]);

    // If verification is in progress, render a loading indicator
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    // If authentication failed, redirect to login
    if (!isAuthenticated) {
        console.log("Redirecting to login");
        return <Navigate to="/login" />;
    }

    // If authentication succeeded, render the protected component
    return <Element {...rest} />;
};

export default PrivateRoute;