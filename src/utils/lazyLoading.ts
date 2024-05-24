import { lazy } from 'react';

//routes
const Home = lazy(() => import('views/Home'));
const Categories = lazy(() => import('views/Categories'));

export { Home, Categories };
