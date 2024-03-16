import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import "./App.module.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
