import freecodecamp from "../../assets/websites/freeCodeCampImg.png"
import w3school from "../../assets/websites/w3schoolImg.png"
import mdndocs from "../../assets/websites/mdndocsImg.png"
import codeacademy from "../../assets/websites/codeacademy.png"
import scrimba from "../../assets/websites/scrimba.webp"
export default function LearnJavascript() {
  return (
    <section className="mt-10 pb-10">
      <div className="tech_container gap-x-5 gap-y-8">
        <a
          href="https://www.codecademy.com/learn/introduction-to-javascript"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl overflow-hidden shadow-xl"
        >
          <img
            src={codeacademy}
            alt="image of codeacademy"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-fill hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">
              JavaScript- CodeAcademy
            </h2>
          </div>
        </a>
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl
          overflow-hidden border-slate-50 shadow-xl"
        >
          <img
            src={freecodecamp}
            alt="image of freecodecamp"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-fill hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">
              JavaScript- FreeCodeCamp
            </h2>
          </div>
        </a>
        <a
          href="https://scrimba.com/learn/learnjavascript"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl overflow-hidden shadow-xl"
        >
          <img
            src={scrimba}
            alt="image of scrimba"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-fill hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">
              JavaScript- Scrimba
            </h2>
          </div>
        </a>
        <a
          href="https://www.w3schools.com/js/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl overflow-hidden shadow-xl"
        >
          <img
            src={w3school}
            alt="image of w3school"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-contain hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">
              JavaScript- W3School
            </h2>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl overflow-hidden shadow-xl"
        >
          <img
            src={mdndocs}
            alt="image of MDN docs"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-fill hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">
              JavaScript- MDN Docs
            </h2>
          </div>
        </a>
      </div>
    </section>
  );
}