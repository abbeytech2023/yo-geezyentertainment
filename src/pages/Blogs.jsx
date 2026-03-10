import React from "react";

const musicNews = [
  {
    id: 1,
    artist: "Burna Boy",
    headline: "Burna Boy Announces World Tour 2026",
    description:
      "Afro-fusion superstar Burna Boy is set to hit stages around the globe this year. Fans are thrilled!",
    link: "https://www.bbc.com/news/newsbeat-60505514",
  },
  {
    id: 2,
    artist: "Wizkid",
    headline: "Wizkid Drops New Album ‘Next Wave’",
    description:
      "The Nigerian legend returns with a fresh mix of Afrobeat and global sounds. Critics are loving it.",
    link: "https://www.billboard.com/music/music-news/wizkid-new-album-next-wave-1235198472/",
  },
  {
    id: 3,
    artist: "Tems",
    headline: "Tems Collaborates with Global Artists",
    description:
      "Tems is taking over the international scene with exciting collaborations that blend genres seamlessly.",
    link: "https://www.nme.com/news/music/tems-collaborations-2026-global-3215678",
  },
];

export default function MusicNewsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
          Latest Music News
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-purple-800 font-semibold text-lg mb-1">
                {news.artist}
              </h3>
              <h2 className="font-bold text-xl mb-2">{news.headline}</h2>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
