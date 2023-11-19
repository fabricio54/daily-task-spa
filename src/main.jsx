import React from 'react';
import ReactDOM from 'react-dom/client';
// import do estilo global
import { StyleGlobal } from './StyleGlobal.jsx';
// import do modulo de rotas od react-rout-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Card, CardLogin } from './Components/Card/Card.jsx';
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { Codigo } from "./Components/Card/Codigo.jsx";
import { Taske } from './Components/Card/Taske.jsx';
import { Dastboard } from './Pages/Destbord/Destboard.jsx';
import { Section } from './Components/Card/CardStyled.jsx';
import { EditTask } from './Components/Card/EditTask.jsx';
import Cookies from 'js-cookie';
import { EditUserProfile } from './UserProfile/EditarPerfil.jsx'
//import { AuthProvider } from './Context/AuthProvider.jsx';
import { Pontuacao } from './Pages/Pontuacao/pontuacao.jsx';
import { Home } from './Pages/Home/Home.jsx';
const AuthProvider = ({ children }) => {
  return Cookies.get("token") ? children : <CardLogin />;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <CardLogin />
    },
    {
      path: "/Cadastrar",
      element: <Card />
    },
    {
      path: "/Codigo",
      element: <Codigo />
    },
    {
      path: "/dastboard/:msg?",
      element: <AuthProvider path="/dastboard" children={<Dastboard />}></AuthProvider>
    },
    {
      path: "/createtaske",
      element: <AuthProvider path="/createtaske" children={<Taske />}></AuthProvider>
    },
    {
      path: "/editartask/:id",
      element: <AuthProvider path="/editartask/:id" children={<EditTask />}></AuthProvider>,
    },
    {
      path: "/editarperfil",
      element: <AuthProvider path="/editarperfil" children={<EditUserProfile />}></AuthProvider>
    },
    {
      path: "/pontuacao",
      element: <AuthProvider path="/pontuacao" children={<Pontuacao/>}></AuthProvider>
    },
    {
      path: "/home",
      element: <AuthProvider path="/home" children={<Home/>}></AuthProvider>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal></StyleGlobal>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
