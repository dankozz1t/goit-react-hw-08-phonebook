import { Route, Navigate } from 'react-router-dom';

const PublicRoute = props => {
  const {
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
  } = props;

  const isLoggedIn = true;
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
};
export default PublicRoute;
