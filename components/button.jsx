import Link from "next/link";
import Signup from "../pages/signup";
function Button() {
  return (
    <>
      <Link href="/signup">
        <button className="p-4 bg-yellow-400 text-black rounded">
          Start your business journey
        </button>
      </Link>
    </>
  );
}
export default Button;
