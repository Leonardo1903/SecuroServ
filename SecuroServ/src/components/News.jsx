// function News() {
// return (
//     <>
//     <section className="w-screen mx-8 my-10">
//     <h1 className="text-5xl w-full my-20 font-bold">Stay ahead of the curve</h1>
//     <section className="w-full flex  flex-col md:flex-row space-y-10 md:space-y-0">
//         <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-6 px-4 border-[#fc5b3f] relative">
//             <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
//             <h1 className="text-3xl font-semibold">Wall Street cautious on frothy stocks, warn bitcoin bubble</h1>
//             <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
//             <button className="text-lg">Read More --&gt;</button>
//         </div>
//         <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-4 px-4 border-[#fc5b3f] relative">
//             <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
//             <h1 className="text-3xl font-semibold">Will AUD/USD Hit 0.8000 In The Foreseeable Future?</h1>
//             <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
//             <button className="text-lg">Read More --&gt;</button>
//         </div>
//         <div className="w-[90%] mx-auto md:w-[30%] md:mx-5 border-l-2 space-y-4 px-4 border-[#fc5b3f] relative ">
//             <h2 className="absolute -left-12 text-xl rotate-90 font-semibold bg-white px-5 text-[#FC5B3F]">NEWS</h2>
//             <h1 className="text-3xl font-semibold">How Can You Use Volatility to Your Advantage?</h1>
//             <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, unde.</p>
//             <button className="text-lg">Read More --&gt;</button>
//         </div>
//     </section>
//     </section>
//     </>
// )
// }

// export default News

import { useState, useEffect } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=fakeNews&apiKey=5fb90610b5a8472a8267dcb940abd52b`
        );
        const data = await res.json();
        setArticles(data.articles);
        // Generate a random index to start displaying articles
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setDisplayedArticles(data.articles.slice(randomIndex, randomIndex + 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Generate a new random index and update displayed articles on page refresh
    const randomIndex = Math.floor(Math.random() * articles.length);
    setDisplayedArticles(articles.slice(randomIndex, randomIndex + 4));
  }, [articles]);

  return (
    <section className="w-screen mx-8 my-10">
      <h1 className="text-5xl w-full my-20 font-bold">
        Stay ahead of the curve
      </h1>
      <section className="w-full flex flex-wrap">
        {displayedArticles.map((p) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
            key={p.title}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 hover:cursor-pointer">
              <div className="px-6 py-4 h-[20rem]">
                <div className="font-bold text-xl mb-2">{p.title}</div>
                <p className="text-gray-700 text-base">{p.description}</p>
                <button className="font-bold text-xl mb-2 text-gray py-2">
                  <a href={p.url}>Learn more---&gt;</a>
                </button>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default News;
