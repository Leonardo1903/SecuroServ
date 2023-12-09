import { useState, useEffect } from "react";

function News() {
  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=fakeNews&apiKey=5fb90610b5a8472a8267dcb940abd52b`
        );
        const data = await res.json();
        shuffleAndDisplayArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const shuffleAndDisplayArticles = (data) => {
    if (data) {
      // Shuffle the articles randomly
      const shuffledData = [...data].sort(() => Math.random() - 0.5);

      // Select the first four articles
      const selectedArticles = shuffledData.slice(0, 4);

      setDisplayedArticles(selectedArticles);
    }
  };

  return (
    <section className="w-screen mx-8 my-10" id="news">
      <h1 className="text-5xl w-full my-20 font-bold">
        Stay ahead of the curve:
      </h1>
      <section className="w-full flex flex-col md:flex-row">
        {displayedArticles.map((p, index) => (
          <div
            key={index}
            className="w-full md:w-[25%] mx-1 mb-6 md:mb-0 border-l-2 px-4 border-[#fc5b3f] transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="absolute -left-6 text-sm rotate-90 font-semibold bg-white px-2 text-[#FC5B3F] mt-4">
              NEWS
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold">{p.title}</h1>
            <p className="text-base md:text-lg mt-2">{p.description}</p>
            <button className="text-base mt-4 hover:text-[#FC5B3F]">
              <a href={p.url}>Read More ---&gt;</a>
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default News;
