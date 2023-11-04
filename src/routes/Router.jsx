import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import MainBill from '../pages/mainBillPage';
import ChatRoom from '../pages/chatRoom';
import Vas from '../pages/valueAddedServices';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import Profile from "../pages/profile.jsx";


export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/valueAddedServices',
    element: <Vas />,
  },
  {
    path: '/allbills',
    element: <MainBill />
  },

  {
    path: '/chat',
    element: <ChatRoom />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
  }
]);

export default mainRouter;
