import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/layout/UserLayout";
import AdminLayout from "./pages/layout/AdminLayout";

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

import WorksAdmin from "./pages/admin/WorksAdmin";
import CategoriesAdmin from "./pages/admin/CategoriesAdmin";

import "./Index.css";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<OneImage />} />
          <Route path="author" element={<Author />} />
          <Route path="about" element={<About />} />
          <Route path="subscription" element={<UserSubscription />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="favourites" element={<UserFavourites />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="works" element={<WorksAdmin />} />
          <Route path="categories" element={<CategoriesAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
