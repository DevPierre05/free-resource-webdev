import htmlIcon from "../../assets/icons/html-480.png";
import cssIcon from "../../assets/icons/css-480.png";
import jsIcon from "../../assets/icons/js-480.png";
import reactIcon from "../../assets/icons/react-480.png";
export default function Projects() {
  return (
    <section className="mt-10 pb-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="uppercase text-md font-bold text-center md:text-lg">
          Projects
        </h1>
      </div>
      <div className="project_container px-2 mt-5 gap-x-5 gap-y-8">
        <div className="relative shadow-xl h-auto bg-slate-50 z-100 mx-2 border border-slate-100 md:h-[38rem]">
          <div className="absolute -translate-x-[50%] -translate-y-[50%] opacity-10 top-[50%] left-[50%]">
            <img src={htmlIcon} alt="icon of html" className="-z-50" />
          </div>
          <div className="pt-2 p-1 text-center bg-red-500">
            <h1 className="text-lg text-white font-medium">HTML</h1>
          </div>
          <ul className="list-disc list-inside mt-2 mb-2 px-2 flex flex-col items-center gap-4 leading-8 lg:px-4">
            <li className="flex flex-col">
              <span className="font-bold">Personal Portfolio Website</span>
              Create a portfolio website to showcase your work, including your
              resume, projects, and contact information.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Blog Page</span>Design a simple blog
              page with HTML to publish your articles or thoughts.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Product Landing Page</span>Build a
              product landing page with details about a product, its features,
              and a call-to-action for users to learn more or make a purchase.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Restaurant Website</span>Develop a
              website for a fictional restaurant, including a menu, contact
              information, and maybe even a reservation form.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Newsletter Signup Page</span>Create a
              page where users can sign up for a newsletter. Use HTML forms to
              collect their information.
            </li>
          </ul>
        </div>
        <div className="relative shadow-xl h-auto mx-2 border border-slate-100 md:h-[38rem]">
          <div className="absolute -translate-x-[50%] -translate-y-[50%] opacity-10 top-[50%] left-[50%]">
            <img src={cssIcon} alt="icon of css" className="-z-50" />
          </div>
          <div className="pt-2 p-1 text-center bg-emerald-500">
            <h1 className="text-lg text-white font-medium">CSS</h1>
          </div>
          <ul className="list-disc list-inside mt-2 mb-2 px-2 flex flex-col gap-4 leading-8 lg:px-4">
            <li className="flex flex-col">
              <span className="font-bold">Responsive Webpage</span>Design a
              webpage that adapts to different screen sizes, ensuring it looks
              great on both desktop and mobile devices.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">CSS Art</span>Challenge your
              creativity by creating a piece of art using only CSS shapes and
              styles.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">E-commerce Product Card: </span>
              Design a product card for an e-commerce site with CSS to showcase
              product details, images, and pricing.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Profile Card</span>
              Create a profile card with CSS for a user or fictional character.
              Add hover effects for interactivity.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Animated Buttons</span>
              Build a set of animated buttons using CSS transitions or
              animations to make them visually appealing.
            </li>
          </ul>
        </div>
        <div className="relative shadow-xl h-auto mx-2 border border-slate-100 md:h-[38rem]">
          <div className="absolute -translate-x-[50%] -translate-y-[50%] opacity-10 top-[50%] left-[50%]">
            <img src={jsIcon} alt="icon of javascript" className="-z-50" />
          </div>
          <div className="pt-2 p-1 text-center bg-orange-500">
            <h1 className="text-lg text-white font-medium uppercase">
              Javascript
            </h1>
          </div>
          <ul className="list-disc list-inside mt-2 mb-2 px-2 flex flex-col gap-4 leading-8 lg:px-4">
            <li className="flex flex-col">
              <span className="font-bold">To-Do List: </span>
              Create a simple to-do list application that allows users to add,
              remove, and mark tasks as completed.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Weather App</span>Build a weather app
              that fetches weather data from an API based on user input and
              displays it dynamically.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Calculator</span>Develop a basic
              calculator that can perform arithmetic operations like addition,
              subtraction, multiplication, and division.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Image Slider</span>Create an image
              slider that automatically cycles through a set of images and
              provides navigation controls.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Trivia Quiz</span>Build a trivia quiz
              game that asks users questions and keeps track of their score.
            </li>
          </ul>
        </div>
        <div className="relative shadow-xl h-auto bg-slate-50 mx-2 border border-slate-100 md:h-[38rem]">
          <div className="absolute -translate-x-[50%] -translate-y-[50%] opacity-10 top-[50%] left-[50%]">
            <img src={reactIcon} alt="icon of react" className="-z-50" />
          </div>
          <div className="pt-2 p-1 text-center bg-fuchsia-500">
            <h1 className="text-lg text-white font-medium uppercase">React</h1>
          </div>
          <ul className="list-disc list-inside mt-2 mb-2 px-2 flex flex-col gap-4 leading-8 lg:px-4">
            <li className="flex flex-col">
              <span className="font-bold">Task Manager</span>Create a task
              management application with React that allows users to add,
              delete, and mark tasks as complete.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Recipe Finder</span>Build a recipe
              finder app that fetches recipes from an API based on user input,
              displays them, and allows users to save their favorite recipes.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">E-commerce Store</span>Develop a small
              e-commerce store with product listings, a shopping cart, and a
              checkout process using React.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Portfolio Website</span>Rebuild your
              personal portfolio website using React to showcase your projects
              and skills.
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Chat Application</span>Create a
              real-time chat application with React and a back-end technology
              like Firebase to allow users to chat in real-time.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
