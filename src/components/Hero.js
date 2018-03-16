import React, { Component } from "react";
import Header from "./Header";
import Blurb from "./HeroBlurb";

import { batonRouge } from "../static/images";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.minHeight = 700;
  }

  render() {
    return (
      <div
        className="relative"
        style={{
          minHeight: this.minHeight,
          background: `center / cover no-repeat url(${batonRouge})`
        }}
      >
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
