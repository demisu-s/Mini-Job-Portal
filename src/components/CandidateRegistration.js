// CandidateRegistration.js
import React, { useState, useEffect } from "react";

const centerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  textAlign: "center",
};

const addSkillButtonStyle = {
  backgroundColor: "#525252",
  border: "1px solid #333",
  color: "white",
  borderRadius: "5px",
  marginLeft: "10px",
  cursor: "pointer",
};

const formBoxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  backgroundColor: "#f5f5f5",
};

const formGroupStyle = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
};

const sharpEdgeButtonStyle = {
  backgroundColor: "#525252",
  border: "1px solid #333",
  padding: "10px 20px",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const skillTagStyle = {
  backgroundColor: "#333",
  color: "white",
  borderRadius: "0",
  padding: "5px 10px",
  margin: "0 5px",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

function CandidateRegistration({ handleRegistration }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skill: "",
    skills: [],
  });

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("candidates");
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  const handleSkillChange = (e) => {
    setFormData({ ...formData, skill: e.target.value });
  };

  const handleAddSkill = () => {
    if (formData.skill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skill],
        skill: "",
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRegistration(formData);

    const newCandidate = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      skills: formData.skills,
    };

    handleRegistration(newCandidate);

    setCandidates([...candidates, newCandidate]);

    setFormData({ name: "", email: "", role: "", skill: "", skills: [] });
  };

  return (
    <div style={centerContainerStyle}>
      <div style={formBoxStyle}>
        <div data-testid="registration-component" style={formBoxStyle}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={inputStyle}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={inputStyle}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
                placeholder="Role"
                required
                style={inputStyle}
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                data-testid="form-input-skill"
                type="text"
                name="skill"
                placeholder="Skill"
                style={inputStyle}
                value={formData.skill}
                onChange={handleSkillChange}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span data-testid="skill-tag" style={skillTagStyle} key={index}>
                  {skill}
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
