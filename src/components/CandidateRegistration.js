import React, { useState, useEffect } from 'react';

// Base styles for the component
const alertMessage = {
  marginTop: '5px'
}

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red'
}


const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skill: "",
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const highlightInput = true;
  
  const handleSkillChange = (e) => {
  };
  const handleAddSkill = () => {
   
  };

 

  const handleFormSubmit = (e) => {
 
  };


  useEffect(() => {
    const storedCandidates = localStorage.getItem("candidates");
    if (storedCandidates) {
      // Hint: Implement this
    }
  }, []);

  useEffect(() => {
    // Save candidates to localStorage whenever candidates state changes
  }, [candidates]);

  return (
    <div style={centerContainerStyle}>
      <div style={formBoxStyle}>
        <div data-testid="registration-component" style={formBoxStyle}>
          <form onSubmit={handleFormSubmit} >
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={inputStyle}
                data-testid="form-input-name"
               
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                data-testid="form-input-name"
                required
                style={{ ...inputStyle, ...(highlightInput ? highlight : {}) }}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
              
                placeholder="Role"
                required
                style={inputStyle}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                data-testid="form-input-skill"
                type="text"
                name="skill"
                placeholder="Skill"
                style={inputStyle}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span data-testid="skill-tag" style={skillTagStyle}>
                  {/* Implement this */}
                </span>
              ))}
            </div>
            <div style={buttonGroupStyle}>
              <button
                data-testid="submit-btn"
                type="submit"
                style={sharpEdgeButtonStyle}
              >
                Register
              </button>
              <button
                data-testid="reset-btn"
                style={sharpEdgeButtonStyle}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;