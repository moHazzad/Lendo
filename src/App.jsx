import { Outlet } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/mainBody/NavBar";
import SideBar from "./components/sideBar/SideBar";
import NavBar from "./components/mainBody/NavBar";

function App() {
  return (
    <>
      <section className="w-[893px] mx-auto  flex bg-[#fcfcfa] " >
        <SideBar />
        <div className="w-[669.75px]">
          <NavBar />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default App;
