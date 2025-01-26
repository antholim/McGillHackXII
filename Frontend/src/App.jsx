import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AccountDashboard from "./pages/AccountDashboard.jsx";
import TestTakingPage from './pages/TestTakingPage.jsx'
import Test from './pages/Test.jsx';

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/account', element: <AccountDashboard/>},
    {path: '/test', element: <TestTakingPage/>},
    // {path: "/test", element: <Test/>}

]);

export default function App() {
    return (
        <>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}