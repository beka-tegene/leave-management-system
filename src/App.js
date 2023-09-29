import { Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import HrDashbords from "./Pages/HR/HrDashbords";
import HrPending from "./Pages/HR/HrPending";
import HrApproved from "./Pages/HR/HrApproved";
import HrDeclined from "./Pages/HR/HrDeclined";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import EmployerRequest from "./Pages/Employer/EmployerRequest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />

      <Route path="/hr-dashboard" element={<HrDashbords />} />
      <Route path="/hr-pending" element={<HrPending />} />
      <Route path="/hr-approved" element={<HrApproved />} />
      <Route path="/hr-declined" element={<HrDeclined />} />

      <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      <Route path="/employer-request" element={<EmployerRequest />} />
    </Routes>
  );
}

export default App;
