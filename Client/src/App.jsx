import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Service } from './Pages/Service';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Error } from './Pages/Error';
import { Logout } from './Pages/Logout';
import { AdminLayout } from './layouts/admin-layout';
import { AdminUsers } from './Pages/AdminUsers';
import { AdminContacts } from './Pages/AdminContacts';
import { AdminServices } from './Pages/AdminServices';
import { AdminUpdate } from './Pages/AdminUpdate';




const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'users', element: <AdminUsers /> },
      { path: 'users/:id/edit', element: <AdminUpdate /> },  // ✅ Add this
      { path: 'contacts', element: <AdminContacts /> },
      { path: 'services', element: <AdminServices /> },

    ],
  },
]);

export const App = () => {
  return  <RouterProvider router={router} />
};