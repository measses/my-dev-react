import React, { useState, useEffect } from 'react';

const NewsCards = () => {
  const [articles, setArticles] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=3835b1e5565142299b4da2bad2d9a8cd"
      );
      const newsData = await response.json();
      setArticles(newsData.articles);
    };
  
    fetchNews();

    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 4) % 19); // Her 30 dakikada bir startIndex'i 4 artır
    }, 1800000); // 1800000 ms = 30 dakika

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <div className="flex items-center justify-center mx-20 mt-6 bg-gray-100">
    <div className="grid grid-cols-4 gap-10">
      {articles.slice(0, 4).map((article, index) => (
        <div key={index} className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
          <div className="h-96 w-72">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={article.urlToImage || 'https://plus.unsplash.com/premium_photo-1685283298967-88bdc86e9c40?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={article.title} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white opacity-0 group-hover:opacity-100">{article.title}</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Daha Fazlası</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  );
};

export default NewsCards;
