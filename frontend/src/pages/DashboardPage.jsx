import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {

  const user = useSelector((state) => state.auth.user);

  let DashboardComponent;

  switch (user?.role?.toLowerCase()) {
    case 'student':
      DashboardComponent = lazy(() => import("./StudentDashboardPage"));
      break;
    case 'faculty':
      DashboardComponent = lazy(() => import("./FacultyDashboardPage"));
      break;
    case 'hod':
      DashboardComponent = lazy(() => import("./HodDashboardPage"));
      break;
    case 'principal':
      DashboardComponent = lazy(() => import("./PrincipalDashboardPage"));
      break;
    default:
      DashboardComponent = null; // In case the user doesn't have a role, handle accordingly
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        {DashboardComponent ? <DashboardComponent /> : <Navigate to="/not-authorized" />}
      </Suspense>
    </>
  )
}

export default DashboardPage