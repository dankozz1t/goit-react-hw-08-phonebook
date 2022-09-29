import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './Container';
import Loader from './Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import TaskPhonebook from './TaskPhonebook';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AppBar from './AppBar';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authAPI/authSlice';
import { useFetchCurrentUserQuery } from 'redux/auth/authAPI/authAPI';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const token = useSelector(getToken);
  useFetchCurrentUserQuery(null, { skip: !token });

  // console.log(token);

  return (
    <>
      <Container>
        <AppBar />
        {/* <TaskPhonebook /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              end
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/phonebook"
              element={
                <PrivateRoute redirectTo="/">
                  <PhonebookPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>

      <ToastContainer autoClose={5000} />
    </>
  );
};
