import React, { Component } from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import EventMap from "../components/EventMap";
import About from "../components/About";
import Discord from "../components/Discord";

import { logo } from "../static/images";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { eventCardLeft: 0 };
    this.setEventCardPosition = this.setEventCardPosition.bind(this);
  }

  setEventCardPosition() {
    const left = this.eventCardLeftRef.getBoundingClientRect().x;
    this.setState({
      eventCardLeft: left
    });
  }

  componentDidMount() {
    this.setEventCardPosition();
    window.addEventListener("resize", this.setEventCardPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setEventCardPosition);
  }

  render() {
    return (
      <div>
        <Hero />

        <div id="about" className="px-6">
          <div className="container md:flex justify-between mx-auto py-8 md:py-xl">
            <div
              className="md:w-1/2 mb-6 md:mb-0"
              ref={node => (this.eventCardLeftRef = node)}
            >
              <About />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <Discord />
            </div>
          </div>
        </div>

        <div className="relative">
          <EventCard left={this.state.eventCardLeft} />
          <EventMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBetRKJfVflUA2XCXXicxCM7hM2LAgjsho"
            loadingElement={<div style={styles.map} />}
            containerElement={<div style={styles.map} />}
            mapElement={<div style={styles.map} />}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  map: {
    height:
      typeof window == "undefined" ? 0 : window.innerWidth >= 576 ? 600 : 500
  }
};

export default IndexPage;
