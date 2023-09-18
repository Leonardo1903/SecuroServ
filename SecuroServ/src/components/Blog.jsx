
function Blog() {
return (
    <>
    <section className="w-screen h-fit md:h-screen bg-black py-5">
        <div className="flex justify-between items-center w-11/12 mx-auto h-auto my-auto">
            <h1 className="text-white md:text-4xl">How Fake Profiles Are <span className="text-[#fc5b3f]">Poisoning</span> <br /> the Digital World.</h1>
            <button className="text-white border-[#fc5b3f] py-4 px-8  font-bold border-2 rounded-md h-fit hover:bg-[#fc5b3f] ease-in-out delay-200">Find out more</button>
        </div>
        <div className="w-screen flex flex-col md:flex-row justify-around text-white my-5 space-y-4 md:space-y-0">
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[35rem] bg-[#212224] space-y-4 space-x-3 pb-4 rounded-2xl px-3 py-2  hover:scale-110">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-1.svg" alt="Image" className="mx-auto mr-0 mt-0 " />
                <h1 className="text-4xl font-bold ">Online Fraud</h1>
                <p className="text-xl text-ellipsis">Fake profiles may be involved in various forms of online fraud, including phishing, Ponzi schemes, and online scams that can lead to financial losses.</p>
            </div>
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[35rem] bg-[#212224] space-y-4 space-x-3 pb-4 rounded-2xl px-3 py-2 hover:scale-110">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-2.svg" alt="Image" className="mx-auto mr-0 mt-0 " />
                <h1 className="text-4xl font-bold ">Manipulation and Influence</h1>
                <p className="text-xl">Fake profiles can be used to manipulate public opinion, influence political outcomes, and create artificial trends or viral content.
</p>
            </div>
            <div className="w-[90%] mx-auto md:mx-0 md:w-[25rem] h-[35rem] bg-[#212224] space-y-4 space-x-3 pb-4 rounded-2xl px-3 py-2 hover:scale-110 ">
                <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-object-3.svg" alt="Image" className="mx-auto mr-0 mt-0 " />
                <h1 className="text-4xl  font-bold ">Negative Reviews and Feedback</h1>
                <p className="text-xl">Negative reviews and feedback can harm a business reputation and deter potential customers.</p>
            </div>
        </div>Name
    </section>
    </>
)
}

export default Blog