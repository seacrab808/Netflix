import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Movies from "./pages/movies";
import CallDibs from "./pages/callDibs";
import Login from "./pages/login";
import SignIn from "./pages/signin";
import Change from "./pages/change";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "calldibs",
        element: <CallDibs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/change",
    element: <Change />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
    word-break: keep-all;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #000;
    color: white;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const [isLoading, setLoading] = useState(false);

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <GlobalStyles />
      {isLoading ? "Loading..." : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
