import "./App.css";
import Hero from "./components/Hero/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
