import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const searchContainerStyle = {
  display: 'flex',
 
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  height: '50vh',
  textAlign: 'center',
};

const searchBoxContainerStyle = {
  display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  marginBottom: '10px',
  marginTop:"80px",
  marginLeft:'100px'
  
};

const searchBoxStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const cardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '300px', // Adjust the maximum width
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '20px', // Increase the bottom margin
};

function CandidateList({ candidates }) {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    setFilteredCandidates(candidates);
  }, [candidates]);

  const handleSearch = () => {
    const filtered = candidates.filter((candidate) =>
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredCandidates(filtered);
  };

  const handleListAll = () => {
    setFilteredCandidates(candidates);
  };

  return (
    <div style={{ ...searchContainerStyle, alignItems: 'center' }}>
      <div style={searchBoxContainerStyle}>
        <input
          type="text"
          placeholder="Search skills"
          value={searchText}
          style={searchBoxStyle}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button style={searchButtonStyle} onClick={handleSearch}>
          Search Button
        </button>
        <button style={listAllButtonStyle} onClick={handleListAll}>
          List All
        </button>
      </div>
      {filteredCandidates.length === 0 ? (
        <p>No candidates found.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '10px',
          }}
        >
          {filteredCandidates.map((candidate) => (
            <ProfileCard key={candidate.name} candidate={candidate} style={cardStyle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CandidateList;
