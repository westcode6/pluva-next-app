import Link from "next/link";
import Button from "../components/button";
function Navbar() {
  return (
    <>
      <nav className="flex flex-col md:flex-row  justify-between px-2 md:px-10 py-3">
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-4xl text-blue-800 font-semibold flex">
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

          <button className="text-blue-800">
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
          </button>
        </div>

        <ul className="flex flex-col md:flex-row  items-center hidden md:block">
          <li className="p-4">
            <Link href="/index">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/index">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link href="/index">Register</Link>
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
