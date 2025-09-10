import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/login/Login";
import Layout from "../layout/Layout";
import Products from "../components/ui/products/Products";
import Carts from "../components/ui/carts/Carts";
import Resipes from "../components/ui/resipes/Resipes";
import Users from "../components/ui/users/Users";
import Posts from "../components/ui/posts/Posts";
import Comments from "../components/ui/commments/Comments";
import Todos from "../components/ui/todos/Todos";
import Quotes from "../components/ui/quotes/Quotes";
import NotFound from "../components/ui/notfound/NotFound";
import Dashboard from "../components/ui/dashboard/Dashboard";
const Router = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    } else {
      navigate("/");
    }
  }, [accessToken]);

  return (
    <Routes>
      {accessToken?.length > 50 ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/resipes" element={<Resipes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
};

export default Router;
