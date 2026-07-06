import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage2 from '../assets/bg2.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { fullName, phone, email, password, confirmPassword, terms } = formData;
    
    if (!fullName.trim() || !phone.trim() || !email.trim() || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!terms) {
      setError('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    setError('');
    // Success logic
    localStorage.setItem('user', JSON.stringify({
      username: phone, // using phone as username
      password: password,
      fullName: fullName,
      email: email
    }));
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface relative overflow-x-hidden selection:bg-primary selection:text-on-primary">
      {/* Full-screen Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-4 flex justify-between items-center bg-transparent">
        <div className="font-headline-md text-headline-md font-bold text-white">ACoffeeHouse</div>
        <div className="flex items-center gap-4">
          <span className="text-primary font-semibold font-label-lg text-label-lg cursor-pointer">EN</span>
          <div className="w-px h-4 bg-outline-variant"></div>
          <Link to="/login" className="text-on-surface font-semibold font-label-lg text-label-lg hover:text-primary transition-all">Sign In</Link>
        </div>
      </header>

      {/* Main Content: Glassmorphism Signup Card */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-12 md:py-8">
        <div className="glass-effect w-full max-w-lg rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-300">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container text-on-primary-container rounded-full mb-2 shadow-lg">
              <span className="material-symbols-outlined text-2xl">coffee_maker</span>
            </div>
            <h1 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-on-surface mb-1">Create New Account</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Join ACoffeeHouse to manage your shop professionally.</p>
          </div>

          {/* Signup Form */}
          <form className="space-y-4" onSubmit={handleRegister}>
            {error && (
              <div className="bg-error-container text-on-error-container p-3 rounded-lg text-body-sm font-medium">
                {error}
              </div>
            )}
            
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="fullName">Full Name</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">person</span>
                  <input 
                    className="w-full h-[48px] pl-10 pr-3 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                    id="fullName" 
                    name="fullName" 
                    placeholder="John Doe" 
                    type="text" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="phone">Phone Number</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">call</span>
                  <input 
                    className="w-full h-[48px] pl-10 pr-3 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 234 567" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="email">Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">mail</span>
                <input 
                  className="w-full h-[48px] pl-10 pr-3 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                  id="email" 
                  name="email" 
                  placeholder="example@acoffeehouse.com" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">lock</span>
                  <input 
                    className="w-full h-[48px] pl-10 pr-3 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password" 
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* Password Confirmation */}
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block ml-1" htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">key</span>
                  <input 
                    className="w-full h-[48px] pl-10 pr-3 bg-surface-container-low/50 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    placeholder="••••••••" 
                    type="password" 
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2 py-1">
              <div className="flex items-center h-5">
                <input 
                  className="w-4 h-4 rounded border-outline-variant bg-surface-container text-primary focus:ring-primary cursor-pointer transition-all" 
                  id="terms" 
                  name="terms"
                  type="checkbox" 
                  checked={formData.terms}
                  onChange={handleInputChange}
                />
              </div>
              <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer leading-tight" htmlFor="terms">
                I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms & Conditions</a> and Privacy Policy.
              </label>
            </div>

            {/* Register Button */}
            <div className="space-y-3">
              <button className="w-full h-[48px] bg-primary text-on-primary font-title-sm text-title-sm rounded-lg shadow-lg hover:shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]" type="submit">
                <span>Register Now</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div className="text-center font-body-sm text-on-surface-variant">
                Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
              </div>
            </div>
          </form>

          {/* Language Switcher */}
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-center items-center gap-4">
            <button className="font-label-caps text-label-caps text-outline hover:text-on-surface-variant transition-colors">TIẾNG VIỆT</button>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <button className="font-label-caps text-label-caps text-primary">ENGLISH</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <div className="flex items-center gap-2 bg-surface-container/60 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/30">
          <span className="material-symbols-outlined text-outline text-sm">support_agent</span>
          <span className="font-label-caps text-label-caps text-on-surface">Need help? Contact Support</span>
        </div>
        <div className="text-center md:text-right">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 ACoffeeHouse Systems.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
