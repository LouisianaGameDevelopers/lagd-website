import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Input from "./Input";
import Select from "./Select";

const MAILER_ENDPOINT = "https://core.lagd.network/api/requests/discord";

class DiscordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payload: {
        email: null,
        name: null,
        referrer: null,
        message: null
      },
      submitLabel: "Submit",
      errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitLabel: "Submitting…" });
    axios
      .post(MAILER_ENDPOINT, this.state.payload)
      .then(response => {
        console.log("mail success", response);
        this.props.onSuccess();
      })
      .catch(error => {
        console.log("mail error", error);
        this.setState({
          errors: "We gotta have a valid email address!",
          submitLabel: "Try again"
        });
      });
  }

  render() {
    return (
      <form className="text-sm md:text-base" onSubmit={this.handleSubmit}>
        <div className="mb-6">
          <Input
            type="email"
            name="email"
            label="Your email"
            handleChange={e =>
              this.setState({
                payload: { ...this.state.payload, email: e.target.value }
              })
            }
            placeholder="you@domain.com"
          />
          <div className="text-sm text-red mt-2">{this.state.errors}</div>
        </div>

        <div className="mb-6">
          <Input
            name="name"
            label="Name"
            handleChange={e =>
              this.setState({
                payload: { ...this.state.payload, name: e.target.value }
              })
            }
            placeholder="Jane Doe"
          />
        </div>

        <div className="mb-6">
          <Select
            name="referrer"
            label="How’d you hear about us?"
            options={["IGDA", "Facebook", "Twitter", "A friend", "Other"]}
            handleChange={e =>
              this.setState({
                payload: { ...this.state.payload, referrer: e.target.value }
              })
            }
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-xs md:text-sm font-semibold uppercase text-grey-dark mb-2"
            htmlFor="referrer"
          >
            Tell us a little about yourself
          </label>
          <textarea
            className="block appearance-none w-full bg-grey-lighter border-grey-light hover:border-grey text-grey-darker p-4 mb-6 rounded"
            onChange={e =>
              this.setState({
                payload: { ...this.state.payload, message: e.target.value }
              })
            }
            placeholder="Type a little, or type a lot"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="text-sm md:text-base px-4 py-3 uppercase text-grey-dark"
            onClick={this.props.onCancel}
          >
            Nevermind
          </button>
          <button
            className="bg-sunset hover:bg-sunset-dark px-4 py-3 uppercase text-white antialiased font-semibold shadow-md rounded"
            onClick={this.handleSubmit}
          >
            {this.state.submitLabel}
          </button>
        </div>
      </form>
    );
  }
}

DiscordForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default DiscordForm;
