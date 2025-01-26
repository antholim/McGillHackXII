import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AccountDashboard from "./pages/AccountDashboard.jsx";
import TestTakingPage from './pages/TestTakingPage.jsx'
import Test from './pages/Test.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/account', element: <AccountDashboard/>},
    {path: '/testTaking', element: <PrivateRoute element={TestTakingPage}/>},
    {path: "/test", element: <Test/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},

]);

export default function App() {
    return (
        <>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}