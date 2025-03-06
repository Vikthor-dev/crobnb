import Button from "@mui/material/Button/Button";
import Drawer from "@mui/material/Drawer";
import "../css/Navigation.css";
import Language from "../components/Languge";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation({
  isDrawerOpen,
  toggleNavigationDrawer,
}: {
  isDrawerOpen: boolean;
  toggleNavigationDrawer: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  function goToTipovi() {
    navigate("/tipovi");
    toggleNavigationDrawer();
  }

  function isActive(path: string) {
    return location.pathname === path;
  }

  function goToRegije() {
    navigate("/regije");
  }

  function goToNovosti() {
    navigate("/novosti");
  }

  return (
    <div>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          zIndex: 1200,
          "& .MuiDrawer-paper": {
            width: "100%",
            marginTop: "80px",
          },
        }}
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleNavigationDrawer}
      >
        <div
          className="navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            alignItems: "center",
          }}
        >
          <Button
            onClick={goToTipovi}
            className="navigation-btn"
            variant="text"
            sx={{
              color: isActive("/tipovi") ? "#337589 !important" : "inherit",
              fontWeight: isActive("/tipovi") ? "700 !important" : "inherit",
            }}
          >
            Tipovi smještaja
          </Button>
          <Button
            onClick={goToRegije}
            sx={{
              color: isActive("/regije") ? "#337589 !important" : "inherit",
              fontWeight: isActive("/regije") ? "700 !important" : "inherit",
            }}
            className="navigation-btn"
            variant="text"
          >
            Regije
          </Button>
          <Button
            sx={{
              color: isActive("/regije") ? "#337589 !important" : "inherit",
              fontWeight: isActive("/novosti") ? "700 !important" : "inherit",
            }}
            onClick={goToNovosti}
            className="navigation-btn"
            variant="text"
          >
            Novosti
          </Button>
          <Button className="navigation-btn" variant="text">
            Favoriti
          </Button>
          <Language />
        </div>
      </Drawer>
    </div>
  );
}

export default Navigation;
