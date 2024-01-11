import React from "react";
import { Link, useLocation } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor:"#484848",
 
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#484848",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "40px",
  
};
const linkItStyle={
  display:"flex",
  textDecoration:"none",
  color:"red",
  backgroundColor:"#fff",
  padding:"10px 30px 40px 10px",
  borderRadius:"5px",
  marginLeft:"30px",
  marginRight:"60px",
  cursor:"pointer"
}

const centerHeadingStyle = {
  marginLeft: "625px",
  flex: "1", // Allow it to take up the remaining space
  color:"#fff"
};

function Navbar({ candidateCount }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(location.pathname);

  useLocation().pathname !== currentPage && setCurrentPage(location.pathname);

  return (
    <div style={navbarStyle}>
      <div style={centerHeadingStyle}>
        <h1 className="header-title" data-testid="header-title">
          Job Portal
        </h1>
      </div>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        {currentPage === "/candidate/registration" ? (
          <Link to="/candidate/list" style={linkStyle}>
            Candidate List {candidateCount}
          </Link>
        ) : (
          <Link to="/candidate/registration" style={linkStyle}>
            Candidate Registration
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
