import React, { useState } from "react";
import { AuthService } from "../helper/AuthService";

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function loginHandler() {
    const service = new AuthService();
    try {
      const loginResult = await service.login(username, password);
      console.log(loginResult);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};
