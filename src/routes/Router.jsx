import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import MainBill from '../pages/mainBillPage';
import ChatRoom from '../pages/chatRoom';
import Vas from '../pages/valueAddedServices';


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
  }
]);

export default mainRouter;
