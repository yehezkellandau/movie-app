import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import SearchResults from "@/pages/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetails from "@/pages/MovieDetails";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import PrivateRoute from "./privateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:title" element={<SearchResults/>} />
          <Route path="details/:id" element={<MovieDetails/>} />
        <Route path="profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;