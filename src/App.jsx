import { useLocation, Route, Routes } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="flex flex-col space-y-4 mt-4">
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
        <h4>Electronics</h4>
      </div>
    </div>
  );
}

export default App;
