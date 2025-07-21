import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 p-5 bg-white border border-gray-200 rounded-lg shadow-lg ml-10 ">
            <img src="/aboutReactDOM.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12 flex-row justify-end ">
            <h2 className="text-2xl text-gray-900  font-bold md:text-4xl">
              React Router DOM simplifies page navigation
            </h2>
            <p className="mt-6 text-gray-600 ">
              React Router DOM is a powerful library used for handling routing
              in single-page React applications. It enables dynamic, client-side
              navigation without full page reloads, creating a smoother user
              experience.
            </p>
            <p className="mt-4 text-gray-600">
              With components like <code>{`<BrowserRouter>`}</code>,{" "}
              <code>{`<Routes>`}</code>, and <code>{`<Route>`}</code>,
              developers can declaratively map their React components to
              specific URL paths. It also provides useful hooks like{" "}
              <code>useParams</code> and <code>useNavigate</code> for dynamic
              route handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}