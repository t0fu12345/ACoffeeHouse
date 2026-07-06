import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const navItems = [
    { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/products', icon: 'restaurant_menu', label: 'Menu' },
    { path: '/admin/inventory', icon: 'inventory_2', label: 'Inventory' },
    { path: '/admin/staff', icon: 'badge', label: 'Staff' },
    // Customers and Reports can be added later if needed
    { path: '/admin/customers', icon: 'group', label: 'Customers' },
    { path: '/admin/reports', icon: 'analytics', label: 'Reports' },
  ];

  return (
    <div className="font-body-md text-on-surface bg-[#F5F5F5] min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-[#3E2723] shadow-lg w-64" id="side-nav">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-[#795548] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#D7CCC8]">coffee</span>
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md text-[#D7CCC8]">ACoffeeHouse</h1>
            <p className="font-label-lg text-label-lg text-[#D7CCC8]/70 opacity-80">Manager View</p>
          </div>
        </div>
        <nav className="flex-1 mt-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 space-x-3 rounded-lg transition-colors duration-200 font-label-lg text-label-lg ${
                  isActive
                    ? 'bg-[#795548]/20 border-l-4 border-[#795548] text-[#795548]'
                    : 'text-[#D7CCC8]/70 hover:bg-[#795548]/10 hover:text-[#D7CCC8]'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-6 border-t border-[#D7CCC8]/10 space-y-2">
          <Link to="/admin/settings" className="flex items-center px-4 py-2 space-x-3 rounded-lg text-[#D7CCC8]/70 transition-colors duration-200 hover:bg-[#795548]/10 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          <Link to="/pos" className="flex items-center px-4 py-2 space-x-3 rounded-lg text-[#D7CCC8]/70 transition-colors duration-200 hover:bg-[#795548]/10 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">point_of_sale</span>
            <span>Go to POS</span>
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 space-x-3 rounded-lg text-[#D7CCC8]/70 transition-colors duration-200 hover:bg-red-500/20 hover:text-red-300 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-6 h-16 bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center space-x-6">
            <span className="font-headline-md text-headline-md text-[#3E2723]">ACoffeeHouse Admin</span>
            <div className="hidden md:flex bg-[#f3f3f3] px-3 py-1.5 rounded-full items-center space-x-2 border border-[#d3c3c0]/30">
              <span className="material-symbols-outlined text-[#795548] text-[20px]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-md w-48 font-body-md outline-none" placeholder="Search coffee ..." type="text" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#D7CCC8]/10 transition-all duration-200 active:scale-95 relative">
              <span className="material-symbols-outlined text-[#3E2723]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#D7CCC8]/10 transition-all duration-200 active:scale-95">
              <span className="material-symbols-outlined text-[#3E2723]">settings</span>
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-[#d3c3c0]/30">
              <div className="text-right">
                <p className="font-label-lg text-label-lg text-[#3E2723] leading-tight">Admin User</p>
                <p className="text-[10px] text-[#795548] uppercase tracking-wider font-bold">Root Access</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#795548] bg-gray-300 flex items-center justify-center overflow-hidden">
                 <span className="material-symbols-outlined text-gray-500">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Canvas (Content) */}
        <div className="p-6 max-w-[1440px] mx-auto w-full flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
