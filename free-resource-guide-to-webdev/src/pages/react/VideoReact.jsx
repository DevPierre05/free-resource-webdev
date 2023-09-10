/* eslint-disable react/no-unknown-property */
export default function VideoReact() {
  return (
    <section className="mt-10 pb-10 overflow-x-hidden">
      <div className="visual_container gap-10 px-2">
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/w7ejDZ8SWv8?si=s0aYaYQmLPqgTZmf"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/bMknfKXIFA8?si=Nc7_diaeXtiIxbO0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="justify-self-center">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/b9eMGE7QtTk?si=zjfgNPFAi88eqn6b"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}