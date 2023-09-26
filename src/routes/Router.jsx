import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import MainBill from '../pages/mainBillPage';
import ChatRoom from '../pages/chatRoom';


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
  }
]);

export default mainRouter;
