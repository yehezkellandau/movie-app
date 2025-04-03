import Layout from "@/layout/layout";
import Home from "@/pages/Home";
import SearchResults from "@/pages/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetails from "@/pages/MovieDetails";
import Login from "@/pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:title" element={<SearchResults/>} />
          <Route path="details/:id" element={<MovieDetails/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;