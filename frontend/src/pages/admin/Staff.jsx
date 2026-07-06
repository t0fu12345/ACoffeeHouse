import React from 'react';

const Staff = () => {
  return (
    <div className="space-y-8 w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-[#3E2723]">Staff Management</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage employee credentials, roles, and compensation structure.</p>
        </div>
        <button className="bg-[#3E2723] text-white px-6 py-3 rounded-xl font-label-lg text-label-lg flex items-center space-x-2 transition-all duration-200 active:scale-95 shadow-md hover:bg-[#795548]">
          <span className="material-symbols-outlined">person_add</span>
          <span>Add Employee</span>
        </button>
      </div>

      {/* Dashboard Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#D7CCC8]/20 flex items-center justify-center text-[#795548]">
            <span className="material-symbols-outlined">badge</span>
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface-variant">Total Staff</p>
            <p className="text-headline-md font-headline-md text-[#3E2723] text-2xl font-bold">24</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#2E7D32]">
            <span className="material-symbols-outlined">radio_button_checked</span>
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface-variant">Clocked In</p>
            <p className="text-headline-md font-headline-md text-[#2E7D32] text-2xl font-bold">18</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#795548]/10 flex items-center justify-center text-[#795548]">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface-variant">Monthly Payroll</p>
            <p className="text-headline-md font-headline-md text-[#3E2723] text-2xl font-bold">$42.5k</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D7CCC8]/20 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-800">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface-variant">Average Shift</p>
            <p className="text-headline-md font-headline-md text-[#3E2723] text-2xl font-bold">7.5h</p>
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Staff List (Left/Main Column) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-3xl shadow-lg border border-[#D7CCC8]/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-[#D7CCC8]/10 bg-[#F5F5F5]/50 flex justify-between items-center">
              <h3 className="font-title-lg text-title-lg text-[#3E2723]">Employee Directory</h3>
              <div className="flex space-x-2">
                <button className="p-2 rounded-lg hover:bg-[#D7CCC8]/20 text-[#795548] transition-colors"><span className="material-symbols-outlined">filter_list</span></button>
                <button className="p-2 rounded-lg hover:bg-[#D7CCC8]/20 text-[#795548] transition-colors"><span className="material-symbols-outlined">download</span></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F5F5]/30 text-label-lg font-label-lg text-on-surface-variant border-b border-[#D7CCC8]/10">
                    <th className="px-6 py-4">Code</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D7CCC8]/10">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#D7CCC8]/5 transition-colors cursor-pointer group bg-[#D7CCC8]/10">
                    <td className="px-6 py-4 font-label-md text-label-md text-[#795548]">EP-001</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#3E2723] text-[12px] font-bold">JD</div>
                        <span className="font-body-md text-body-md font-semibold text-[#3E2723]">Julianna DeWitt</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+1 (555) 012-3456</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-[#795548]/10 text-[#795548] rounded text-[11px] font-bold uppercase tracking-tight">Manager</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1.5 text-[#2E7D32]">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
                        <span className="text-label-md font-label-md">Active</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="material-symbols-outlined text-[#795548]">chevron_right</span>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-[#D7CCC8]/5 transition-colors cursor-pointer group">
                    <td className="px-6 py-4 font-label-md text-label-md text-[#795548]">EP-004</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#3E2723] text-[12px] font-bold">MT</div>
                        <span className="font-body-md text-body-md font-semibold text-[#3E2723]">Marcus Thorne</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+1 (555) 012-7890</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-[#3E2723]/5 text-on-surface-variant rounded text-[11px] font-bold uppercase tracking-tight">Barista</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1.5 text-[#2E7D32]">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
                        <span className="text-label-md font-label-md">Active</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-[#D7CCC8]/10 flex items-center justify-between">
              <span className="text-label-md font-label-md text-on-surface-variant">Showing 2 of 24 employees</span>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded border border-[#D7CCC8]/30 flex items-center justify-center text-[#795548] disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                <button className="w-8 h-8 rounded border border-[#795548] bg-[#795548] text-white flex items-center justify-center text-label-md font-label-md">1</button>
                <button className="w-8 h-8 rounded border border-[#D7CCC8]/30 flex items-center justify-center text-[#795548] hover:bg-[#D7CCC8]/10 transition-colors text-label-md font-label-md">2</button>
                <button className="w-8 h-8 rounded border border-[#D7CCC8]/30 flex items-center justify-center text-[#795548] hover:bg-[#D7CCC8]/10 transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Detail / Permissions (Right Sidebar) */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-lg border border-[#D7CCC8]/20 p-8 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-[#795548] p-1">
                <div className="w-full h-full rounded-full bg-pink-100 flex items-center justify-center text-[#3E2723] text-2xl font-bold">JD</div>
              </div>
              <span className="absolute bottom-1 right-1 w-5 h-5 bg-[#2E7D32] border-2 border-white rounded-full"></span>
            </div>
            <h4 className="font-headline-md text-headline-md text-[#3E2723] text-xl font-bold">Julianna DeWitt</h4>
            <p className="font-label-lg text-label-lg text-[#795548] mb-6">Manager • ID: EP-001</p>
            <div className="w-full space-y-4 text-left">
              <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#D7CCC8]/10">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Financial Setup</p>
                <div className="flex justify-between items-center">
                  <span className="font-label-lg text-label-lg text-on-surface">Base Salary</span>
                  <span className="font-title-lg text-title-lg text-[#3E2723] font-bold">$4,250.00 <small className="text-body-md font-normal text-on-surface-variant">/mo</small></span>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-3">Role Permissions</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3 text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-[#2E7D32] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Full Inventory Access</span>
                  </li>
                  <li className="flex items-center space-x-3 text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-[#2E7D32] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Refund Authorization</span>
                  </li>
                  <li className="flex items-center space-x-3 text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-[#2E7D32] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Staff Schedule Editing</span>
                  </li>
                  <li className="flex items-center space-x-3 text-body-md text-on-surface opacity-50">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">cancel</span>
                    <span>System Root Settings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 mt-8">
              <button className="py-3 rounded-xl border border-gray-400 text-on-surface-variant font-label-lg text-label-lg hover:bg-[#D7CCC8]/10 transition-colors">Edit Profile</button>
              <button className="py-3 rounded-xl bg-[#795548] text-white font-label-lg text-label-lg hover:brightness-110 transition-all shadow-sm">Manage Role</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
