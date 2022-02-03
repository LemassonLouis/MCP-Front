import {Routes, Route} from "react-router-dom";
import './App.css';
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

function App() {
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/ingredient" element={<Ingredient/>}/>
        <Route path="/ingredient/:id" element={<SelectedIngredient/>}/>
        <Route path="/ingredient/add" element={<AddIngredient/>}/>
        <Route path="/technique" element={<Technique/>}/>
      </Routes>
    </div>
    </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
