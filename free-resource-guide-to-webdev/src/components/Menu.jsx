/* eslint-disable no-unused-vars */
import cssIcon from "../assets/icons/css-icon.png"
import javascriptIcon from "../assets/icons/javascript-icon.png"
import reactIcon from "../assets/icons/react-icon.png"
import htmlIcon from "../assets/icons/html-icon.png"
import projectIcon from "../assets/icons/project-icon.png"
import githubIcon from "../assets/icons/github-icon.png"
import { Link } from "react-router-dom"
import BackgroundImg from "../assets/bg-tablet-pattern.svg"
export default function Menu() {
  return (
    <section className="home relative flex flex-col justify-center min-h-screen px-2 pb-5 ">
      <div className="absolute overflow-hidden flex justify-end top-0 lg:-top-10 right-0 -z-10 mx-auto md:overflow-hidden">
        <img
          src={BackgroundImg}
          alt="image of background"
          className="w-[45rem] translate-x-20 -translate-y-40 lg:translate-x-14 lg:-translate-y-60"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 left-0 -z-10">
        <img
          src={BackgroundImg}
          alt="image of background"
          className="w-[45rem] -translate-x-5 rotate-90 translate-y-4 lg:-translate-x-[30rem] lg:translate-y-0"
        />
      </div>
      <div className="home_heading_main mt-5 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-rose-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Free Resource Guide to Web Development
        </h1>
        <p className="mt-2 text-md italic leading-loose sm:text-md md:text-[1.1rem] md:w-[70%] lg:mt-5 xl:w-[55%]">
          Your gateway to the dynamic world of web development. Here is a free
          extensive resource guide that empowers both beginners and experienced
          developers alike. Free compilation resources from HTML and CSS basics
          to cutting-edge JavaScript frameworks and responsive design. Let your
          curiosity drive your growth as a web developer. Your journey begins
          here.
        </p>
      </div>
      <div className="mt-10 px-2">
        <div className="text-center">
          <h1 className="home_heading text-xl text-rose-800 tracking-wide uppercase font-medium">
            Select Tech Skill
          </h1>
        </div>
        <div className="menu_items max-w-3xl mx-auto place-content-center mt-10 gap-5 text-[#fff] sm:grid-cols-2 md:gap-6">
          <Link
            to="learnhtml"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-red-500 opacity-90 hover:scale-[102%]"
          >
            <img src={htmlIcon} alt="html icon" className="" />
            <h2>HTML</h2>
          </Link>
          <Link
            to="learncss"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-emerald-500 opacity-90 hover:scale-[102%]"
          >
            <img src={cssIcon} alt="css icon" className="" />
            <h2>CSS</h2>
          </Link>
          <Link
            to="learnjavascript"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-orange-500 opacity-90 hover:scale-[102%]"
          >
            <img src={javascriptIcon} alt="javascript icon" className="" />
            <h2>JAVASCRIPT</h2>
          </Link>
          <Link
            to="learnreact"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-fuchsia-500 opacity-90 hover:scale-[102%]"
          >
            <img src={reactIcon} alt="react icon" className="" />
            <h2>REACT</h2>
          </Link>
          <Link
            to="learngitgithub"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-yellow-500 opacity-90 hover:scale-[102%]"
          >
            <img src={githubIcon} alt="github icon" className="" />
            <h2>GIT & GITHUB</h2>
          </Link>
          <Link
            to="projects"
            className="flex gap-2 flex-col justify-center items-center rounded-md h-28 cursor-pointer bg-black opacity-90 hover:scale-[102%] text-white"
          >
            <img src={projectIcon} alt="project" className="" />
            <h2>PROJECTS</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
