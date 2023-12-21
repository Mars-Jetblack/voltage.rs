import React, { useState } from 'react';
import "./Login.scss";

const LogIn = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Login</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;