import Button from "../components/button"
function Header() {
    return <>
    <header className="px-2 md:mx-16 md:mt-7 m-auto grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-xl m-auto text-center md:text-left mt-16">
            <h1 className="text-4xl  md:text-6xl text-indigo-500 font-semibold">Number One eCommerce Platform In Africa</h1>
            <p className="leading-7 py-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum excepturi rerum voluptatum fugit accusamus neque eveniet repellendus quaerat atque repellat quibusdam magnam reprehenderit quia porro soluta assumenda, sunt, fuga inventore!</p>

            <Button />
        </div>

        <div>
            <img src="./images/store.jpg" className="object-cover mt-6"  alt="" />
        </div>
    </header>
    </>
}
export default Header;