import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
// import Signup from "./Pages/Signup";
import HrDashbords from "./Pages/HR/HrDashbords";
import HrPending from "./Pages/HR/HrPending";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import EmployerRequest from "./Pages/Employer/EmployerRequest";
import EmployerNotification from "./Pages/Employer/EmployerNotification";
// import NotFound from "./Pages/NotFound";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";
import EmployerProfile from "./Pages/Employer/EmployerProfile";
import EmployerChangePassword from "./Pages/Employer/EmployerChangePassword";
const LoginRoute = () => {
  // Check if the user is already authenticated
  const isAuthenticated = !!Cookies.get("token");

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Signin />;
};
function App() {
  const role = Cookies.get("role") || "guest";
  console.log(role);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginRoute />} />
      {/* <Route path="/register" element={<Signup />} /> */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            role === "hr" ? (
              <HrDashbords />
            ) : role === "user" ? (
              <EmployerDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/hr-pending"
          element={role === "hr" ? <HrPending /> : <Navigate to="/login" />}
        />

        <Route
          path="/employer-request"
          element={
            role === "user" ? <EmployerRequest /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/employer-Notification"
          element={
            role === "user" ? (
              <EmployerNotification />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            role === "user" ? <EmployerProfile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/change-password"
          element={
            role === "user" ? (
              <EmployerChangePassword />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Route>

      <Route
        path="/*"
        element={
          role === "hr" ? (
            <Navigate to="/dashboard" />
          ) : role === "user" ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
