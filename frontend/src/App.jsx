import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/layout/UserLayout";

import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import OneImage from "./pages/OneImage";
import Author from "./pages/Author";
import About from "./pages/About";
import UserSubscription from "./pages/UserSubscription";
import UserLogin from "./pages/UserLogin";
import UserProfile from "./pages/UserProfile";
import UserFavourites from "./pages/UserFavourites";

import AdminLayout from "./pages/layout/AdminLayout";

import Auth from "./pages/admin/Auth";
import WorksAdmin from "./pages/admin/WorksAdmin";
import ArticlesAdmin from "./pages/admin/ArticlesAdmin";
import BiographyAdmin from "./pages/admin/BiographyAdmin";
import CategoriesAdmin from "./pages/admin/CategoriesAdmin";
import TechniquesAdmin from "./pages/admin/TechniquesAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import AboutAdmin from "./pages/admin/AboutAdmin";

import "./Index.css";

function App() {
  return (
    <Router>
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
          <Route path="" element={<WorksAdmin />} />
          <Route path="auth/connexion" element={<Auth />} />
          <Route path="articles" element={<ArticlesAdmin />} />
          <Route path="biography" element={<BiographyAdmin />} />
          <Route path="categories" element={<CategoriesAdmin />} />
          <Route path="techniques" element={<TechniquesAdmin />} />
          <Route path="users" element={<UsersAdmin />} />
          <Route path="about" element={<AboutAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
