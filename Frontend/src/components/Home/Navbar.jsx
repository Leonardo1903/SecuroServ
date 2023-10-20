import Logo from "../../assets/Logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="w-full  sticky h-14 flex justify-between items-center px-5 py-2 bg-black ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-[#fc5b3f] text-4xl font-bold ml-2">SecuroServ</h1>
          <div className="mx-[15rem] flex justify-center w-full">
            <ul className="hidden md:flex justify-center text-white text-xl ml-10 ">
              <li className="mr-10 hover:text-[#fc5b3f]">Home</li>
              <li className="mr-10 hover:text-[#fc5b3f]">Problems</li>
              <li className="mr-10 hover:text-[#fc5b3f]">Features</li>
              <li className="mr-10 hover:text-[#fc5b3f]">News</li>
            </ul>
          </div>
        </div>
        <div className="inline-block md:hidden text-xl text-white">
          <i className="fa-solid fa-bars my-auto"></i>
        </div>
      </nav>{" "}
    </>
  );
}

export default Navbar;
