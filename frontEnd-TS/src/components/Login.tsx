import React, { useState } from "react";
import { AuthService } from "../helper/AuthService";

const service = new AuthService();

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  async function loginHandler() {
    service.login(username, password);
  }

  async function signUpHandler() {
    service.signUp(username, password, "rossghazi@gmail.com");
  }

  async function confirmSignUpHandler() {
    service.confirmSignUp("rossghazi", "822158");
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

        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <button type="button" onClick={signUpHandler}>
          signUp
        </button>
      </form>

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
          <label htmlFor="code">code:</label>
          <input
            type="password"
            id="password"
            value={code}
            onChange={handleCodeChange}
          />
        </div>

        <button type="button" onClick={confirmSignUpHandler}>
          confirmSignUp
        </button>
      </form>
    </div>
  );
};
