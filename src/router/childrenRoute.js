import LoginForm from "../components/LoginForm";
import Productos from "../views/Productos";
import Login from '../views/Login'

export const user = [
    {
        path: 'productos',
        element: <Productos />
    },
    {
        path: 'home',
        element: <Productos />
    },
    {
        path: 'home',
        element: <LoginForm />
    },
    {
        path: 'about',
        element: <LoginForm />
    },
    {
        path: 'contacto',
        element: <Login />
    },
]