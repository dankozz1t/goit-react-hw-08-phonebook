import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

const PublicRoute = props => {
  const { children, restricted = false, redirectTo = '/' } = props;

  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;
