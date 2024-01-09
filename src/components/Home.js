import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  return (
    <div data-testid="home-component" style={homeStyle}>
      <div style={buttonContainerStyle}>
        {/* Hint: Implement this */}
        <button data-testid="register-button" style={buttonStyle}>
          Register Candidate
        </button>
        <button data-testid="list-button" style={buttonStyle}>
          List Candidates
        </button>
      </div>
    </div>
  );
}

export default Home;
