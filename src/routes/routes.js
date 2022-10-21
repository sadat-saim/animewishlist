import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hero from "../components/Hero/Hero";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import WishList from "../components/WishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
        loader: async () => {
          return fetch("https://api.jikan.moe/v4/top/anime");
        },
      },
      {
        path: "/anime/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          return fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
