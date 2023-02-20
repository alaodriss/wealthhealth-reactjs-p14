import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewEmployees from "./pages/ViewEmployees";
import Createemployee from "./pages/CreateEmployee"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createemployee"  element={<Createemployee />} />
          <Route path="/viewemployees"  element={<ViewEmployees />} />
          {/* <Route path="*" element={<Erreur />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
