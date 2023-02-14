import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="*" element={<Erreur />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
