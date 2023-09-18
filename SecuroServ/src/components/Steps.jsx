function Steps() {
  return (
    <>
      <section className="w-[80%] md:w-[1182px] mx-auto mb-10 rounded-md border-2 border-[#fc5b3f] text-[#fc5b3f] animate-pulse h-[50%]">
        <div className="w-full flex justify-center">
          <h1 className="text-[#fc5b3f] font-bold text-3xl inline bg-white relative -top-5 px-4">
            Simple steps to start{" "}
          </h1>
        </div>
        <div className="w-[80%] mx-auto flex justify-around font-semibold py-8 flex-col md:flex-row space-y-5 md:space-y-0">
          <div className="flex items-center justify-around flex-col ">
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl border-[#fc5b3f]">
              1
            </div>
            Enter Details
          </div>
          <div className="flex items-center justify-around flex-col ">
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl border-[#fc5b3f]">
              2
            </div>
            Hit Enter
          </div>
          <div className="flex items-center justify-around flex-col ">
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl border-[#fc5b3f]">
              3
            </div>
            Get Result
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
