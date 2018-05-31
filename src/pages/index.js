import React, { Component } from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import EventMap from '../components/EventMap';
import About from '../components/About';
import Discord from '../components/Discord';

import { logo } from '../static/images';

const developerForm =
  'https://docs.google.com/forms/d/13h_t30lTZ_KYVJ7B8DcPUg88gU7Uv48KXmhpMHWq4jQ';
const gameForm =
  'https://docs.google.com/forms/u/2/d/13svBBlZCaI5d4X7O0J3G6cYKHd9TV-OKFlmLVPFUMiI';

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
    window.addEventListener('resize', this.setEventCardPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setEventCardPosition);
  }

  render() {
    return (
      <div>
        <Hero />

        <div id="about" className="px-6">
          <div className="container md:flex justify-between items-center mx-auto py-8 md:py-xl">
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

        <div
          id="post-pixel"
          className="px-6"
          style={{ backgroundColor: '#3a4b57' }}
        >
          <div className="container md:flex justify-between items-center mx-auto py-8 md:py-xl">
            <div className="md:w-1/2">
              <section className="w-full max-w-sm">
                <h1 className="leading-tight text-xl text-normal uppercase mb-1">
                  Post-Pixel
                </h1>

                <h2 className="text-base mb-2 uppercase opacity-75">
                  An Interactive Art Showcase
                </h2>

                <div className="leading-normal">
                  <p className="mb-4">
                    We’re hosting a gallery event this summer to celebrate
                    interactive art made in Louisiana and the southeastern USA!
                    Post-Pixel will be <strong>August 11</strong> from{' '}
                    <strong>3PM to 9PM</strong> at{' '}
                    <strong>
                      <a
                        href="https://littlewars.com"
                        className="text-white no-underline border-b border-grey hover:text-grey"
                      >
                        Little Wars
                      </a>
                    </strong>{' '}
                    in Baton Rouge. Attending and showcasing is free, and snacks
                    and LAGD stickers will be available for purchase at the
                    event.
                  </p>
                  <p className="mb-4">
                    If you’d like to attend,{' '}
                    <a
                      href="https://www.eventbrite.com/e/post-pixel-an-interactive-art-showcase-tickets-46587132367"
                      className="text-white no-underline border-b border-grey hover:text-grey"
                    >
                      get your free ticket
                    </a>.
                  </p>
                  <p className="mb-4">
                    If you have a game or other interactive creation you'd like
                    to show, submit it with our{' '}
                    <a
                      href="https://goo.gl/forms/ZM0DfsjYUiwNJWey1"
                      className="text-white no-underline border-b border-grey hover:text-grey"
                    >
                      Gallery Submission form
                    </a>.{' '}
                    <em>
                      Just be sure to get your submission to us by August 8!
                    </em>
                  </p>
                </div>
              </section>
            </div>

            <div className="md:w-1/2">
              <a
                href="https://www.eventbrite.com/e/post-pixel-an-interactive-art-showcase-tickets-46587132367"
                className="mb-6 bg-teal block w-full md:w-1/2 px-6 py-4 bg-black text-white rounded no-underline mx-auto text-center font-semibold uppercase text-sm shadow-md hover:fade"
                style={{ backgroundColor: '#23abae' }}
              >
                Get Tickets!
              </a>

              <a
                href="https://goo.gl/forms/ZM0DfsjYUiwNJWey1"
                className="block w-full md:w-1/2 px-6 py-4 bg-sunset text-white rounded no-underline mx-auto text-center font-semibold uppercase text-sm shadow-md hover:fade"
              >
                Gallery Submission
              </a>
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

        <div className="bg-black container mx-auto px-6 py-8">
          <div className="md:flex justify-between items-center">
            <a
              className="text-teal no-underline hover:fade block mb-4 md:mb-0"
              href="mailto:hello@lagd.network"
            >
              hello@lagd.network
            </a>
            <span className="text-grey-light text-sm">
              Backgroung image (modified) is{' '}
              <a
                className="text-white no-underline hover:fade"
                href="https://creativecommons.org/licenses/by-sa/2.0/"
              >
                CC BY-SA 2.0
              </a>{' '}
              by{' '}
              <a
                className="text-white no-underline hover:fade"
                href="https://www.flickr.com/photos/magichorse/2426436883"
              >
                neil o
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  map: {
    height:
      typeof window == 'undefined' ? 0 : window.innerWidth >= 576 ? 600 : 500
  }
};

export default IndexPage;
