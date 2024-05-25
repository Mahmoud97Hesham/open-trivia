import { lazy } from 'react';

//routes
const Home = lazy(() => import('views/Home'));
const Categories = lazy(() => import('views/Categories'));
const Questions = lazy(() => import('views/Questions'));
const Statistics = lazy(() => import('views/Statistics'));

export { Home, Categories, Questions, Statistics };
