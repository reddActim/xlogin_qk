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
            <label htmlFor="username">username:</label>
            <input type="text" required id='username' value={user.first} onChange={(event) => handleInput(event)}></input>
            <br />
            <label htmlFor="password">password:</label>
            <input type="text" required id='password' value={user.last} onChange={(event) => handleInput(event)}></input>
            <br />
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <h3>welcome, user!</h3>
        )}
      </div>
    </>
  );
}

export default App;
