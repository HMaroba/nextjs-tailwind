import About from "../about/page";

export default function Pricing() {
  return (
    <>
      <h1 className="text-4xl text-center mt-5 font-semibold">Our Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 w-full p-5 ">
        <div className="mt-4 lg:mt-1 shadow-2xl rounded-md  p-3 hover:shadow-md lg:mr-4 ">
          <h6 className="mt-2 mb-5 font-semibold text-3xl">Startup Trail</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
         
            <button
              type="submit"
              className="rounded-md bg-indigo-600 mt-20 mb-2 px-3 py-2 w-full lg:w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start your trail
            </button>
       
        </div>
        <div className=" mt-4 lg:mt-1 shadow-lg rounded-md p-3 hover:shadow-md lg:mr-4">
          <h6 className="mt-2 mb-5 font-semibold text-3xl">Free Trail</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
          <button
              type="submit"
              className="rounded-md bg-indigo-600 mt-20 px-3 py-2 w-full lg:w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Start your trail
            </button>
        </div>
        <div className="mt-4 lg:mt-1 shadow-lg rounded-md p-3 hover:shadow-md">
          <h6 className="mt-2 mb-5 font-semibold text-3xl">PRO PLAN</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
          <button
              type="submit"
              className="rounded-md bg-indigo-600 mt-20 px-3 py-2 w-full lg:w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start your trail
            </button>
        </div>
      </div>
    </>
  );
}
