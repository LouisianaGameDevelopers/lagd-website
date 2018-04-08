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

    <img src={techParkPhoto} alt="Photo of The Louisiana Tech Park" />

    <div className="p-4 leading-normal">
      <div itemProp="startDate" content="2018-05-05T14:00">
        <strong>Saturday, May 5, 2018</strong>
      </div>
      2:00 PM&ndash;
      <span itemProp="endDate" content="2018-05-05T20:00">
        8:00 PM
      </span>
      <div
        className="text-grey-darker text-sm"
        itemProp="location"
        itemScope
        itemType="http://schema.org/Place"
      >
        <div itemProp="name">Louisiana Technology Park</div>
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <div itemProp="streetAddress">7117 Florida Blvd</div>
          <span itemProp="addressLocality">Baton Rouge</span>,{" "}
          <span itemProp="addressRegion">LA</span>
          <span itemProp="postalCode">70806</span>
        </div>
      </div>
    </div>
  </section>
);

EventCard.propTypes = {
  left: PropTypes.number.isRequired
};

EventCard.defaultProps = {
  left: 0
};

export default EventCard;
