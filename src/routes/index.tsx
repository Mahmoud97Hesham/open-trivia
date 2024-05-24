import { IRoute } from 'interfaces/routes';
import { pathnames } from './pathnames';
import * as LazyComponent from 'utils/lazyLoading';

export const routes: IRoute[] = [
  { path: pathnames.HOME, element: <LazyComponent.Home /> },
  { path: '/*', element: <LazyComponent.Home /> }
];
