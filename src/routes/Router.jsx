import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';
import Vas from '../pages/valueAddedServices';


export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/valueAddedServices',
    element: <Vas />,
  }
]);

export default mainRouter;
