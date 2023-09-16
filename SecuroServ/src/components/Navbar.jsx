

function Navbar() {
return (
<>
<nav className="w-screen h-14 flex justify-between px-5 py-2 bg-[#212224] mt">
        <img src="https://www.indonez.com/html-demo/liquid/img/user/header-logo-6ohuZh.svg" alt="Logo" />
        <div className="hidden md:flex space-x-8">
            {/* Create account is replaced by drak/light mode theme changing button */}
            <button className=" px-5 py-auto bg-[#fc5b3f] text-white font-bold rounded-3xl"> Create Account </button>
            <img src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png" alt="Man Logo" className="h-full w-auto" />
        </div>
        <div className="inline-block md:hidden text-xl text-white ">
            <i className="fa-solid fa-bars my-auto"></i>
        </div>
    </nav>
</>
)
}

export default Navbar