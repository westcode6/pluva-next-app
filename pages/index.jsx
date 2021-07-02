import Link from "next/link";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Getstarted from "../components/getstarted";
function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <Getstarted />
    </>
  );
}
export default Home;
