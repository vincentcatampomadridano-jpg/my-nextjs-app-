
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUsername = "vincent";
  const validPassword = "12345";

  function handleLogin() {

    if (username === "" || password === "") {
      setError("Please fill in all fields.");
    }
    else if (username !== validUsername) {
      setError("Incorrect username.");
    }
    else if (password !== validPassword) {
      setError("Incorrect password.");
    }
    else {
      setError("");
      router.push("/profile");
    }

  }

  return (
    <div>
      <h1>Login Form</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      {error && <p>{error}</p>}

    </div>
  );
}
