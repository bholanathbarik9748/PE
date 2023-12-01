import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import ContractUs from "./pages/ContractUs";
import Admin from "./pages/AdminAuth";
import AdminView from "./pages/AdminView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContractUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edit" element={<AdminView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
