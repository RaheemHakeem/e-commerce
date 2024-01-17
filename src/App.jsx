import { useLocation, Route, Routes } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
