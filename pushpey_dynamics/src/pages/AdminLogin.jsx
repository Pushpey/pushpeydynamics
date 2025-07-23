import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

function AdminLogin({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Login failed! Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <BackButton />
      <motion.form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl px-10 py-8 w-96 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-300 drop-shadow-md">
          Admin Login
        </h2>

        <input
          type="email"
          className="w-full p-3 mb-4 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold shadow-lg transition duration-200"
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
}

export default AdminLogin;
