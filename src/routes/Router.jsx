import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import Vas from '../pages/valueAddedServices';
import MainBill from '../pages/mainBillPage';
import ChatRoom from '../pages/chatRoom';
import Services from '../pages/Services';
import Amount from '../pages/Amount';
import Done from '../pages/Done';

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    path: '/voice-services',
    element: <Services />
  },
  {
    path: '/amount',
    element: <Amount />
  },
  {
    path: '/done',
    element: <Done />
  },
  {
    path: '/valueAddedServices',
    element: <Vas />,
  },

]);

export default mainRouter;
