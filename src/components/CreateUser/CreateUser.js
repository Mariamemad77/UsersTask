import React, { Component } from "react";

import { connect } from "react-redux";

import "./CreateUser.scss";
import { Col, Row } from "../SharedComponents";
import { Button, Container } from "react-bootstrap";

import LocationPicker from "react-location-picker";
import * as Yup from "yup";

import { Formik, Form } from "formik";
import FieldControl from "../../elements/fieldControl";

import { CreateUserAction } from "../../actions/CreateUserAction/CreateUserAction";

const defaultPosition = {
  lat: 27.9878,
  lng: 86.925,
};

class CreateUser extends Component {
  initialValues = {
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
  // this.handleLocationChange = this.handleLocationChange.bind(this);

  // handlepasswordmatchin = (e) => {
  //   const value = e.target.value;
  //   if (value !== e.password) return "Error";
  // };

  // handleLocationChange({ position, address_map }) {
  //   // Set new location
  //   this.setState({ position, address_map });
  //   this.onSubmit();
  // }

  onSubmit = (values) => {
    console.log("Hello");
    const { CreateUserAction } = this.props;
    console.log(values);
    CreateUserAction(values);
  };

  validationSchema = Yup.object({
    first_name: Yup.string().required("This Field is Required"),
    last_name: Yup.string().required("This Field is Required"),
    job: Yup.string().required("This Field is Required"),
    address: Yup.string().required("This Field is Required"),
    street_address: Yup.string().required("This Field is Required"),
    avatar: Yup.string().required("This Field is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This Field is Required"),

    password: Yup.string()
      .required("This Field is Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password Must have capital Letter and special charachter"
      ),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords didn't match"
    ),
  });

  render() {
    return (
      <div className="CreateForm">
        <Container fluid>
          <Formik
            initialValues={this.initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.onSubmit}
          >
            <Form method="POST">
              <Row>
                <Col>
                  <div className="form-group">
                    <FieldControl
                      control="input"
                      id="first_name"
                      type="text"
                      className="form-control FormInput input-field "
                      name="first_name"
                      placeholder="First Name"
                      required=""
                      autoComplete="first_name"
                      autoFocus=""
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <FieldControl
                      control="input"
                      id="last_name"
                      type="text"
                      className="form-control FormInput input-field "
                      name="last_name"
                      placeholder="Last Name"
                      required=""
                      autoComplete="last_name"
                      autoFocus=""
                    />
                  </div>
                </Col>
              </Row>
              <div className="form-group">
                <FieldControl
                  control="input"
                  id="job"
                  type="text"
                  className="form-control FormInput input-field "
                  name="job"
                  placeholder="Job"
                  required=""
                  autoComplete="job"
                  autoFocus=""
                />
              </div>

              <div className="form-group">
                <FieldControl
                  control="input"
                  id="avatar"
                  type="file"
                  className="form-control FormInput input-field "
                  name="avatar"
                  placeholder="Avatar"
                  required=""
                  autoComplete="avatar"
                  autoFocus=""
                  accept="image/*"
                />
              </div>

              <div className="form-group">
                <FieldControl
                  control="input"
                  id="email"
                  type="email"
                  className="form-control FormInput input-field "
                  name="email"
                  placeholder="Email"
                  required=""
                  autoComplete="email"
                  autoFocus=""
                />
              </div>
              <Row>
                <Col>
                  <div className="form-group">
                    <FieldControl
                      control="input"
                      id="password"
                      type="password"
                      className="form-control FormInput input-field "
                      name="password"
                      placeholder="Password"
                      required=""
                      autoComplete="password"
                      autoFocus=""
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <FieldControl
                      control="input"
                      id="confirm_password"
                      type="password"
                      className="form-control FormInput input-field "
                      name="confirm_password"
                      placeholder="Confirm Password"
                      required=""
                      autoComplete="confirm_password"
                      autoFocus=""
                    />
                  </div>
                </Col>
              </Row>
              <div className="form-group">
                <FieldControl
                  control="input"
                  id="address"
                  type="text"
                  className="form-control FormInput input-field "
                  name="address"
                  placeholder="Address"
                  required=""
                  autoComplete="address"
                  autoFocus=""
                />
              </div>

              <div className="form-group">
                <FieldControl
                  control="input"
                  id="street_address"
                  type="text"
                  className="form-control FormInput input-field "
                  name="street_address"
                  placeholder="Street Address"
                  required=""
                  autoComplete="street_address"
                  autoFocus=""
                />
              </div>

              <div className="map">
                <LocationPicker
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "400px" }} />}
                  defaultPosition={defaultPosition}
                  // onChange={this.handleLocationChange}
                  name="Location"
                  // value={address_map}
                />
              </div>

              <div className=" form-group SubmitButton">
                <FieldControl
                  control="button"
                  type="submit"
                  className="btnSubmit form-control SubmitButtonWidth"
                  text="Submit"
                />
              </div>
              <div className="SubmitButton">
                <Button className=" form-control CancelButtonWidth" href="./">
                  Cancel
                </Button>
              </div>
            </Form>
          </Formik>
        </Container>
      </div>
    );
  }
}
function mapState(state) {
  return {
    errorMessage: state.CreateUser.errorMessage,
    loading: state.CreateUser.loading,
    user: state.CreateUser.user,
  };
}
export default connect(mapState, { CreateUserAction })(CreateUser);
