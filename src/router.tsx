import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//importando paginas
import Home from './pages/Home';
import Modulos from './pages/Modulos';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/modulos',
            element: <Modulos />,
        },
    ])

    return <RouterProvider router={router}/>
};

export default Routes;