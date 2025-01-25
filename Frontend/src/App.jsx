import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
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
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}