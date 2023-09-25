import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import MainBill from '../pages/mainBillPage'


export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/allbills',
    element: <MainBill />
  }
]);

export default mainRouter;
