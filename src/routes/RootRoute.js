import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootRouter() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootRouter;
