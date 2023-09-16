import Navbar from "./Navbar"

function Landing() {
return (
    <>
    <Navbar />
    <section className="w-screen h-screen bg-[#212224] flex flex-col md:flex-row justify-around py-20 items-center" >
        <div className="w-full md:w-[40%] space-y-6">
            <h1 className="text-5xl md:text-7xl text-white">Multi regulated Global broker.</h1>
            <h3 className="text-gray-500 text-xl">A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA</h3>
            {/* discover accounts opens form page,  */}
            <button className="text-white border-[#fc5b3f]  py-3 font-bold border-2 rounded-md px-10 animate-bounce w-[95%] md:w-auto mx-auto hover:bg-[#fc5b3f] ease-in-out delay-200"> Discover Accounts </button>
        </div>
        <div>
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-slide-2.svg" alt="Landing image" />
        </div>
    </section>
    </>
)
}

export default Landing