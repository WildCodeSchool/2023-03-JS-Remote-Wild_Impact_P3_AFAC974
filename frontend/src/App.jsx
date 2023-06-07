import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import OneImage from "./pages/OneImage";
import Author from "./pages/Author";
import About from "./pages/About";

import UserSubscription from "./pages/UserSubscription";
import UserLogin from "./pages/UserLogin";
import UserProfile from "./pages/UserProfile";
import UserFavourites from "./pages/UserFavourites";

import Admin from "./pages/Admin";

import "./Index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<OneImage />} />
        <Route path="/author" element={<Author />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<UserSubscription />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/favorites" element={<UserFavourites />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
