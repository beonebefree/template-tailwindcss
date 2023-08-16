import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h2 className="text-2xl mb-4 text-center">Log In</h2>
        <LoginForm />
      </div>
    </div>
    </>
  );
};

export default Login;