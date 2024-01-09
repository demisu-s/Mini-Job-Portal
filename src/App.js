import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CandidateList from "./components/CandidateList";
import CandidateRegistration from "./components/CandidateRegistration";

function App(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/candidate/registration"
          element={<CandidateRegistration />}
          exact
        />  
        <Route path="/candidate/list" element={<CandidateList />} />
      </Routes>
    </Router>
  );
}

export default App;
