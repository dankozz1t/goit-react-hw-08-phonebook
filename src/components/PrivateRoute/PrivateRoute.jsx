import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

export default function PrivateRoute(props) {
  const { redirectTo = '/' } = props;

  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
