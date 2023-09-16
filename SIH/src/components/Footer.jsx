

function Footer() {
return (
    <>
    <footer className="w-screen flex flex-col md:flex-row justify-around bg-[#212224] h-[90%] text-slate-500 py-16 space-y-10 md:space-y-0">
    <div>
        <img src="https://www.indonez.com/html-demo/liquid/img/user/header-logo-6ohuZh.svg" alt="Logo" />
    </div>
    <div className="flex justify-evenly flex-col md:flex-row w-[60%] space-y-10 md:space-y-0">
        <div className="space-y-6">
            <h1 className="text-2xl text-white">MARKETS</h1>
            <ul className="space-y-3 hover: underline-offset-1 ">
                <li><a href="#">Web Platform</a></li>
                <li><a href="#">Trading apps</a></li>
                <li><a href="#">Meta trader 5</a></li>
                <li><a href="#">Compare features</a></li>
            </ul>
        </div>
        <div className="space-y-6">
            <h1 className="text-2xl text-white">ACCOUNT TYPES</h1>
            <ul className="space-y-3">
                <li><a href="#">Demo account</a></li>
                <li><a href="#">Standard account</a></li>
                <li><a href="#">ECN account</a></li>
                <li><a href="#">Islamic account</a></li>
            </ul>
        </div>
        <div className="space-y-6">
            <h1 className="text-2xl text-white">LEARN TO TRADE</h1>
            <ul className="space-y-3">
                <li><a href="#">News and trade ideas</a></li>
                <li><a href="#">Trading strategy</a></li>
                <li><a href="#">Forex trading course</a></li>
                
            </ul>
        </div>
    </div>
    </footer>
    </>
)
}

export default Footer