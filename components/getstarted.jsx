import Link from "next/link";
import Signup from "../pages/signup";
function Getstarted() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-16 py-10">
        <div className="p-6 bg-yellow-50 shadow-2xl">
          <h1 className="w-20 h-20 flex items-center justify-center text-center bg-white shadow-sm text-gray-600 rounded-full">
            Step 1
          </h1>
          <h2 className="py-3 text-blue-900 font-semibold">
            Create your online store
          </h2>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            nemo sunt architecto reiciendis quis sit voluptatum iusto fugiat
            nostrum neque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam, omnis.
          </p>
          <br />
          <Link href="/signup">
            <a className="p-3 rounded border border-gray-600">Start for free</a>
          </Link>
          <br />
          <br />
        </div>

        <div className="p-6 bg-yellow-50 shadow-2xl">
          <h1 className="w-20 h-20 flex items-center justify-center text-center bg-white shadow-sm text-gray-600 rounded-full">
            Step 1
          </h1>
          <h2 className="py-3 text-blue-900 font-semibold">Verify your store</h2>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            nemo sunt architecto reiciendis quis sit voluptatum iusto fugiat
            nostrum neque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam, omnis.
          </p>

          <button className="p-3 my-3 rounded border border-gray-600">
            Start for free
          </button>
        </div>

        <div className="p-6 bg-yellow-50 shadow-2xl">
          <h1 className="w-20 h-20 flex items-center justify-center text-center bg-white shadow-sm text-gray-600 rounded-full">
            Step 1
          </h1>
          <h2 className="py-3 text-blue-900 font-semibold">
            Set up store for sales
          </h2>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            nemo sunt architecto reiciendis quis sit voluptatum iusto fugiat
            nostrum neque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam, omnis.
          </p>

          <button className="p-3 my-3 rounded border border-gray-600">
            Start for free
          </button>
        </div>
      </section>
    </>
  );
}
export default Getstarted;
