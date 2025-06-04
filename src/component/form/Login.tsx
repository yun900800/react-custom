import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>登录</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="用户名" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" />
      <button onClick={handleLogin}>登录</button>
      <p>{message}</p>
    </div>
  );
}
