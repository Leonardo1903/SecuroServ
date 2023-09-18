function Footer() {
  return (
    <>
      <footer className="w-screen flex flex-col md:flex-row justify-around bg-[#212224] h-[90%] text-slate-500 py-16 space-y-10 md:space-y-0">
        <div>
          <h1 className="text-[#fc5b3f] text-4xl font-bold">SecuroServ</h1>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row w-[60%] space-y-10 md:space-y-0">
          <div className="space-y-6">
            <h1 className="text-2xl text-white">ACCOUNT TYPES</h1>
            <ul className="space-y-3 hover: underline-offset-1 ">
              <li className="hover:text-white">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.facebook.com/">Meta (Facebook)</a>
              </li>
              <li className="hover:text-white">
                <a href="https://twitter.com/i/flow/login">X (Twitter)</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Linkdin</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl text-white">CREATORS</h1>
            <ul className="space-y-3">
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/leonardo-fernandes-548b12251">
                  Leonardo Fernandes
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/agnibha-chakraborty-682339250">
                  Agnibha Chakraborty
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/abhinay-s-bhadauria-a7b588250">
                  Abhinay Singh Bhaduaria
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/syed-kaif-ashraf-774286249">
                  Syed Kaif Ashraf
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/vedant-kanoje-5108b524b">
                  Vedant Kanoje
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://www.linkedin.com/in/purnima-sahoo-61a566252">
                  Purnima Sahoo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
