import React, { useState, useEffect } from "react";
import { FaSmileBeam } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";

const Blog = () => {
  const [loader, setLoader] = useState(false);

  //for loader
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="h-[100vh] bg-gradient-to-r from-pink-200 via-cyan-100 to-cyan-200 dark:bg-none dark:bg-slate-900">
        {loader ? (
          <>
            <div className="h-[90vh] w-full flex justify-center items-center">
              <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                visible={true}
              />
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
