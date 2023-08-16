import React, { useState } from 'react';
import { useLoginMutation } from '../services/user';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white" disabled={isLoading}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;