import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Using a placeholder or the same bg since the pos HTML had a specific background
// Or I can just omit it and use the default color
import bgImage from '../assets/bg1.png';

const PosTables = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = user && user.role === 'admin';

  return (
    <div className="bg-[#F5F5F5] font-body-md text-on-surface select-none overflow-hidden h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-[#3E2723] text-white flex justify-between items-center w-full px-4 h-14 shadow-md z-50">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md text-white">ACoffeeHouse</span>
          <div className="h-6 w-px bg-white/30 mx-2"></div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-white">Marco Rossi</span>
            <span className="text-[10px] uppercase tracking-widest text-[#D7CCC8] opacity-80">Shift #42 • Barista Mode</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end mr-4">
            <span className="font-pos-num-lg text-[20px] leading-tight text-white">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="text-[10px] text-[#D7CCC8]">
              {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#795548] transition-colors active:scale-95 text-white">
              <span className="material-symbols-outlined">schedule</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-[#795548] text-white px-4 py-2 rounded-lg font-label-lg text-label-lg active:translate-y-px duration-100 hover:brightness-110"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-32 bg-[#3E2723] flex flex-col border-r border-[#D7CCC8]/10 py-6 px-2 gap-4">
          <div className="flex flex-col gap-3">
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#795548]/20 border-l-4 border-[#795548] text-[#795548] transition-colors duration-200">
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>layers</span>
              <span className="font-label-md text-label-md">Floor 1</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl text-[#D7CCC8]/70 hover:bg-[#795548]/10 hover:text-[#D7CCC8] transition-colors duration-200">
              <span className="material-symbols-outlined mb-1">layers</span>
              <span className="font-label-md text-label-md">Floor 2</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl text-[#D7CCC8]/70 hover:bg-[#795548]/10 hover:text-[#D7CCC8] transition-colors duration-200">
              <span className="material-symbols-outlined mb-1">park</span>
              <span className="font-label-md text-label-md">Garden</span>
            </button>
            {isAdmin && (
              <>
                <div className="my-4 border-t border-[#D7CCC8]/10 mx-4"></div>
                <Link to="/admin/dashboard" className="flex flex-col items-center justify-center p-3 rounded-xl text-[#D7CCC8]/40 hover:text-[#D7CCC8] transition-colors duration-200">
                  <span className="material-symbols-outlined mb-1">admin_panel_settings</span>
                  <span className="font-label-md text-label-md text-[10px]">Manager</span>
                </Link>
              </>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 relative">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="w-full h-full bg-cover bg-fixed" style={{ backgroundImage: `url(${bgImage})` }}></div>
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Table Card: Serving */}
            <div className="table-card glass-panel rounded-2xl p-4 shadow-sm border-t-4 border-[#1E88E5] flex flex-col justify-between h-44 cursor-pointer" onClick={() => navigate('/pos/order/1')}>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-pos-num-lg text-[#3E2723] block text-2xl font-bold">T1-01</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-[10px] font-bold uppercase tracking-wider">Serving</span>
                </div>
                <span className="material-symbols-outlined text-[#795548]">coffee</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-1 text-on-surface-variant mb-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span className="text-sm">11:20 AM</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-on-surface-variant">4 Guests</span>
                  <span className="text-xl font-bold text-on-surface">$48.50</span>
                </div>
              </div>
            </div>

            {/* Table Card: Reserved */}
            <div className="table-card glass-panel rounded-2xl p-4 shadow-sm border-t-4 border-[#FDD835] flex flex-col justify-between h-44 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-pos-num-lg text-[#3E2723] block text-2xl font-bold">T1-02</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FDD835]/20 text-[#7F6D00] text-[10px] font-bold uppercase tracking-wider">Reserved</span>
                </div>
                <span className="material-symbols-outlined text-[#7F6D00]">event</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-1 text-on-surface-variant mb-1">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  <span className="text-sm">1:00 PM</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-on-surface-variant">2 Guests</span>
                  <span className="text-sm italic opacity-40">--</span>
                </div>
              </div>
            </div>

            {/* Table Card: Empty */}
            <div className="table-card bg-white/50 border border-[#D7CCC8]/50 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-44 cursor-pointer hover:bg-white hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-pos-num-lg text-on-surface-variant/60 block text-2xl font-bold">T1-03</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Empty</span>
                </div>
                <span className="material-symbols-outlined text-gray-400">check_circle</span>
              </div>
              <div className="mt-auto opacity-30">
                <div className="flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span className="text-sm">--:--</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm">0 Guests</span>
                  <span className="text-xl font-bold">$0.00</span>
                </div>
              </div>
            </div>

            {/* Table Card: Order Ready */}
            <div className="table-card glass-panel rounded-2xl p-4 shadow-md border-t-4 border-[#FB8C00] flex flex-col justify-between h-44 cursor-pointer ring-2 ring-[#FB8C00]/20">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-pos-num-lg text-[#3E2723] block text-2xl font-bold">T1-05</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FB8C00]/10 text-[#FB8C00] text-[10px] font-bold uppercase tracking-wider">Order Ready</span>
                </div>
                <span className="material-symbols-outlined text-[#FB8C00]" style={{ fontVariationSettings: '"FILL" 1' }}>notifications_active</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-1 text-on-surface-variant mb-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span className="text-sm">12:15 PM</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-on-surface-variant">3 Guests</span>
                  <span className="text-xl font-bold text-on-surface">$34.00</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PosTables;
