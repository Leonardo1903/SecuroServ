function Features() {
  return (
    <>
      <section className="w-screen py-20 mx-10 space-y-16">
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          <div className="flex w-screen md:w-[40%] space-x-5 ">
            <img
              src="https://www.indonez.com/html-demo/liquid/img/in-liquid-icon-1.svg"
              alt="Image"
              className="w-20 h-20"
            />
            <div className="space-y-2 w-[60%]">
              <h2 className="text-4xl font-semibold">Multi Platform support</h2>
              <p>
                Available on all types of OS and web browser with a simple UI.
              </p>
              <button className="text-gray-500 hover:text-[#fc5b3f]">
                Learn More --&gt;
              </button>
            </div>
          </div>
          <div className="flex w-screen md:w-[40%] space-x-5">
            <img
              src="https://www.indonez.com/html-demo/liquid/img/in-liquid-icon-2.svg"
              alt="Image"
              className="w-20 h-20"
            />
            <div className="space-y-2 w-[60%]">
              <h2 className="text-4xl font-semibold">
                Constantly upgrading and expanding
              </h2>
              <p>
                We are constantly upgrading and expanding our fake news
                detection system, our model is still in an experimental phase
                and we are working on it to make it more accurate.
              </p>
              <button className="text-gray-500 hover:text-[#fc5b3f]">
                Learn More --&gt;
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          <div className="flex w-screen md:w-[40%] space-x-5">
            <img
              src="https://www.indonez.com/html-demo/liquid/img/in-liquid-icon-3.svg"
              alt="Image"
              className="w-20 h-20"
            />
            <div className="space-y-2 w-[60%]">
              <h2 className="text-4xl font-semibold">Free to use</h2>
              <p>
                Our web application is completely open source and free to use.
              </p>
              <button className="text-gray-500 hover:text-[#fc5b3f]">
                Learn More --&gt;
              </button>
            </div>
          </div>
          <div className="flex w-screen md:w-[40%] space-x-5">
            <img
              src="https://www.indonez.com/html-demo/liquid/img/in-liquid-icon-4.svg"
              alt="Image"
              className="w-20 h-20"
            />
            <div className="space-y-2 w-[60%]">
              <h2 className="text-4xl font-semibold">
                User friendly interface
              </h2>
              <p>Our fake detection comes with a user friendly web interface</p>
              <button className="text-gray-500 hover:text-[#fc5b3f]">
                Learn More --&gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
