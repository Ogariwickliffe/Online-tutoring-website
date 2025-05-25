import React, { useState } from 'react';

function PasswordToggle({ password, onChange }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
      <div className="mb-4 relative">
        <input id="password" type={passwordVisible ? 'text' : 'password'} onChange={onChange} placeholder="Password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        <button
          type="button"
          onClick={togglePassword}
          id="eye-icon"
          aria-label="Toggle Password Visibility"
          className="absolute inset-y-0 right-0 px-3 py-2 text-gray-700"
        >
          {passwordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h.01M19.5 12c0 1.93-4 6-7.5 6s-7.5-4.07-7.5-6 4-6 7.5-6 7.5 4.07 7.5 6zM12 8v4l2 2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h.01M19.5 12c0 1.93-4 6-7.5 6s-7.5-4.07-7.5-6 4-6 7.5-6 7.5 4.07 7.5 6zM12 8v4l2 2"
              />
            </svg>
          )}
        </button>
      </div>
  );
}
export default PasswordToggle;