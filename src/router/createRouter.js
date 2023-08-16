import { createBrowserRouter } from 'react-router-dom'
import App from '../views/App'
import Form from '../views/Form'
import Clients from '../views/Clients'
import Login from '../views/Login'
import Landing from '../views/Landing'
import { user } from './childrenRoute'

export const router = createBrowserRouter ([
        {
        path: "/login",
        element: <Login />
        },
        {
        path: "/form",
        element: <Form />
        },
        {
        path: "/clients",
        element: <Clients />
        },
        {
        path: "",
        element: (<Landing />),
        children: user,
        },
])