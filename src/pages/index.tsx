import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import NavDrawer from "../components/NavDrawer";

const App = () => {
  return (
    <div>
      <Navbar />
      <NavDrawer />
      <Outlet />
    </div>
  );
};

export default App;
