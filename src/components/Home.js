import React from "react";
import { Link, useNavigate } from "react-router-dom";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "30vh",
  textAlign: "center",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "500px",
  margin: "20px",
};

const buttonStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#525252",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/candidate/registration");
  };

  const handleListClick = () => {
    navigate("/candidate/list");
  };

  return (
    <div data-testid="home-component" style={homeStyle}>
      <div style={buttonContainerStyle}>
        <button data-testid="register-button" style={buttonStyle} onClick={handleRegisterClick}>
          Register Candidate
        </button>
        <button data-testid="list-button" style={buttonStyle} onClick={handleListClick}>
          List Candidates
        </button>
      </div>
    </div>
  );
}

export default Home;
