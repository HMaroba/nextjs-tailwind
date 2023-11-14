"use client";

export default function Signin() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="bg-white shadow-2xl rounded-lg flex h-min w-8/12">
          <div className="bg-white w-full min-h-full p-4">
            <p className="text-2xl mb-10">Welcome back</p>
            
{/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
<div className="relative">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
</div> */}
     <div className="w-full">
              <label              className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-md block w-full p-2.5"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="w-full">
              <label className="block my-2 text-left text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  
                 text-sm rounded-md block w-full p-2.5"
                placeholder="Password"
                required
              />
            </div>

            <button
                type="submit"
              
                className="p-2  text-white mt-4 w-full
                                   rounded-lg border-green-600  
                                   bg-blue-500"
              >
                Submit
              </button>
          </div>
          <div className="bg-blue-500 w-full text-white p-10 rounded-l-3xl justify-center">
            <p className="text-2xl">Hello Friends !!!</p>
            <p className="mt-4 text-md">Register with your personal details to use all features</p>
            <button
                type="submit"
              
                className="p-2  text-blue-500 mt-4 w-8/12
                                   rounded-lg border-green-600  
                                   bg-white"
              >
                Register
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
