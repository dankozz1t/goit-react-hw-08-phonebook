import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

export default function PrivateRoute(props) {
  const { children, redirectTo = '/' } = props;

  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
