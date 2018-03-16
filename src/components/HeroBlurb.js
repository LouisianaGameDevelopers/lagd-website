import React from "react";

const Button = () => (
  <a
    className="bg-black hover:bg-grey-darkest hover:transition-bg text-white uppercase mt-8 px-4 py-3 inline-block rounded no-underline font-semibold"
    href="#about"
  >
    👩‍💻 Come make games with us
  </a>
);

const Blurb = () => (
  <div>
    <h1
      className="leading-tight font-display text-4xl md:text-5xl mt-8 mb-4"
      style={{ textShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)" }}
    >
      We make games.
    </h1>

    <p
      className="w-full max-w-sm text-lg leading-normal"
      style={{ textShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)" }}
    >
      <strong className="uppercase">Louisiana Game Developers</strong> is an
      organization dedicated to fostering and promoting the game development
      community in Louisiana.
    </p>
    <Button />
  </div>
);

export default Blurb;
