import "../css/Navbar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HeartIocn from "@mui/icons-material/FavoriteBorder";
import crobnbIcon from "../assets/crobnb_icon.svg";
import Language from "../components/Languge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Navbar({
  isDrawerOpen,
  toggleNavbarDrawer,
}: {
  isDrawerOpen: boolean;
  toggleNavbarDrawer: () => void;
}) {
  const navigate = useNavigate();

  function goToTipovi() {
    navigate("/tipovi");
  }

  function goToHome() {
    navigate("/");
  }

  return (
    <AppBar
      sx={{ backgroundColor: "white", zIndex: 1201 }}
      position="fixed"
      elevation={0}
    >
      <Container sx={{ backgroundColor: "white" }} maxWidth="xl">
        <Toolbar>
          <div onClick={goToHome} className="start">
            <img
              src={crobnbIcon}
              alt="Crobnb Icon"
              style={{ width: 24, height: 24 }}
            />
            <h4 className="brand">Crobnb</h4>
          </div>

          <div className="middle">
            <Button onClick={goToTipovi} className="nav-btn" variant="text">
              Tipovi smještaja
            </Button>
            <Button className="nav-btn" variant="text">
              Regije
            </Button>
            <Button className="nav-btn" variant="text">
              Novosti
            </Button>
          </div>

          <div className="end">
            <HeartIocn sx={{ fontSize: 24, color: "#00526C" }} />
            <Language />
            <Button className="nav-btn" variant="text">
              Prijava
            </Button>
          </div>

          <div className="endMobile">
            {isDrawerOpen ? (
              <CloseIcon
                sx={{
                  height: 32,
                  width: 32,
                  cursor: "pointer",
                  color: "#BEC0C5",
                }}
                onClick={toggleNavbarDrawer}
              />
            ) : (
              <MenuIcon
                sx={{
                  height: 32,
                  width: 32,
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={toggleNavbarDrawer}
              />
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
