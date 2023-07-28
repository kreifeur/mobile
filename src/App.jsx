import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etat from "./pages/Etat";
import Sell from "./pages/Sell";
import Home from "./pages/Home";



const App = () => {
  return (
    <div className="w-[100%] h-screen text-sm flex flex-col">
      <div className="w-[100%] h-[10%] bg-blue-500 flex items-center font-bold text-xl  P-1"> KREIFEUR App mobile </div>
      <BrowserRouter>


          {/* les routes */}
          <Routes>
          <Route path="/mobile/" element={<Home />}></Route>
            <Route path="/etat" element={<Etat />}></Route>
            <Route path="/sell" element={<Sell />}></Route>
          </Routes>


      </BrowserRouter>
    </div>
  );
};

export default App;
