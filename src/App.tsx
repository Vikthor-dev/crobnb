import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tipovi from "./pages/Tipovi";
import RegijeFull from "./pages/RegijeFull";
import Novosti from "./pages/Novosti";
import Results from "./pages/Results";
import Error from "./pages/Error";
import SmjestajDetails from "./pages/SmjestajDetails";

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
          <Route path="/regije" element={<RegijeFull/>}></Route>
          <Route path="/novosti" element={<Novosti/>}></Route>
          <Route path="/results" element={<Results/>}></Route>
          <Route path="/details" element={<SmjestajDetails/>}></Route>
          <Route path="*" element={<Error />} />
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
