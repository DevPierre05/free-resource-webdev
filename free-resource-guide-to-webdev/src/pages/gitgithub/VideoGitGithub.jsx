/* eslint-disable react/no-unknown-property */
export default function VideoGitGithub() {
  return (
    <section className="mt-10 pb-10 overflow-x-hidden">
      <div className="visual_container gap-10 px-2">
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/RGOj5yH7evk?si=HySaffNLE8oVVBVR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/tRZGeaHPoaw?si=bj1YQjnUO9Tf0AfN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="justify-self-center">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/SWYqp7iY_Tc?si=DC19OrFM0hVABaO6"
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