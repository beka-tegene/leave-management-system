import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  let auth = { token: !!Cookies.get("token") };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
