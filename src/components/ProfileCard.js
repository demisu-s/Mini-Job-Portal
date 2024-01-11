import React from 'react';

const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  maxWidth: '300px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '20px',
  marginTop: '20px',
};

const skillButtonStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  margin: '5px',
  display: 'inline-block',
};

function ProfileCard({ candidate }) {
  return (
    <div className="profile-card" style={profileCardStyle}>
      <h4>Role: {candidate.role}</h4>
      <p>Name: {candidate.name}</p>
      <p>Email: {candidate.email}</p>
      <h4>Skills:</h4>
      <div>
        {candidate.skills.map((skill, index) => (
          <button key={index} style={skillButtonStyle}>
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;

