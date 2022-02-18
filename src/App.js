import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Ingredient from "./components/Ingredient/Ingredient";
import Technique from "./components/Technique/Technique";
import SelectedIngredient from "./components/Ingredient/SelectedIngredient";
import AddIngredient from "./components/Ingredient/AddIngredient";
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Login from "./components/Login/Login";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme/Colors"
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./services/Routes/PrivateRoute";
import Category from "./components/category/Category";
// import "antd/dist/antd.css";
// import "antd/dist/antd.min.css";


function App() {
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/" element={
          <PrivateRoute>
            <Home/>
        </PrivateRoute>
        }/>
        <Route path="/profile/:id" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>
        <Route path="/ingredient" element={
          <PrivateRoute>
            <Ingredient/>
          </PrivateRoute>}/>
        <Route path="/ingredient/:id" element={
          <PrivateRoute>
            <SelectedIngredient/>
          </PrivateRoute>
          
        }/>
        <Route path="/ingredient/add" element={
          <PrivateRoute>
            <AddIngredient/>
          </PrivateRoute>
        }/>
        <Route path="/technique" element={
          <PrivateRoute>
            <Technique/>
          </PrivateRoute>
        }/>
        {/* <Route path="/categories" element={<Category />} /> */}
      </Routes>
    </div>
    </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
