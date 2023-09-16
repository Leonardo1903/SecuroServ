

function Footer() {
return (
    <>
    <footer className="w-screen flex flex-col md:flex-row justify-around bg-[#212224] h-[90%] text-slate-500 py-16 space-y-10 md:space-y-0">
    <div>
        <img src="https://www.indonez.com/html-demo/liquid/img/user/header-logo-6ohuZh.svg" alt="Logo" />
    </div>
    <div className="flex justify-evenly flex-col md:flex-row w-[60%] space-y-10 md:space-y-0">
        <div className="space-y-6">
            <h1 className="text-2xl text-white">ACCOUNT TYPES</h1>
            <ul className="space-y-3 hover: underline-offset-1 ">
                <li><a href="#">Instagram</a></li>
                <li><a href="https://www.facebook.com/">Meta (Facebook)</a></li>
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">Linkdin</a></li>
            </ul>
        </div>
        <div className="space-y-6">
            <h1 className="text-2xl text-white">CREATORS</h1>
            <ul className="space-y-3">
                <li><a href="#">Leonardo Fernandes</a></li>
                <li><a href="#">Agnibha Chakraborty</a></li>
                <li><a href="#">Abhinay Singh Bhaduaria</a></li>
                <li><a href="#">Syed Kaif Ashraf</a></li>
                <li><a href="#">Vedant Kanoje</a></li>
                <li><a href="#">Purnima Sahoo</a></li>
                
            </ul>
        </div>
    </div>
    </footer>
    </>
)
}

export default Footer