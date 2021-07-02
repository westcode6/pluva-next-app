import Link from "next/link";
import Button from "../components/button";
import Navcontent from "../pages/navcontent";
function Navbar() {
  return (
    <>
      <nav className="flex flex-col md:flex-row  justify-between px-2 md:px-10 py-3 bg-blue-900">
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-2xl text-white font-semibold flex items-center">
            <span className="text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            Pluvastore
          </h1>

          <button className="text-white md:hidden ">
            <Link href="./navcontent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </button>
        </div>

        <ul className="flex flex-col md:flex-row hidden md:block items-center text-blue-100">
          <li className="p-4">
            <Link href="/index">Start Selling</Link>
          </li>
          <li className="p-4">
            <Link href="/about">Market Product</Link>
          </li>
          <li className="p-4">
            <Link href="/index">Manage Product</Link>
          </li>
          <li className="p-4">
            <Link href="/index">Pricing</Link>
          </li>
          <li className="p-4">
            <Link href="/index">Marketplace</Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
