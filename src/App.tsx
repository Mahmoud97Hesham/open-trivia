import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IRoute } from 'interfaces/routes';
import { routes } from 'routes';
import CircularProgress from 'components/CircularProgress';

function App() {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            position: 'absolute'
          }}
        />
      }
    >
      <Routes>
        {routes.map((route: IRoute, index: number) => {
          return <Route key={index} {...route} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
