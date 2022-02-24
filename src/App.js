import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import "./App.css";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Ingredient from "./components/Ingredient/Ingredient";
import Technique from "./components/Technique/Technique";
import SelectedIngredient from "./components/Ingredient/SelectedIngredient";
import AddIngredient from "./components/Ingredient/AddIngredient";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Login from "./components/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/Theme/Colors";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Category from "./components/category/Category";
import EditProfile from "./components/Profile/EditProfile";
import EditPwd from "./components/Profile/EditPwd";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("connectedUser"));
    user && setCurrentUser(user);
  }, []);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <div className="App">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/registration"
                element={
                  <PublicRoute>
                    <Registration />
                  </PublicRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id/edit"
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id/edit/password"
                element={
                  <PrivateRoute>
                    <EditPwd />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ingredient"
                element={
                  <PrivateRoute>
                    <Ingredient />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ingredient/:id"
                element={
                  <PrivateRoute>
                    <SelectedIngredient />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ingredient/add"
                element={
                  <PrivateRoute>
                    <AddIngredient />
                  </PrivateRoute>
                }
              />
              <Route
                path="/technique"
                element={
                  <PrivateRoute>
                    <Technique />
                  </PrivateRoute>
                }
              />

              <Route
                path="/categories"
                element={
                  <PrivateRoute>
                    <Category />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
