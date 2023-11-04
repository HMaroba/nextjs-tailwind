export default function Pricing() {
  return (
    <>
      <h1 className="text-4xl text-center mt-5 font-semibold">Our Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 w-full lg:space-x-8 p-3 ">
        <div className="h-39 md:h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
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

            className="rounded-md bg-indigo-600 mt-6 px-3 py-2 w-full lg:w-full p-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
        <div className="h-40 md:h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-5 font-semibold text-3xl">Free Trail</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
        </div>
        <div className="h-39 md:h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-5 font-semibold text-3xl">PRO PLAN</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
        </div>
      </div>
    </>
  );
}
