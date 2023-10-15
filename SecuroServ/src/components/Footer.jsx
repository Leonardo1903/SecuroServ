import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
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
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="flex items-center space-x-2"
                >
                  <FaSquareInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href="https://www.facebook.com/login/"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook />
                  <span>Meta (Facebook)</span>
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"
                  className="flex items-center space-x-2"
                >
                  <FaSquareXTwitter />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/login"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl text-white">CREATORS</h1>
            <ul className="space-y-3">
              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/leonardofernandes2/"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Leonardo Fernandes</span>
                </a>
              </li>

              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/agnibha-chakraborty-682339250"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Agnibha Chakraborty</span>
                </a>
              </li>

              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/abhinay-s-bhadauria-a7b588250"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Abhinay Singh Bhaduaria</span>
                </a>
              </li>

              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/syed-kaif-ashraf-774286249"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Syed Kaif Ashraf</span>
                </a>
              </li>

              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/vedant-kanoje-5108b524b"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Vedant Kanoje</span>
                </a>
              </li>

              <li className="hover:text-white">
                <a
                  href="https://www.linkedin.com/in/purnima-sahoo-61a566252"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin />
                  <span>Purnima Sahoo</span>
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
