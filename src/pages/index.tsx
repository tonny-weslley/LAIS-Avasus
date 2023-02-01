import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavDrawer from "../components/NavDrawer";
import Parceiros from "../components/Parceiros";


const App = () => {
  return (
    <div>
      <Navbar />
      <NavDrawer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
