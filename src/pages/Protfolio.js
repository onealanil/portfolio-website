import React, { useState, useEffect } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineComputer,
  MdOutlineContactPage,
} from "react-icons/md";
import { Quotes } from "../data/Quotes";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaBlogger,
  FaSmileWink,
  FaDownload,
} from "react-icons/fa";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";

const Protfolio = () => {
  const [toggle, setToggle] = useState(localStorage.getItem("theme"));
  const [motivation, setMotivation] = useState("");
  const [khaby, setKhaby] = useState("./image/k1.png");
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(false);

  //for loader
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  //for motivation quotes
  useEffect(() => {
    let random = Math.floor(Math.random() * (Quotes.length - 0 + 0)) + 0;
    setMotivation(Quotes[random]);
  }, []);

  let clickedClass = "clicked";
  let htmlClasses = document.querySelector("html").classList;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    htmlClasses.add(theme);
  } else {
    htmlClasses.add(lightTheme);
  }

  //dark mode and light mode function
  const toggleFunc = (e) => {
    e.preventDefault();
    if (theme === darkTheme) {
      htmlClasses.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      htmlClasses.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
    setToggle(!toggle);
  };

  // toogle image
  const toggleImg = (e) => {
    e.preventDefault();
    let value = khaby;
    if (value === "./image/k1.png") {
      setKhaby("./image/k2.png");
    } else {
      setKhaby("./image/k1.png");
    }
  };

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
            <div className="nav flex justify-end py-1">
              {localStorage && localStorage.getItem("theme") === "dark" ? (
                <MdLightMode
                  size={30}
                  color="yellow"
                  onClick={(e) => toggleFunc(e)}
                  className="mt-1 mr-2 cursor-pointer"
                />
              ) : (
                <MdDarkMode
                  size={30}
                  onClick={(e) => toggleFunc(e)}
                  className="mt-1 mr-2 cursor-pointer"
                />
              )}
            </div>
            {/* for quotes  */}

            <div className="flex justify-center w-full">
              <span className="font-quotes md:text-base dark:text-white">
                &#8220;
              </span>
              <span className=" w-1/2 items-center text-justify cursor-pointer md:w-fit font-quotes pl-1 text-[13px] md:text-base dark:text-white">
                {motivation} &#8221;
              </span>
            </div>

            {/* for photo  */}
            <div className="photo w-full mt-3 flex justify-center">
              <img
                src="./image/profile.jpeg"
                alt="profile"
                className="w-[10rem] rounded-full shadow-lg md:w-[11rem]"
              />
            </div>
            {/* for name  */}
            <div className="name w-full flex justify-center mt-1">
              <span className="font-title text-lg md:text-2xl dark:text-white capitalize">
                Anil Bhandari
              </span>
            </div>
            {/* typewriter effect  */}
            <div className="typewriter flex mt-1 space-x-1 justify-center">
              <span className="font-quotes font-extrabold mt-[2.75px] text-xl text-yellow-600 ">
                I am{" "}
              </span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  typeSpeed: 3,
                }}
                className="font-quotes font-thin"
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      ' <span class="font-title dark:text-white">a full stack web developer</span>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      ' <span class="font-title dark:text-white">an enthusiastic programmer</span>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            {/* logo  */}
            <div className="w-full flex space-x-3 justify-center mt-2">
              <FaFacebook
                color="#4267B2"
                size={35}
                className="cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.facebook.com/aneeel.7642/";
                  return null;
                }}
              />
              <FaInstagramSquare
                color="#fb3958"
                size={35}
                className="cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/anil_oneal12/";
                  return null;
                }}
              />
              <FaGithubSquare
                color="#171515"
                size={35}
                className="cursor-pointer dark:fill-white"
                onClick={() => {
                  window.location.href = "https://github.com/onealanil";
                  return null;
                }}
              />
              <FaYoutubeSquare
                color="#FF0000"
                size={35}
                className="cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/channel/UCS61_Ex1bTqLgLEGaZShhcg";
                  return null;
                }}
              />

              <FaLinkedin
                color="#0072b1"
                size={35}
                className="cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/oneal-bhandari-320682214/";
                  return null;
                }}
              />
              {/* tool tip  */}
              <Tooltip
                position="top-start"
                trigger="mouseenter"
                html={<span>Go to my blog</span>}
                arrow={true}
              >
                <Link to="/blog">
                  <FaBlogger
                    color="#fc4f08"
                    size={35}
                    className="cursor-pointer"
                  />
                </Link>
              </Tooltip>

              {/* section download cv  */}
              <Tooltip
                title="My CV"
                position="top-start"
                trigger="mouseenter"
                arrow={true}
              >
                <MdOutlineContactPage
                  color="green"
                  size={35}
                  className="cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
              </Tooltip>
              {/* section modal dialog box  */}
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                      className="fixed inset-0 w-full h-full bg-black opacity-40"
                      onClick={() => setShowModal(false)}
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg dark:bg-slate-700">
                        <div className="mt-3 sm:flex">
                          <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-slate-100 rounded-full">
                            <FaDownload color="green" />
                          </div>
                          <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                              Wanna know me more ?
                            </h4>
                            <p className="mt-2 text-[15px] leading-relaxed text-gray-500 dark:text-red-200">
                              The resume here, It includes information about me
                              personally, academically, and in terms of my
                              abilities.
                            </p>
                            <div className="items-center gap-2 mt-3 sm:flex">
                              <a
                                href="./asset/cv.pdf"
                                download="AnilBhandariCV.pdf"
                              >
                                <button
                                  className="w-full mt-2 p-2.5 flex-1 text-white bg-green-700 rounded-md outline-none ring-offset-2 ring-green-400 focus:ring-2"
                                  onClick={() => setShowModal(false)}
                                >
                                  Download
                                </button>
                              </a>
                              <button
                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 dark:bg-white ring-red-400 focus:ring-2"
                                onClick={() => setShowModal(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {/* section download cv  */}
            </div>
            {/* hire me  */}
            <div className="hire mt-4 flex justify-center">
              <a
                href={`mailto:khalifaanil84@gmail.com?subject=${
                  "I want to Hire you!" || ""
                }`}
              >
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:bg-none bg-purple-400 text-white py-1 px-2 rounded-lg flex space-x-2">
                  <span className="font-title">Hire Me</span>
                  <MdOutlineComputer className="mt-[4px]" />
                </button>
              </a>
            </div>
            {/* khaby toggle  */}
            <div className="hire mt-4 flex justify-center">
              <button
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:bg-none bg-purple-400 text-white py-1 px-2 rounded-full flex space-x-2"
                onClick={toggleImg}
              >
                <span className="font-title">Ping Me</span>
                <FaSmileWink className="mt-[4px]" color="yellow" />
              </button>
            </div>
            {/* ping me */}
            <div className="ping flex justify-center md">
              <img src={khaby} className="w-[7rem] mt-2 z=0" alt="k1" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Protfolio;
