import { Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {
  const { children, redirectTo = '/' } = props;

  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
