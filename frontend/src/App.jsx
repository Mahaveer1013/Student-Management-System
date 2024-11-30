import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Loading from './components/common/Loading';
// import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const DashboardPage = lazy(() => import("./pages/DashboardPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
  const NotAuthorizedPage = lazy(() => import("./pages/NotAuthorizedPage"));

  // const findRole = () => {
  //   const user = useSelector((state) => state.auth.user);

  //   if (!user) {
  //     return null;
  //   }

  //   switch (user?.role?.toLowerCase()) {
  //     case 'student':
  //       return lazy(() => import("./pages/StudentDashboardPage"));
  //     case 'faculty':
  //       return lazy(() => import("./pages/FacultyDashboardPage"));
  //     case 'hod':
  //       return lazy(() => import("./pages/HodDashboardPage"));
  //     case 'principal':
  //       return lazy(() => import("./pages/PrincipalDashboardPage"));
  //     default:
  //       return null; // In case the user doesn't have a role, handle accordingly
  //   }
  // }

  // const DashboardComponent = findRole();

  return (
    <>
      <div className="main w-full h-full">
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>

              <Route path="/" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/not-authorized" element={<NotAuthorizedPage />} />
              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default App;
