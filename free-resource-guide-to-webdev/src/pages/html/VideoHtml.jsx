/* eslint-disable react/no-unknown-property */
export default function VideoHtml() {
  return (
    <section className="mt-10 pb-10 overflow-x-hidden">
      <div className="visual_container gap-10 px-2">
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            loading="lazy"
            src="https://www.youtube.com/embed/kUMe1FH4CHE?si=RZJh8rJ066a-6uM2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            loading="lazy"
            src="https://www.youtube.com/embed/qz0aGYrrlhU?si=LfhiPk9fskOcPusZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="justify-self-center">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            loading="lazy"
            src="https://www.youtube.com/embed/UB1O30fR-EE?si=L4epoqUivVVWSRIF"
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