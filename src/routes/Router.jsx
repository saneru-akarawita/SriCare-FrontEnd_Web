import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/samplePage';


export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default mainRouter;
