import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const App = () => {

  const DashboardPage = lazy(() => import("./pages/DashboardPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
  const NotAuthorizedPage = lazy(() => import("./pages/NotAuthorizedPage"));

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
