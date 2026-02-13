import "./App.css";
import Header from "../Components/Header.jsx";
import Home from "../Components/Home.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
