import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//importando paginas
import Home from './pages/Home';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
    ])
};