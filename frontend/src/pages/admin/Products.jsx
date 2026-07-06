import React from 'react';

const Products = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header & Action */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-[#3E2723]">Product Management</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Update and manage your cafe's menu offerings.</p>
        </div>
        <button className="h-12 px-6 bg-[#3E2723] text-white rounded-xl font-label-lg text-label-lg flex items-center gap-3 tactile-btn hover:opacity-90">
          <span className="material-symbols-outlined">add_circle</span>
          Add New Product
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-[#D7CCC8]/30 p-4 flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[300px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] border border-[#D7CCC8] rounded-lg focus:ring-2 focus:ring-[#795548] focus:border-[#795548] outline-none font-body-md transition-all" placeholder="Search products by name or SKU..." type="text" />
        </div>
        {/* Category Filter */}
        <div className="relative">
          <select className="appearance-none bg-[#F5F5F5] border border-[#D7CCC8] rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-[#795548] outline-none font-label-lg text-label-lg text-on-surface cursor-pointer min-w-[160px]">
            <option>All Categories</option>
            <option>Espresso Drinks</option>
            <option>Pastries</option>
            <option>Sandwiches</option>
            <option>Retail Beans</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
        </div>
        {/* Status Filter */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] p-1 rounded-lg border border-[#D7CCC8]">
          <button className="px-4 py-1 rounded-md bg-white shadow-sm font-label-lg text-label-lg text-[#3E2723] transition-all">All</button>
          <button className="px-4 py-1 rounded-md font-label-lg text-label-lg text-on-surface-variant hover:text-[#3E2723] transition-all">Active</button>
          <button className="px-4 py-1 rounded-md font-label-lg text-label-lg text-on-surface-variant hover:text-[#3E2723] transition-all">Inactive</button>
        </div>
        {/* Export Action */}
        <button className="p-2 border border-[#D7CCC8] rounded-lg text-on-surface-variant hover:bg-[#F5F5F5] transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined">download</span>
          <span className="font-label-lg text-label-lg">Export</span>
        </button>
      </div>

      {/* Data Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-[#D7CCC8]/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F5F5F5] border-b border-[#D7CCC8]">
              <tr>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Thumbnail</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">SKU</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Product Name</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Category</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Base Price</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant text-center">Status</th>
                <th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D7CCC8]/20">
              {/* Row 1 */}
              <tr className="hover:bg-[#F5F5F5]/50 transition-colors group">
                <td className="px-6 py-3">
                  <div className="w-12 h-12 rounded-lg bg-[#D7CCC8] overflow-hidden border border-outline-variant shadow-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">local_cafe</span>
                  </div>
                </td>
                <td className="px-6 py-3 font-mono text-sm text-on-surface-variant">EP-LAT-01</td>
                <td className="px-6 py-3 font-title-lg text-title-lg text-[#3E2723]">Signature Latte</td>
                <td className="px-6 py-3">
                  <span className="px-3 py-1 bg-[#D7CCC8]/20 text-[#795548] rounded-full text-xs font-bold uppercase tracking-wider">Espresso Drinks</span>
                </td>
                <td className="px-6 py-3 font-pos-num-lg text-label-lg text-[#3E2723]">$4.50</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <div className="relative inline-block w-10 h-5">
                      <input defaultChecked className="hidden peer" id="status-1" type="checkbox" />
                      <label className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 peer-checked:bg-[#2E7D32] rounded-full transition-all duration-300" htmlFor="status-1">
                        <span className="absolute left-0.5 bottom-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-[#795548] hover:bg-[#D7CCC8]/20 rounded-lg transition-colors" title="Edit Product">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="p-2 text-[#ba1a1a] hover:bg-red-100 rounded-lg transition-colors" title="Delete Product">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#F5F5F5]/50 transition-colors group">
                <td className="px-6 py-3">
                  <div className="w-12 h-12 rounded-lg bg-[#D7CCC8] overflow-hidden border border-outline-variant shadow-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">bakery_dining</span>
                  </div>
                </td>
                <td className="px-6 py-3 font-mono text-sm text-on-surface-variant">EP-BAK-14</td>
                <td className="px-6 py-3 font-title-lg text-title-lg text-[#3E2723]">Almond Croissant</td>
                <td className="px-6 py-3">
                  <span className="px-3 py-1 bg-[#D7CCC8]/20 text-[#795548] rounded-full text-xs font-bold uppercase tracking-wider">Pastries</span>
                </td>
                <td className="px-6 py-3 font-pos-num-lg text-label-lg text-[#3E2723]">$3.75</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <div className="relative inline-block w-10 h-5">
                      <input defaultChecked className="hidden peer" id="status-2" type="checkbox" />
                      <label className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 peer-checked:bg-[#2E7D32] rounded-full transition-all duration-300" htmlFor="status-2">
                        <span className="absolute left-0.5 bottom-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-[#795548] hover:bg-[#D7CCC8]/20 rounded-lg transition-colors" title="Edit Product">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="p-2 text-[#ba1a1a] hover:bg-red-100 rounded-lg transition-colors" title="Delete Product">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-[#F5F5F5] border-t border-[#D7CCC8] flex justify-between items-center">
          <span className="font-body-md text-on-surface-variant">Showing 1 to 2 of 48 products</span>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="px-3 py-1 rounded bg-[#3E2723] text-white font-bold">1</button>
            <button className="px-3 py-1 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant">2</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="px-3 py-1 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant">12</button>
            <button className="p-2 rounded hover:bg-[#D7CCC8]/20 text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
