import React from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
const PrivateRoute = ({ element: Element, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
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

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        console.log("Redirecting to login");
        return <Navigate to="/login" />;
    }

    return <Element {...rest} />;
};

export default PrivateRoute;