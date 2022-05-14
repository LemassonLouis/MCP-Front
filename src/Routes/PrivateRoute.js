/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:26:11
 * @modify date 2022-04-25 20:26:13
 * @desc [description]
 */
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
}
