

import { Navigate } from "react-router-dom";
function ProtectedRoute({ children, allowedRole}) {
  const token = localStorage.getItem('auth_token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/not-authorized" replace />;
  }
  return children;
}

export default ProtectedRoute