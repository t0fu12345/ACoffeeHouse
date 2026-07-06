import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg1.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate empty fields
    if (!username.trim() || !password.trim()) {
      setError('Please fill in both Username and Password.');
      return;
    }

    setError(''); // Clear error if any

    // Role-based routing logic
    if (username === 'admin' && password === '123') {
      localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
      navigate('/admin/dashboard', { replace: true });
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        // Compare with either username (phone) or email if you want, but for now we used phone as username
        if ((parsedUser.username === username || parsedUser.email === username) && parsedUser.password === password) {
          navigate('/pos', { replace: true });
        } else {
          setError('Invalid username or password.');
        }
      } else {
        setError('Account not found. Please register.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background selection:bg-primary selection:text-on-primary">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Shell */}
      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        {/* Login Card */}
        <div className="glass-effect w-full max-w-[440px] p-8 md:p-10 rounded-xl shadow-2xl transition-all duration-300">
          {/* Brand Identity */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container text-on-primary-container mb-4 shadow-lg">
              <span className="material-symbols-outlined text-4xl">coffee</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">ACoffeeHouse</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Enterprise Management System</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-error-container text-on-error-container p-3 rounded-lg text-body-sm font-medium">
                {error}
              </div>
            )}
            
            {/* Identity Input */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1">Username or Phone</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
                <input 
                  className="w-full h-[52px] pl-12 pr-4 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                  placeholder="Enter your credentials" 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1">Password</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  className="w-full h-[52px] pl-12 pr-12 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                  placeholder="••••••••" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button aria-label="Toggle password visibility" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors" type="button">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-start">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-5 h-5 rounded border-outline-variant bg-surface-container text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
            </div>

            {/* Login Button Area */}
            <div className="space-y-4">
              <button className="w-full h-[56px] bg-primary text-on-primary rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 hover:brightness-110 transition-all active:scale-[0.98] duration-100" type="submit">
                <span>Login to System</span>
                <span className="material-symbols-outlined">login</span>
              </button>
              <div className="text-center font-body-sm text-on-surface-variant">
                Don't have an account? <Link to="/register" className="text-primary font-semibold hover:underline">Sign up</Link>
              </div>
            </div>
          </form>

          {/* Language Switcher */}
          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-center items-center gap-4">
            <button className="font-label-caps text-label-caps text-primary">ENGLISH</button>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <button className="font-label-caps text-label-caps text-outline hover:text-on-surface-variant transition-colors">TIẾNG VIỆT</button>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="relative z-10 w-full px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-surface-container/60 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/30">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(195,204,166,0.6)]"></span>
          <span className="font-label-caps text-label-caps text-on-surface">Server Status: Online</span>
        </div>
        <div className="text-center md:text-right">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 ACoffeeHouse Systems. All rights reserved.</p>
          <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
            <a className="font-label-caps text-label-caps text-outline hover:text-on-surface-variant transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-caps text-label-caps text-outline hover:text-on-surface-variant transition-colors" href="#">Technical Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
