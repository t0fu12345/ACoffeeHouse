import React from 'react';

const Inventory = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex text-on-surface-variant text-label-md font-label-md mb-2 gap-2">
            <span>Inventory</span>
            <span>/</span>
            <span className="text-[#795548]">Material List</span>
          </nav>
          <h1 className="font-headline-lg text-headline-lg text-[#3E2723]">Material Management</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F5F5] border border-[#D7CCC8] rounded-xl font-label-lg text-label-lg text-[#3E2723] hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#3E2723] text-white rounded-xl font-label-lg text-label-lg shadow-md hover:brightness-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Material
          </button>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl flex flex-col justify-between h-32 shadow-sm border border-[#D7CCC8]/30">
          <div className="flex justify-between items-start">
            <span className="font-label-lg text-label-lg text-on-surface-variant">Total Items</span>
            <span className="material-symbols-outlined text-[#795548]">category</span>
          </div>
          <div className="font-pos-num-lg text-pos-num-lg text-[#3E2723] text-3xl font-bold">142</div>
        </div>
        <div className="bg-white p-6 rounded-2xl flex flex-col justify-between h-32 shadow-sm border-l-4 border-l-[#D84315] border-y-[#D7CCC8]/30 border-r-[#D7CCC8]/30">
          <div className="flex justify-between items-start">
            <span className="font-label-lg text-label-lg text-on-surface-variant">Low Stock Alert</span>
            <span className="material-symbols-outlined text-[#D84315]">warning</span>
          </div>
          <div className="font-pos-num-lg text-pos-num-lg text-[#D84315] text-3xl font-bold">8</div>
        </div>
        <div className="bg-white p-6 rounded-2xl flex flex-col justify-between h-32 shadow-sm border border-[#D7CCC8]/30">
          <div className="flex justify-between items-start">
            <span className="font-label-lg text-label-lg text-on-surface-variant">Monthly Consumption</span>
            <span className="material-symbols-outlined text-[#795548]">trending_up</span>
          </div>
          <div className="font-pos-num-lg text-pos-num-lg text-[#3E2723] text-3xl font-bold">+12.4%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl flex flex-col justify-between h-32 shadow-sm border border-[#D7CCC8]/30">
          <div className="flex justify-between items-start">
            <span className="font-label-lg text-label-lg text-on-surface-variant">Pending Orders</span>
            <span className="material-symbols-outlined text-[#795548]">local_shipping</span>
          </div>
          <div className="font-pos-num-lg text-pos-num-lg text-[#3E2723] text-3xl font-bold">3</div>
        </div>
      </div>

      {/* Inventory Table Container */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#D7CCC8]/30">
        <div className="p-6 border-b border-[#D7CCC8]/30 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex bg-[#F5F5F5] rounded-lg p-1">
              <button className="px-4 py-1.5 text-label-lg font-label-lg bg-white shadow-sm rounded-md text-[#3E2723]">All Materials</button>
              <button className="px-4 py-1.5 text-label-lg font-label-lg text-on-surface-variant hover:text-[#3E2723] transition-colors">Low Stock</button>
              <button className="px-4 py-1.5 text-label-lg font-label-lg text-on-surface-variant hover:text-[#3E2723] transition-colors">By Category</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
            <select className="bg-transparent border-none text-label-lg font-label-lg text-[#3E2723] focus:ring-0 cursor-pointer outline-none">
              <option>Current Stock (Low to High)</option>
              <option>Material Name (A-Z)</option>
              <option>Category</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F5F5F5] sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">SKU</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Material Name</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-center">Unit</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-right">Current Stock</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-right">Min. Stock</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D7CCC8]/30">
              {/* Row 1: Low Stock */}
              <tr className="hover:bg-[#F5F5F5]/50 transition-colors group">
                <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">ESP-BNS-001</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="font-title-lg text-title-lg text-[#3E2723] font-bold">House Blend Beans</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-label-md font-label-md">Beans</span>
                </td>
                <td className="px-6 py-4 text-center font-body-md text-body-md">kg</td>
                <td className="px-6 py-4 text-right font-pos-num-lg text-[18px] text-[#D84315] font-bold">12.5</td>
                <td className="px-6 py-4 text-right font-body-md text-body-md">15.0</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-label-md font-label-md">
                      <span className="material-symbols-outlined text-[14px]">error</span>
                      Critical
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2 transition-opacity">
                    <button className="p-2 text-[#795548] hover:bg-[#795548]/10 rounded-lg"><span className="material-symbols-outlined">edit</span></button>
                    <button className="p-2 text-[#3E2723] hover:bg-[#3E2723]/10 rounded-lg"><span className="material-symbols-outlined">history</span></button>
                  </div>
                </td>
              </tr>
              {/* Row 2: Normal Stock */}
              <tr className="hover:bg-[#F5F5F5]/50 transition-colors group">
                <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">MLK-WHL-005</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="font-title-lg text-title-lg text-[#3E2723] font-bold">Whole Milk 3%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-label-md font-label-md">Milk</span>
                </td>
                <td className="px-6 py-4 text-center font-body-md text-body-md">L</td>
                <td className="px-6 py-4 text-right font-pos-num-lg text-[18px] text-[#3E2723] font-bold">48.0</td>
                <td className="px-6 py-4 text-right font-body-md text-body-md">20.0</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-label-md font-label-md">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Healthy
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2 transition-opacity">
                    <button className="p-2 text-[#795548] hover:bg-[#795548]/10 rounded-lg"><span className="material-symbols-outlined">edit</span></button>
                    <button className="p-2 text-[#3E2723] hover:bg-[#3E2723]/10 rounded-lg"><span className="material-symbols-outlined">history</span></button>
                  </div>
                </td>
              </tr>
              {/* Row 3: Low Stock */}
              <tr className="hover:bg-[#F5F5F5]/50 transition-colors group bg-red-50">
                <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">CUP-HOT-12Z</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="font-title-lg text-title-lg text-[#3E2723] font-bold">Paper Cups 12oz</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-[#795548]/10 text-[#795548] text-label-md font-label-md">Disposables</span>
                </td>
                <td className="px-6 py-4 text-center font-body-md text-body-md">pack (100s)</td>
                <td className="px-6 py-4 text-right font-pos-num-lg text-[18px] text-[#D84315] font-bold">2.0</td>
                <td className="px-6 py-4 text-right font-body-md text-body-md">10.0</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-label-md font-label-md">
                      <span className="material-symbols-outlined text-[14px]">error</span>
                      Critical
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2 transition-opacity">
                    <button className="p-2 text-[#795548] hover:bg-[#795548]/10 rounded-lg"><span className="material-symbols-outlined">edit</span></button>
                    <button className="p-2 text-[#3E2723] hover:bg-[#3E2723]/10 rounded-lg"><span className="material-symbols-outlined">history</span></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination placeholder */}
        <div className="px-6 py-4 bg-[#F5F5F5] border-t border-[#D7CCC8]/30 flex justify-between items-center">
          <span className="font-body-md text-on-surface-variant">Showing 1 to 3 of 142 items</span>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="px-3 py-1 rounded bg-[#3E2723] text-white font-bold">1</button>
            <button className="px-3 py-1 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant">2</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="px-3 py-1 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant">15</button>
            <button className="p-2 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
