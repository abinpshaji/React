import Home from "./component/pages/home";
import MovieList from "./component/pages/movieList";
import Register from "./component/pages/Register";
import { Route,Routes } from "react-router-dom";
import Navbar from "./component/NavBar";
import { useContext,createContext } from "react";
import DashBoard from "./component/DashBoard";
export const userDetails=createContext()



function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/movies" element={<MovieList/>}/>
  <Route path="/dashboard" element={<DashBoard/>}/>
</Routes>
</>
  )
}

export default App;







import Home from "./component/pages/home.jsx";
import MovieList from "./component/pages/movieList.jsx";
import Register from "./component/pages/register.jsx";
import Navbar from "./component/Navbar.jsx";
import DashBoard from "./component/DashBoard.jsx";