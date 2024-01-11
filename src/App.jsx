import { useLocation, Route, Routes } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
