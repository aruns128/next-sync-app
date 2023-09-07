import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './auth/auth';

const Login = () => {
  const { user, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const router = useRouter();

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Email validation
    if (!inputValue) {
      setEmailError('Email is required');
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputValue)
    ) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    // Password validation
    if (!inputValue) {
      setPasswordError('Password is required');
    } else if (inputValue.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else if (!/\d/.test(inputValue)) {
      setPasswordError('Password must contain at least one number');
    } else if (!/[a-zA-Z]/.test(inputValue)) {
      setPasswordError('Password must contain at least one letter');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/manage');
    }
  }, [user])

  const handleLogin = async () => {
    handleEmailChange({ target: { value: email } });
    handlePasswordChange({ target: { value: password } });

    // Check if there are validation errors
    if (!email || !password || emailError || passwordError) {
      return;
    } else {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const userData = await response.json();
          login(userData.data);
          router.push('/manage');
        } else {
          const data = await response.json();
          setLoginError(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        setLoginError('Login failed');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-full sm:w-96 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded w-full p-2"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="border border-gray-300 rounded w-full p-2"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
            {passwordError && (
              <p className="text-red-500">{passwordError}</p>
            )}
          </div>
          <div className="mt-4 flex justify-center items-center ">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Login
            </button>
            {loginError && (
              <p className="text-red-500 mt-2">{loginError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
