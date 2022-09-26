import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {
  const { children, redirectTo = '/', ...routeProps } = props;

  const isLoggedIn = true;

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>
  );
}
