import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/kreeti1210")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="  bg-white border border-gray-200 rounded-lg shadow-lg  p-3 text-center">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 sm:w-52 sm:h-52 mt-4 rounded-full mx-auto shadow-md mb-4"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-1">{data.name}</h2>
          <p className="text-gray-600 text-xl">@{data.login}</p>
          <p className="text-sm text-gray-500 mt-2">{data.bio}</p>
          <div className="mt-4 flex flex-row text-center align-center gap-3 justify-center text-gray-700 text space-y-1">
            <p>👥 Followers: {data.followers}</p>
            <p>⭐Public Repos: {data.public_repos}</p>
          </div>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-red-500 text-white rounded-lg mb-4 hover:bg-red-600"
          >
            Visit GitHub
          </a>
        </div>

        <div className="bg-white  rounded-lg  p-6">
          <h3 className="text-2xl text-gray-900  font-bold md:text-4xl mb-4">
            How the GitHub API is used
          </h3>
          <p className=" text-gray-700 md:text-lg md:mb-4">
            We use <code className="bg-gray-100 px-1 rounded">useEffect</code>{" "}
            to perform a side effect—fetching data from the GitHub API. It runs
            once on component mount due to the empty dependency array.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Fetch URL:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded">
                https://api.github.com/users/kreeti1210
              </code>
            </li>
            <li>
              <strong>useState</strong> stores the response data as a JavaScript
              object.
            </li>
            <li>
              Properties like <code> name</code>, <code>bio</code>, and{" "}
              <code>followers</code> are rendered dynamically.
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            This is a great way to integrate real-time public data into your
            React app—ideal for dashboards, portfolios, or learning APIs through
            side projects like RouteX.
          </p>
        </div>
      </div>
    </div>
  );
}
