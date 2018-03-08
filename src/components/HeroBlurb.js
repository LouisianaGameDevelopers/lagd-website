import React from "react";

const Button = () => (
  <a
    className="bg-black hover:bg-grey-darkest text-white uppercase mt-8 px-4 py-3 inline-block rounded"
    href="#about"
  >
    Come make games with us&nbsp;&nbsp;➡
  </a>
);

const Blurb = () => (
  <div>
    <h1 className="leading-none font-display text-4xl md:text-5xl mt-8 mb-4">
      We make games.
    </h1>
    <p
      className="measure text-lg font-semibold"
      style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.4)" }}
    >
      <strong className="uppercase">Louisiana Game Developers</strong> is an
      organization dedicated to fostering and promoting the game development
      community in Louisiana.
    </p>
    <Button />
  </div>
);

export default Blurb;
