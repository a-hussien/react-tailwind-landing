import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import NotFound from './components/NotFound';
import Home from './pages/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:
        [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default Router;
