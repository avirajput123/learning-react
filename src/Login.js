import React, { useState } from 'react';
export default function Login() {
  const [username, usernameSet] = useState('');
  const [password, passwordSet] = useState('');
  const login = () => {
    console.log('login click hua');
    console.log('u=' + username);
    console.log('p=' + password);
  };

  function handelChange1(e) {
    usernameSet(e.target.value);
  }

  function handelChange2(e) {
    passwordSet(e.target.value);
  }
  console.log('function chala');
  return (
    <div className="parent">
      <div>
        <label htmlFor="">Login</label>
      </div>
      <div>
        <input type="text" onChange={handelChange1} placeholder="Username" />
      </div>
      <div>
        <input
          type="password"
          onChange={handelChange2}
          placeholder="Password"
        />
      </div>
      <button onClick={login}>Login</button>
      <p>{username}</p>
      <p>{password}</p>
    </div>
  );
}
