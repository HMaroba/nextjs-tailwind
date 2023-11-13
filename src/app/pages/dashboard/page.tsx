"use client";

import Table from "../table/page";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Users</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Products</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Sales</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-5">
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Users</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Users</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
        <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="p-5 text-white">
            <h6 className="text-xl">Total Users</h6>
            <h6 className="text-xl">9000.00</h6>
          </div>
        </div>
      </div>
      <div className="h-56 bg-gradient-to-r from-cyan-500 to-blue-500 w-full mt-5">
        
      </div>
    </>
  );
}
