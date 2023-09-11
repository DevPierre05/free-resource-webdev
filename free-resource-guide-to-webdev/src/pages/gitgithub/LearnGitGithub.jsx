import freecodecamp from "../../assets/websites/freeCodeCampImg.png"
import githubDocs from "../../assets/websites/githubDocs.png"
import codeacademy from "../../assets/websites/codeacademy.png"
import scrimba from "../../assets/websites/scrimba.webp"
export default function LearnGitGithub() {
  return (
    <section className="mt-10 pb-10">
      <div className="tech_container gap-x-5 gap-y-8">
        <a
          href="https://scrimba.com/playlist/pYLnBT4"
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
            <h2 className="text-lg hover:text-yellow-500">Git & Github- Scrimba</h2>
          </div>
        </a>
        <a
          href="https://www.codecademy.com/learn/learn-git"
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
            <h2 className="text-lg hover:text-yellow-500">Git & Github- CodeAcademy</h2>
          </div>
        </a>
        <a
          href="https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[15rem] h-[20rem] sm:w-[20rem] rounded-t-xl overflow-hidden shadow-xl"
        >
          <img
            src={githubDocs}
            alt="image of Git & Github docs"
            className="w-[15rem] h-[15rem] sm:w-[20rem] object-fit hover:scale-[105%]"
          />
          <div className="flex justify-center items-center bg-[#f8f8fa] h-[calc(20rem-15rem)]">
            <h2 className="text-lg hover:text-yellow-500">Git & Github- GITHUB Docs</h2>
          </div>
        </a>
        <a
          href="https://www.freecodecamp.org/news/git-and-github-for-beginners/"
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
            <h2 className="text-lg hover:text-yellow-500">Git & Github- FreeCodeCamp</h2>
          </div>
        </a>
      </div>
    </section>
  );
}