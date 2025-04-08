import Header from "./com/Header";
import Cards from "./com/Cards";
import Add from "./com/Add";
import { Route, Routes } from "react-router-dom";
import Dit from "./com/Dit";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/web-site-movie-" element={<Cards/>}/> 
        <Route path="/add" element={<Add/>}/>   
        <Route path="/detail/:id"   element={<Dit/>}/ >
      </Routes>
    </div>
  );
}

export default App;
