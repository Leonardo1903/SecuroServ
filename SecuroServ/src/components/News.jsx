

function News() {
return (
    <>
    <section className="w-screen mx-8 my-10">
    <h1 className="text-5xl w-full my-20 font-bold">Stay ahead of the curve</h1>
    <section className="w-full flex  flex-col md:flex-row space-y-10 md:space-y-0">
        <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-6 px-4 border-[#fc5b3f] relative">
            <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
            <h1 className="text-3xl font-semibold">Wall Street cautious on frothy stocks, warn bitcoin bubble</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
            <button className="text-lg">Read More --&gt;</button>
        </div>
        <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-4 px-4 border-[#fc5b3f] relative">
            <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
            <h1 className="text-3xl font-semibold">Will AUD/USD Hit 0.8000 In The Foreseeable Future?</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
            <button className="text-lg">Read More --&gt;</button>
        </div>
        <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-4 px-4 border-[#fc5b3f] relative ">
            <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
            <h1 className="text-3xl font-semibold">How Can You Use Volatility to Your Advantage?</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
            <button className="text-lg">Read More --&gt;</button>
        </div>
    </section>
    </section>
    </>
)
}

export default News