import "../css/Error.css";
import ErrorIcon from "../assets/error.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  function backHome(){
    navigate("/")
  }

  return (
    <div className="error-page">
      <div className="error-div">
        <img src={ErrorIcon} alt="Error" style={{ height: 48, width: 48 }} />
        <p className="error-title">Error 404</p>
        <p className="error-text">
          Žao nam je, ali stranica koju tražite nije pronađena. Moguće je da je
          premještena, izbrisana ili da nikada nije postojala.
        </p>
        <p className="error-text">
          Predlažemo da se vratite na Naslovnu stranicu.
        </p>
        <Button onClick={backHome} className="error-btn" variant="contained">
          Natrag na naslovnu
        </Button>
      </div>
    </div>
  );
}

export default Error;
