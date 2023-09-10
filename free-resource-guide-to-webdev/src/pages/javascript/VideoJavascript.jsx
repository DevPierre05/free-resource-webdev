/* eslint-disable react/no-unknown-property */
export default function VideoJavascript() {
  return (
    <section className="mt-10 pb-10 overflow-x-hidden">
      <div className="visual_container gap-10 px-2">
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/PkZNo7MFNFg?si=GtOimRF2GELJ_84u"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/W6NZfCO5SIk?si=Zs6rYD7YKT5pGonR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            src="https://www.youtube.com/embed/hdI2bqOjy3c?si=X2rI51NsOx3ad0Y7"
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