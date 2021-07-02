import Button from "../components/button";
function Signup() {
    return <>
    <section className="px-3 my-10">
        <form action="#">
            <h1 className="text-blue-600 font-semibold text-3xl">Create your online store</h1>
            <p className="py-2">Start selling on the go....</p>
            <div className="flex flex-col my-4">
                <label htmlFor="name" className="py-1">Business name:</label>
                <Input />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="name" className="py-1">Email address:</label>
                <Input />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="name">Store name:</label>
                <Input />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="name" className="py-1">Domain name:</label>
                <Input />
            </div>

            <Button />
        </form>
    </section>
    </>
}
export default Signup;


 function Input() {
    return <>
     <input type="text" className="p-2 border border-gray-200 rounded focus:outline-none shadow-sm hover:shadow-md" />

    </>
}