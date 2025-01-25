import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AccountDashboard from "./pages/AccountDashboard.jsx";
import TestTakingPage from './pages/TestTakingPage.jsx'

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/account', element: <AccountDashboard/>},
    {path: '/testTaking', element: <TestTakingPage/>}

]);

export default function App() {
    return (
        <>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}