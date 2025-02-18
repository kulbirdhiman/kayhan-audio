import React from "react";

const Demmovideo = () => {
  return (
    <div className="mt-3">
       <div className="flex  flex-wrap justify-between">
       <h1 className="text-3xl text-center  my-2 ">Demo video</h1>
      <iframe
      className="mx-auto h-[30rem] my-2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4L5lAqvf--c?si=QXTuharQMogOTeOi"
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
       </div>
       <div className="flex-row-reverse  flex-wrap justify-between">
       <h1 className="text-3xl text-center  my-2 ">Demo video</h1>
      <iframe
      className="mx-auto h-[30rem] my-2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4L5lAqvf--c?si=QXTuharQMogOTeOi"
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
       </div>
    </div>
  );
};

export default Demmovideo;
