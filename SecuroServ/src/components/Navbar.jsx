import Logo from "../assets/Logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="w-full h-14 flex justify-between items-center px-5 py-2 bg-[#212224]">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-[#fc5b3f] text-4xl font-bold ml-2">SecuroServ</h1>
        </div>
        <div className="inline-block md:hidden text-xl text-white">
          <i className="fa-solid fa-bars my-auto"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
