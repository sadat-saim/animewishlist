import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Main from "./layout/Main";
import Details from "./components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
        loader: async () => {
          return fetch("https://api.jikan.moe/v4/anime");
        },
      },
      {
        path: "/anime/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          return fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
        },
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
