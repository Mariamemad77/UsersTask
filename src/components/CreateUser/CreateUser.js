import React, { Component } from "react";

import { connect } from "react-redux";

import "./CreateUser.scss";
import { Col, Row } from "../../UtilisComponents";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import LocationPicker from "react-location-picker";

const defaultPosition = {
  lat: 27.9878,
  lng: 86.925,
};

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      job: "",
      email: "",
      address: "",
      street_address: "",
      password: "",
      confirm_password: "",
      avatar: "",

      address_map: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal",
      position: {
        lat: 0,
        lng: 0,
      },
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address_map }) {
    // Set new location
    this.setState({ position, address_map });
    this.changeHandler();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://reqres.in/api/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email,
      });
    } else {
      this.setState({
        emailError: true,
      });
    }
  }

  changeEmailHandler = (e) => {
    this.validateEmail(this.email);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      first_name,
      last_name,
      job,
      email,
      address,
      street_adress,
      password,
      confirm_password,
      avatar,
      address_map,
      position: { lat, lng },
    } = this.state;
    return (
      <div className="CreateForm">
        <Container fluid>
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col>
                <Form.Label className="FormLabel">First Name</Form.Label>
                <div>
                  <input
                    required
                    className="FormInput"
                    type="text"
                    name="first_name"
                    onChange={this.changeHandler}
                    value={first_name}
                  />
                </div>
              </Col>
              <Col>
                <Form.Label className="FormLabel">Last Name</Form.Label>
                <div>
                  <input
                    required
                    className="FormInput"
                    type="text"
                    name="last_name"
                    onChange={this.changeHandler}
                    value={last_name}
                  />
                </div>
              </Col>
            </Row>

            <Form.Label className="FormLabel">Job </Form.Label>
            <div>
              <input
                required
                className="FormInput"
                type="text"
                name="job"
                onChange={this.changeHandler}
                value={job}
              />
            </div>

            <Form.Label className="FormLabel">Avatar </Form.Label>
            <div>
              <input
                required
                onChange={this.changeHandler}
                label="Avatar"
                className="position-relative"
                type="file"
                name="avatar"
                value={avatar}
                accept="image/*"
              />
            </div>
            <Form.Label className="FormLabel">Email address</Form.Label>
            <div>
              <input
                required
                className="FormInputWidth FormInput"
                type="email"
                name="email"
                onChange={this.changeEmailHandler}
                value={email}
              />
            </div>

            <Row>
              <Col>
                <Form.Label className="FormLabel">Password</Form.Label>
                <div>
                  <input
                    required
                    className="FormInput "
                    type="password"
                    name="password"
                    onChange={this.changeHandler}
                    value={password}
                  />
                </div>
              </Col>
              <Col>
                <Form.Label className="FormLabel">Confirm Password</Form.Label>
                <div>
                  <input
                    required
                    className="FormInput"
                    type="password"
                    name="confirm_password"
                    onChange={this.changeHandler}
                    value={confirm_password}
                  />
                </div>
              </Col>
            </Row>

            <Form.Label className="FormLabel">Address</Form.Label>
            <div>
              <input
                required
                className="FormInput  FormInputWidth"
                type="text"
                name="address"
                onChange={this.changeHandler}
                value={address}
              />
            </div>
            <Form.Label className="FormLabel">Street Address</Form.Label>
            <div>
              <input
                required
                className="FormInput FormInputWidth"
                type="text"
                name="street_address"
                onChange={this.changeHandler}
                value={street_adress}
              />
            </div>

            <div className="map">
              <LocationPicker
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "400px" }} />}
                defaultPosition={defaultPosition}
                onChange={this.handleLocationChange}
                name="Location"
                value={address_map}
              />
            </div>

            <div className="SubmitButton">
              <Button
                className="SubmitButtonWidth"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>

              <Button
                className="SubmitButtonWidth"
                variant="secondary"
                href="./"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
export default connect()(CreateUser);
