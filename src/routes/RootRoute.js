import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function RootRouter() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootRouter;
