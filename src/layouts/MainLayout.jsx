import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="align-elements w-full py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
