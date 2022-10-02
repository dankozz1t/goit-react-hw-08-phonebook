import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './Container';
import Loader from './Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AppBar from './AppBar';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authAPI/authSlice';
import { useFetchCurrentUserQuery } from 'redux/auth/authAPI/authAPI';

import 'bootstrap/dist/css/bootstrap.min.css';

const SingupPage = lazy(() => import('../pages/SingupPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const token = useSelector(getToken);
  const { isFetching } = useFetchCurrentUserQuery(null, { skip: !token });

  return (
    <>
      <Container>
        <AppBar />
        {!isFetching && (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PublicRoute redirectTo="/" />}>
                <Route index element={<HomePage />} />
              </Route>

              <Route
                path="/register"
                element={<PublicRoute restricted redirectTo="/phonebook" />}
              >
                <Route index element={<SingupPage />} />
              </Route>

              <Route
                path="/login"
                element={<PublicRoute restricted redirectTo="/phonebook" />}
              >
                <Route index element={<LoginPage />} />
              </Route>

              <Route
                path="/phonebook"
                element={<PrivateRoute redirectTo="/" />}
              >
                <Route index element={<PhonebookPage />} />
              </Route>
            </Routes>
          </Suspense>
        )}
      </Container>

      <ToastContainer autoClose={5000} />
    </>
  );
};
