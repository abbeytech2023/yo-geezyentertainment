import React from "react";
import { useFetchBlogs } from "../hooks/USEFetchBlogs";

export default function MusicNewsPage() {
  const { blogs } = useFetchBlogs();
  console.log(blogs);

  return (
    <div className="bg-gray-100 min-h-screen py-8 mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
          Latest Music News
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-purple-800 font-semibold text-lg mb-1">
                {news.artist}
              </h3>
              <h2 className="font-bold text-xl mb-2">{news.blogsTitle}</h2>
              <p className="text-gray-600 mb-4">{news.blogsNews}</p>
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
