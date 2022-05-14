/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:26:18
 * @modify date 2022-04-25 20:26:19
 * @desc [description]
 */
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    const auth = localStorage.getItem("token");
    return !auth ? children : <Navigate to="/" replace />
}