import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import HrDashbords from "./Pages/HR/HrDashbords";
import HrPending from "./Pages/HR/HrPending";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import EmployerRequest from "./Pages/Employer/EmployerRequest";
import EmployerNotification from "./Pages/Employer/EmployerNotification";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";
import EmployerProfile from "./Pages/Employer/EmployerProfile";
import EmployerChangePassword from "./Pages/Employer/EmployerChangePassword";
import HrChangePassword from "./Pages/HR/HrChangePassword";
import jwt_decode from "jwt-decode";
import HrCreateEmployer from "./Pages/HR/HrCreateEmployer";
const LoginRoute = () => {
  const isAuthenticated = !!Cookies.get("token");

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Signin />;
};
function App() {
  const token = Cookies.get("token") || "guest";
  const decodedToken = token !== "guest" ? jwt_decode(token) : "guest";
  const role = decodedToken.role;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginRoute />} />
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
          path="/hr-create-employer"
          element={
            role === "hr" ? <HrCreateEmployer /> : <Navigate to="/login" />
          }
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
            ) : role === "hr" ? (
              <HrChangePassword />
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
