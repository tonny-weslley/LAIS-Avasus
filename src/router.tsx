import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//importando paginas
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import App from './pages';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/sobre-nos', element: <SobreNos /> },
            ]
        },
    ])

    return <RouterProvider router={router}/>
};

export default Routes;