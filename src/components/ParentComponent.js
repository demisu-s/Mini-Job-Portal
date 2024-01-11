import React, { useState } from 'react';
import CandidateRegistration from './CandidateRegistration'; // Adjust the path based on the actual location
import CandidateList from './CandidateList'; // Adjust the path based on the actual location
import Navbar from './Navbar';

function ParentComponent() {
  const [candidates, setCandidates] = useState([]);

  const handleRegistration = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <div>
      
      <CandidateRegistration handleRegistration={handleRegistration} />
      <CandidateList candidates={candidates} />
    </div>
  );
}

export default ParentComponent;
