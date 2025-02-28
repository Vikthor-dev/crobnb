import Button from "@mui/material/Button/Button";
import Drawer from "@mui/material/Drawer";
import "../css/Navigation.css";
import Language from "../components/Languge";

function Navigation({ isDrawerOpen, toggleNavigationDrawer }: { isDrawerOpen: boolean; toggleNavigationDrawer: () => void }) {
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
          <Button className="navigation-btn" variant="text">
            Tipovi smještaja
          </Button>
          <Button className="navigation-btn" variant="text">
            Regije
          </Button>
          <Button className="navigation-btn" variant="text">
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
