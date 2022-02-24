import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    const auth = localStorage.getItem("token");
    return !auth ? children : <Navigate to="/" replace />
}