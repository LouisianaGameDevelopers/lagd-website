import React, { Component } from "react";
import Header from "./Header";
import Blurb from "./HeroBlurb";

import dataURI from "../../data/hero-image.js";
import imgGlitch from "img-glitch";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.minHeight = 700;
  }

  componentDidMount() {
    const glitch = imgGlitch(this.image, {
      maxErrors: 300,
      margin: 999,
      limiter: 0.8
    });
    glitch.start();
  }

  render() {
    return (
      <div className="lagd-covered" style={{ minHeight: this.minHeight }}>
        <div style={styles.content}>
          <div className="px-6">
            <div className="container mx-auto">
              <div className="pb-8">
                <Header />
              </div>

              <Blurb />
            </div>
          </div>
        </div>

        <Overlay />

        <img
          className="lagd-cover"
          src={dataURI}
          ref={node => (this.image = node)}
        />
      </div>
    );
  }
}

const Overlay = () => (
  <svg
    width="1"
    height="1"
    viewBox="0 0 1 1"
    preserveAspectRatio="xMaxYMin meet"
    style={styles.overlay}
  >
    <polyline points="0,0 1,0 1,1 0,0" fill="black" />
  </svg>
);

const styles = {
  content: {
    position: "absolute",
    left: 0,
    top: 40,
    width: "100%",
    zIndex: 2
  },
  overlay: {
    mixBlendMode: "overlay",
    opacity: 0.15,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    height: "100%",
    width: "100%"
  }
};

export default Hero;
