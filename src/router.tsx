import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//importando paginas
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import App from './pages';
import Modulos from './pages/Modulos';
import Curso from './pages/Curso';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/sobre-nos', element: <SobreNos /> },
                { path: '/cursos', element: <Modulos />},
                { path: '/cursos/modulos', element: <Modulos /> },
                { path: '/cursos/modulos/:id', element: <Curso /> }
            ]
        },
    ])

    return <RouterProvider router={router}/>
};

export default Routes;