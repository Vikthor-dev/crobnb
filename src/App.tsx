import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tipovi from "./pages/Tipovi";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tipovi" element={<Tipovi/>}></Route>
        </Routes>
        <Navbar isDrawerOpen={drawerOpen} toggleNavbarDrawer={toggleDrawer} />
        <Navigation
          isDrawerOpen={drawerOpen}
          toggleNavigationDrawer={toggleDrawer}
        />
      </div>
    </>
  );
}

export default App;
