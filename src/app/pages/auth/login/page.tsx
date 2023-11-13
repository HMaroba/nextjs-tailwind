"use client";
import { useRouter } from "next/navigation";

export default function Login() {

const router = useRouter();

  const handleLogin = () => {
   router.push('/pages/dashboard');
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="w-full">
              <label
                className="block my-2 text-left  
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

            <div>
              <label
                className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-md block w-full p-2.5"
                required
              />
            </div>

            <div className="text-sm float-right">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="p-2  text-white mt-2 w-full
                                   rounded-lg border-green-600  
                                   bg-green-600 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/pages/auth/Register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create Account now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
