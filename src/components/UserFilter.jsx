import React from 'react';

const UserFilter = ({ onUserChange }) => {
  const handleSelectChange = (event) => {
    const selectedId = event.target.value ? parseInt(event.target.value) : null;
    onUserChange(selectedId);
  };

  return (
    <div>
      <label htmlFor="userFilter">Filter by User:</label>
      <select id="userFilter" onChange={handleSelectChange}>
        <option value="">All Users</option>
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            User {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(UserFilter);
