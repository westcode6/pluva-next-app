import Link from "next/link";
import Button from "../components/button";
import Navbar from "../components/navbar";
function Navcontent() {
  return (
    <>
      <div className="bg-white shadow-md h-screen">
        <Navbar />
        <ul className="flex flex-col items-center">
          <li className="p-4 text-red-500">
            <Link href="/">
              <a className="text-red-500">Home</a>
            </Link>
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
      </div>
    </>
  );
}
export default Navcontent;
