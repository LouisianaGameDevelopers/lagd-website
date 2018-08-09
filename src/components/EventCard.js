import React from "react";
import PropTypes from "prop-types";

import { techParkPhoto } from "../static/images";

const EventCard = ({ left }) => (
  <section
    className="absolute z-10 w-3/4 md:w-1/2 xl:w-1/3 bg-white rounded shadow-lg text-black"
    itemScope
    itemType="http://schema.org/Event"
    style={{ left, top: "50%", transform: "translateY(-50%)" }}
  >
    <h1
      itemProp="name"
      className="leading-tight text-lg bg-black text-white text-normal p-4 uppercase rounded-t"
    >
      Our next meetup
    </h1>

    <p className="p-4 leading-normal">
      We’re in the process of finding a new venue for our meetups—stay tuned for details!
    </p>
  </section>
);

EventCard.propTypes = {
  left: PropTypes.number.isRequired
};

EventCard.defaultProps = {
  left: 0
};

export default EventCard;
