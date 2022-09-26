// import { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';

import Container from './Container';
// import Loader from './Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TaskPhonebook from './TaskPhonebook';

// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));

// const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
// const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <>
      <Container>
        <TaskPhonebook />

        {/* ! TODO: FIX BUG WITH REACT ROUTER VERSION   https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
        {/* 
        <Routes>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<HomePage />} />
            </Route>

            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/phonebook" redirectTo="/login">
              <PhonebookPage />
            </PrivateRoute>
          </Suspense>
        </Routes> */}
      </Container>

      <ToastContainer autoClose={5000} />
    </>
  );
};
