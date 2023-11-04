import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import MainBill from '../pages/mainBillPage';
import ChatRoom from '../pages/chatRoom';
import Vas from '../pages/valueAddedServices';

import Service from '../pages/Services';
import Amount from '../pages/Amount';
import Done from '../pages/Done';

import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';



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

    path: '/service',
    element: <Service />
  } 
  ,{
    path: '/amount',
    element: <Amount />
  },
  {
    path: '/done',
    element: <Done />
  },


{
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  }

]);

export default mainRouter;
