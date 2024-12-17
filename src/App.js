import Header from "./com/Header";
import Cards from "./com/Cards";
import Add from "./com/Add";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>}/> 
        <Route path="/add" element={<Add/>}/>       
      </Routes>
    </div>
  );
}

export default App;
