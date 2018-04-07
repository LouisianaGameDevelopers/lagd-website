import React, { Component } from "react";
import Modal from "react-modal";
import DiscordForm from "./DiscordForm";

import { discordLogoWordmark } from "../static/images";

class Discord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      submitted: false
    };

    this.handleFormSuccess = this.handleFormSuccess.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleFormSuccess() {
    this.setState({ submitted: true });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
    this.appContainer.classList.add("is-frosted");
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.appContainer.classList.remove("is-frosted");
  }

  componentDidMount() {
    this.appContainer = document.querySelector("#___gatsby");
  }

  componentWillUnmount() {
    this.appContainer.classList.remove("is-frosted");
  }

  renderForm() {
    if (this.state.submitted) {
      return <Success onClose={this.handleCloseModal} />;
    } else {
      return (
        <DiscordForm
          onCancel={this.handleCloseModal}
          onSuccess={this.handleFormSuccess}
        />
      );
    }
  }
  render() {
    return (
      <section>
        <div
          className="p-6 shadow-lg rounded"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <h1 className="mb-2">
            <img
              style={{ height: 60 }}
              src={discordLogoWordmark}
              alt="Discord logo with wordmark"
            />
          </h1>

          <p className="pb-6 leading-normal">
            Our Discord server is our home base for people to chat about
            everything game development related, get feedback on their work, and
            meet other people! We also have a monthly all-day meetup in Baton
            Rouge where people can work on projects, hang out, and get help and
            feedback.
          </p>

          <button
            className="bg-sunset-gradient text-white px-4 py-3 uppercase font-bold shadow-md rounded text-sm hover:fade"
            onClick={this.handleOpenModal}
          >
            Get an invitation
          </button>
        </div>

        <Modal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          style={modalStyles}
        >
          <section className="subpixel-antialiased text-black p-4">
            {this.renderForm()}
          </section>
        </Modal>
      </section>
    );
  }
}

const Success = ({ onClose }) => (
  <section>
    <h1 className="text-base leading-tight mb-2">🎉 Success!</h1>
    <p className="leading-normal mb-6">{successMessage}</p>
    <div className="flex justify-end">
      <button className="uppercase text-grey-dark" onClick={onClose}>
        Close this
      </button>
    </div>
  </section>
);

const modalStyles = {
  content: {
    minWidth:
      typeof window == "undefined" ? 0 : window.innerWidth >= 768 ? 550 : 340,
    top: "30%",
    right: "auto",
    bottom: "auto",
    left: "50%",
    transform: "translate(-50%, -30%)"
  },
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" }
};

const successMessage = `
We’ve received your request and will review it ASAP. If you don’t
hear from us in 24 hours, hit us up on Twitter, on Facebook, or by email!
Hope to chat with you soon!
`;

export default Discord;
