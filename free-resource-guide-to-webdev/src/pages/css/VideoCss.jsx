/* eslint-disable react/no-unknown-property */
export default function VideoCss() {
  return (
    <section className="mt-10 pb-10">
      <div className="visual_container gap-10 px-2">
        <div className="">
          <iframe
            className="w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[20rem]"
            loading="lazy"
            src="https://www.youtube.com/embed/yfoY53QXEnI?si=bIvqxyCddmjDs-eD"
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
            src="https://www.youtube.com/embed/OXGznpKZ_sA?si=X4WaIiiTaVghTKIE"
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
            src="https://www.youtube.com/embed/1PnVor36_40?si=0UaAbJYNa3bNkLwY"
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
            src="https://www.youtube.com/embed/n4R2E7O-Ngo?si=FLQ_iLyuh830gi4z"
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