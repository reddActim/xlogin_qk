import './App.css';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleInput = (event) => {
    setUser((prev) => ({ ...prev, [event.target.id]: event.target.value }))
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    if (user.username === "user" && user.password === "password") {
      setSubmitted(true);
      setWrongCredentials(false);
      setUser({    username: "",    password: ""  });
    }
    else {
      setWrongCredentials(true);
    }
  }

  return (
    <>
      <div style={{ padding: "15px" }}>
        <h1 >Login Page</h1>

        {wrongCredentials == true && (
          <p>Invalid username or password</p>
        )}

        {submitted == false ? (
          <form onSubmit={(event) => handleSubmission(event)}>
            <label htmlFor="username">Username</label>
            <input type="text" required id='username' value={user.username} onChange={(event) => handleInput(event)}></input>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" required id='password' value={user.password} onChange={(event) => handleInput(event)}></input>
            <br />
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <h3>Welcome, user</h3>
        )}
      </div>
    </>
  );
}

export default App;
