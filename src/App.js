import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import HrDashbords from "./Pages/HR/HrDashbords";
import HrPending from "./Pages/HR/HrPending";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import EmployerRequest from "./Pages/Employer/EmployerRequest";
import EmployerNotification from "./Pages/Employer/EmployerNotification";
import NotFound from "./Pages/NotFound";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";
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
      <Route path="/register" element={<Signup />} />
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
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
