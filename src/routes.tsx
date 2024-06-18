import { useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';

import Titlebar from '~view/Titlebar';
import Ask from '~view/Ask';
import Settings from '~view/Settings';

const routes = [
  {
    path: '/titlebar',
    element: <Titlebar />,
  },
  {
    path: '/ask',
    element: <Ask />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/',
    element: <div />,
  },
];

export default () => {
  const go = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');

    if (type) {
      go(`/${type}`);
    }
  }, [location.pathname]);

  return useRoutes(routes);
};