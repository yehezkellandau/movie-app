import Layout from "@/layout/layout";
import Home from "@/pages/Home";
import SearchResults from "@/pages/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetails from "@/pages/MovieDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:title" element={<SearchResults/>} />
          <Route path="details/:id" element={<MovieDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;