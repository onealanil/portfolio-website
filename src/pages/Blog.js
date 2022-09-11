import React from "react";
import { FaSmileBeam } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-r from-pink-200 via-cyan-100 to-cyan-200 dark:bg-none dark:bg-slate-900">
        <div className="nav flex justify-between py-1">
          <Link to="/">
            <MdArrowBackIosNew
              size={25}
              className="dark:text-white mt-1 ml-1 cursor-pointer hover:text-slate-600 dark:hover:text-yellow-300"
            />
          </Link>
        </div>
        <div className="w-full h-[90vh] flex justify-center items-center">
          <span className="mr-3 font-bold md:font-extrabold md:text-2xl dark:text-white">
            Blog is underway , Coming soon ...!{" "}
          </span>
          <FaSmileBeam
            size={50}
            className="text-slate-600 dark:text-yellow-300"
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
