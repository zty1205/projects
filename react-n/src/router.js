import Home from './views/home';
import Event from './views/event';

const routes = [
  {
    path: '/',
    element: <Home></Home>,
    key: 'home',
    title: '首页'
  },
  {
    path: '/event',
    element: <Event></Event>,
    key: 'event',
    title: '事件'
  }
];

export default routes;
