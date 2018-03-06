import React, { Component } from "react";
import Typed from "typed.js";
import Header from "./Header";

import dataURI from "../../data/hero-image.js";
import imgGlitch from "img-glitch";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.minHeight = 700;
  }

  renderBlurb() {
    return (
      <p
        className="measure text-xl"
        style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.3)" }}
      >
        <strong className="uppercase">Louisiana Game Developers</strong> is an
        organization dedicated to fostering and promoting the game development
        community in Louisiana.
      </p>
    );
  }

  renderCorner() {
    return (
      <svg
        width="1"
        height="1"
        viewBox="0 0 1 1"
        preserveAspectRatio="xMaxYMin meet"
        style={styles.corner}
      >
        <polyline points="0,0 1,0 1,1 0,0" fill="black" />
      </svg>
    );
  }

  componentDidMount() {
    const glitch = imgGlitch(this.image);
    glitch.start();
  }

  render() {
    return (
      <div className="lagd-covered" style={{ minHeight: this.minHeight }}>
        <div style={styles.content}>
          <div className="container mx-auto px-6">
            <div className="pb-8">
              <Header />
            </div>

            <h1 className="font-display text-headline mt-8">We make games.</h1>
            {this.renderBlurb()}

            <a
              className="bg-black text-white uppercase mt-8 px-4 py-3 inline-block"
              href="#"
            >
              Come make games with us
            </a>
          </div>
        </div>

        {this.renderCorner()}

        <img
          className="lagd-cover"
          src={dataURI}
          ref={node => (this.image = node)}
        />
      </div>
    );
  }
}

const styles = {
  content: {
    position: "absolute",
    left: 0,
    top: 40,
    width: "100%",
    zIndex: 2
  },
  corner: {
    mixBlendMode: "overlay",
    opacity: 0.2,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    height: "100%",
    width: "100%"
  }
};

export default Hero;
