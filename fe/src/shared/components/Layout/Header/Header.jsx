import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { isAdmin, isUser } from "utils";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <Fragment>
      <nav className="bg-gray-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link className="navbar-brand" to={"/"}>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black  ml-20">
              E Learning Sytem
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleDropDown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border--100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray dark:bg-gray-200 md:dark:bg-gray-900 dark:border-gray-200 mr-20">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  to="/users"
                >
                  Users
                </Link>
              </li>

              {isAdmin() && (
                <Fragment>
                  <li>
                    <Link
                      to="/admin/words"
                      className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    >
                      Word
                    </Link>
                  </li>
                </Fragment>
              )}

              {isUser() && (
                <Fragment>
                  <li>
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                      to="/user/category"
                    >
                      Category
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                      to="/user/profile"
                    >
                      Profile
                    </Link>
                  </li>
                </Fragment>
              )}

              <Link
                className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                to={"/buffer"}
              >
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
