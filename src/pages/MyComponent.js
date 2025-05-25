import React, { useState } from 'react';

function MyComponent() {
  const [role, setRole] = useState('');
  const [showHighSchoolOptions, setShowHighSchoolOptions] = useState(false);
  const [showCollegeOptions, setShowCollegeOptions] = useState(false);

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowHighSchoolOptions(selectedRole === 'highSchool');
    setShowCollegeOptions(selectedRole === 'college');
  };

  return (
    <div className="mb-4 relative">
      <span className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <select
          id="role"
          value={role}
          onChange={handleRoleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">-- Select --</option>
          <option value="highSchool">Student - High School</option>
          <option value="college">Student - College</option>
          <option value="tutor">Tutor</option>
        </select>
      </span>

      {showHighSchoolOptions && (
        <div id="highSchoolOptions" className="mb-4 relative additional-options">
          <p className="block mb-2 text-sm font-medium text-gray-700">High School Curriculum</p>
          <select
            id="highSchoolCurriculum"
            name="highSchoolCurriculum"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Preferred Curriculum...</option>
            <option value="cambridge">Cambridge Curriculum</option>
            <option value="american">American Curriculum</option>
            <option value="ib">IB Curriculum</option>
            <option value="cbc">CBC/844 Curriculum (Kenya)</option>
          </select>
        </div>
      )}

      {showCollegeOptions && (
        <div id="collegeOptions" className="mb-4 relative additional-options">
          <p className="block mb-2 text-sm font-medium text-gray-700">College Options</p>
          <select
            id="collegeSubject"
            name="collegeSubject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select...</option>
            <option value="mathematics">Mathematics</option>
            <option value="csProgramming">Computer Science & Programming</option>
            <option value="lifeSciences">Life Sciences</option>
            <option value="physics">Physics</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
