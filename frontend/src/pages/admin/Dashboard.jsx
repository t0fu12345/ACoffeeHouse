import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      {/* Welcome Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-[#3E2723]">Dashboard Overview</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Welcome back. Here's what's brewing today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#d3c3c0]/50 rounded-lg font-label-lg text-on-surface hover:bg-[#f3f3f3] transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
            Last 24 Hours
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#3E2723] text-[#D7CCC8] rounded-lg font-label-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {/* Today's Revenue */}
        <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#795548]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#795548]">payments</span>
            </div>
            <span className="flex items-center text-[#2E7D32] font-label-lg">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              +12.5%
            </span>
          </div>
          <div>
            <p className="text-on-surface-variant font-label-lg">Today's Revenue</p>
            <h3 className="text-3xl font-bold text-[#3E2723] tracking-tight">$4,282.50</h3>
          </div>
        </div>

        {/* Order Count */}
        <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#795548]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#795548]">receipt_long</span>
            </div>
            <span className="flex items-center text-[#2E7D32] font-label-lg">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              +5.2%
            </span>
          </div>
          <div>
            <p className="text-on-surface-variant font-label-lg">Order Count</p>
            <h3 className="text-3xl font-bold text-[#3E2723] tracking-tight">184</h3>
          </div>
        </div>

        {/* New Customers */}
        <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#795548]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#795548]">person_add</span>
            </div>
            <span className="flex items-center text-[#ba1a1a] font-label-lg">
              <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
              -2.1%
            </span>
          </div>
          <div>
            <p className="text-on-surface-variant font-label-lg">New Customers</p>
            <h3 className="text-3xl font-bold text-[#3E2723] tracking-tight">42</h3>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bento-card bg-[#3E2723] p-6 rounded-2xl shadow-md border-none flex flex-col justify-between h-40 group cursor-pointer overflow-hidden relative">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ae8d87]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex justify-between items-start z-10">
            <div className="p-2 bg-[#ae8d87]/20 rounded-lg">
              <span className="material-symbols-outlined text-white">warning</span>
            </div>
            <span className="bg-[#ba1a1a] text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Critical</span>
          </div>
          <div className="z-10">
            <p className="text-[#ae8d87] font-label-lg">Stock Alerts</p>
            <h3 className="text-xl font-bold text-white">8 Items Low</h3>
          </div>
        </div>
      </div>

      {/* Charts & Lists Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 7-Day Revenue Bar Chart (Placeholder) */}
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/10">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline-md text-headline-md text-[#3E2723]">Revenue Overview</h4>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#795548]/10 text-[#795548]">Current Week</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">Previous Week</span>
            </div>
          </div>
          <div className="h-80 w-full relative flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <span className="text-gray-400">Chart Placeholder</span>
          </div>
        </div>

        {/* Revenue by Category Pie Chart (Placeholder) */}
        <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/10">
          <h4 className="font-headline-md text-headline-md text-[#3E2723] mb-8">Revenue Share</h4>
          <div className="h-64 w-full relative mb-6 flex items-center justify-center bg-gray-50 rounded-full border border-dashed border-gray-200 aspect-square">
             <span className="text-gray-400">Pie Chart</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#3E2723]"></span> Espresso Drinks</div>
              <span className="font-bold">48%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#795548]"></span> Pastries</div>
              <span className="font-bold">24%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#D7CCC8]"></span> Cold Brews</div>
              <span className="font-bold">18%</span>
            </div>
          </div>
        </div>

        {/* Top Sellers List */}
        <div className="lg:col-span-6 bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-headline-md text-headline-md text-[#3E2723]">Best Selling Products</h4>
            <Link to="/admin/products" className="text-sm text-[#795548] font-bold hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-xl">
              <div className="flex items-center gap-4">
                <span className="font-display-lg text-lg text-[#D7CCC8]/60">01</span>
                <div>
                  <p className="font-bold text-[#3E2723]">Signature Caramel Macchiato</p>
                  <p className="text-xs text-on-surface-variant">Hot Drinks • 482 sales</p>
                </div>
              </div>
              <span className="font-pos-num-lg text-sm text-[#3E2723]">$2,313</span>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-[#F5F5F5]/50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-display-lg text-lg text-[#D7CCC8]/60">02</span>
                <div>
                  <p className="font-bold text-[#3E2723]">Butter Croissant</p>
                  <p className="text-xs text-on-surface-variant">Pastries • 321 sales</p>
                </div>
              </div>
              <span className="font-pos-num-lg text-sm text-[#3E2723]">$1,284</span>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-[#F5F5F5]/50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-display-lg text-lg text-[#D7CCC8]/60">03</span>
                <div>
                  <p className="font-bold text-[#3E2723]">Nitrogen Cold Brew</p>
                  <p className="text-xs text-on-surface-variant">Cold Drinks • 284 sales</p>
                </div>
              </div>
              <span className="font-pos-num-lg text-sm text-[#3E2723]">$1,136</span>
            </div>
          </div>
        </div>

        {/* Top Staff & Alerts */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/10 flex-1">
            <h4 className="font-headline-md text-headline-md text-[#3E2723] mb-6">Efficiency Leaderboard</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E7D32] bg-gray-200">
                  </div>
                  <div>
                    <p className="font-bold text-[#3E2723]">Sarah Jenkins</p>
                    <div className="flex items-center text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#2E7D32] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      98.2% order accuracy
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-pos-num-lg text-sm text-[#3E2723]">142 orders</p>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">Shift Lead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/10">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline-md text-headline-md text-[#3E2723]">Inventory Warnings</h4>
              <span className="px-2 py-1 bg-[#ba1a1a]/10 text-[#ba1a1a] text-xs font-bold rounded">8 Priority</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 border border-[#D7CCC8]/20 rounded-xl bg-[#f3f3f3]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#ba1a1a]/10 rounded-lg text-[#ba1a1a]">
                  <span className="material-symbols-outlined">inventory</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-[#3E2723]">Ethiopian Sidamo Beans</p>
                  <div className="w-full bg-[#D7CCC8]/30 h-1.5 rounded-full mt-1">
                    <div className="bg-[#ba1a1a] h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#ba1a1a]">2.5kg Left</p>
                  <p className="text-[10px] text-on-surface-variant">Reorder Suggestion: 25kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
