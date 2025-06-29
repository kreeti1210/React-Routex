import { Link, NavLink } from "react-router-dom";
import React from "react";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  sm:py-24 mx-auto sm:px-6 lg:px-8">
          <h1 className="text-right text-4xl sm:text-6xl font-bold">
            React RouteX
          </h1>
          <div className="max-w-xl sm:mt-1  space-y-8 text-center sm:text-right sm:ml-auto">
            <span className="hidden sm:block text-1xl text-gray-500 mb-4 ">
              <p>Navigate smoothly through pages with React Router.</p>
            </span>
          </div>
          <div className="max-w-xl sm:mt-10 text-center sm:text-right  sm:ml-auto">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-4xl">
              Download Now
            </h2>
            <div className="max-w-xl  text-center sm:text-right sm:ml-auto">
              <span className="hidden sm:block text-1xl text-sm text-gray-500 mb-3 ">
                <p>Available Globally at PlayStore and AppleStore.</p>
              </span>
            </div>
            <div className="flex gap-3 align-right justify-end">
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-red-500 rounded-lg hover:opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-red-500 rounded-lg hover:opacity-75"
                to="/about"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Know More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-155 p-15 outline-6 outline-black shadow-md rounded-lg ml-2"
            src="/src/assets/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20 sm:mb-20">
        <h3 className="text-5xl font-bold text-gray-900 sm:text-5xl">
          <p className="text-5xl font-bold text-gray-900 sm:text-5xl">
            Let's dive in!
          </p>
        </h3>
        <p className="text-sm text-gray-500 sm:text-xl mt-3">
          RouteX is an application that help you learn about different concepts
          of Routing in React.
        </p>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              &lt;Route&gt;
            </h2>
            <p className="text-gray-600 mb-4">
              Defines a mapping between a URL path and the component to render.
              It accepts a `path` and an `element` prop.
            </p>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              &lt;Link&gt;
            </h2>
            <p className="text-gray-600 mb-4">
              Used for client-side navigation. It behaves like an anchor tag but
              prevents full page reloads and allows for smooth transitions.
            </p>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600">
              Navigate with Link
            </button>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              useNavigate()
            </h2>
            <p className="text-gray-600 mb-4">
              A React hook that gives you a function to programmatically
              navigate to a different route in your app.
            </p>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Go Somewhere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
