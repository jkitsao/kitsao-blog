import React from "react";

function Banner() {
  return (
    <div className="xl:w-3/4 banner xl:mx-auto mt-4 lg:rounded shadow-md">
      <section className="overlay">
        <div className="banner_content flex w-full h-full justify-center items-center">
          <h1 className="text_shadow">All things web development </h1>
        </div>
      </section>
    </div>
  );
}

export default Banner;
