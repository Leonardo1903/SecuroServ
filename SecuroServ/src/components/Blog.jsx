

function Blog() {
return (
    <>
    <section className="w-screen h-fit md:h-screen bg-black py-5">
        <div className="flex justify-between items-center w-11/12 mx-auto h-auto my-auto">
            <h1 className="text-white md:text-4xl">Save time. Get <span className="text-[#fc5b3f]">higher return</span>. <br /> Multiply wealth.</h1>
            <button className="text-white border-[#fc5b3f] py-4 px-8  font-bold border-2 rounded-md h-fit hover:bg-[#fc5b3f] ease-in-out delay-200">Find out more</button>
        </div>
        <div className="w-screen flex flex-col md:flex-row justify-around text-white my-5 space-y-4 md:space-y-0">
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[30rem] bg-[#212224] space-y-5 space-x-3 pb-4 rounded-md">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-1.svg" alt="Image" className="mx-auto mr-0 mt-0" />
                <h1 className="text-4xl font-bold ">Various assets</h1>
                <p className="text-xl">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[30rem] bg-[#212224] space-y-5 space-x-3 pb-4 rounded-md">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-2.svg" alt="Image" className="mx-auto mr-0 mt-0" />
                <h1 className="text-4xl font-bold ">Market analysis</h1>
                <p className="text-xl">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[30rem] bg-[#212224] space-y-5 space-x-3 pb-4 rounded-md">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-3.svg" alt="Image" className="mx-auto mr-0 mt-0" />
                <h1 className="text-4xl font-bold ">Enhanced tools</h1>
                <p className="text-xl">Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>Name
    </section>
    </>
)
}

export default Blog