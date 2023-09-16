

function Stats() {
return (
    <>
        <section className="w-screen h-auto flex-col md:flex-row flex bg-[#212224] px-4 pb-8 md:justify-around items-center space-y-5 md:space-y-0">
        <div className="flex space-x-3">
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-ticker-1.svg" alt="Alphabet Logo" className="w-auto h-auto" />
            <button className="bg-green-600 px-8 py-2 rounded-md flex space-between items-center"> <i className="fa-solid fa-caret-up"></i>1740.05</button>
        </div>
        <div className="flex space-x-3">
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-ticker-2.svg" alt="Alphabet Logo" className="w-auto h-auto" />
            <button className="bg-red-600 px-8 py-2 rounded-md flex space-between items-center"> <i className="fa-solid fa-caret-down"></i>1740.05</button>
        </div>
        <div className="flex space-x-3">
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-ticker-3.svg" alt="Alphabet Logo" className="w-auto h-auto" />
            <button className="bg-green-600 px-8 py-2 rounded-md flex space-between items-center"> <i className="fa-solid fa-caret-up"></i>1740.05</button>
        </div>
        <div className="flex space-x-3">
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-ticker-4.svg" alt="Alphabet Logo" className="w-auto h-auto" />
            <button className="bg-red-600 px-8 py-2 rounded-md flex space-between items-center"> <i className="fa-solid fa-caret-down"></i>1740.05</button>
        </div>
        <div className="flex space-x-3">
            <img src="https://www.indonez.com/html-demo/liquid/img/in-liquid-ticker-5.svg" alt="Alphabet Logo" className="w-auto h-auto" />
            <button className="bg-green-600 px-8 py-2 rounded-md flex space-between items-center"> <i className="fa-solid fa-caret-up"></i>1740.05</button>
        </div>
    </section>
    </>
)
}

export default Stats