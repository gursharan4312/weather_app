import { Button, Form, Input, Alert, Col, Row, FormFeedback } from "reactstrap";

import React from "react";

export default function WeatherForm(props) {
  const [errors, setErrors] = React.useState({
    msg: null,
    city: "valid",
    country: "valid"
  }); // local state for errors
  const { location, setLocation, onSubmit } = props; // state passes as prop from app
  const handelSubmit = e => {
    e.preventDefault();
    setErrors({
      msg: null,
      city: "valid",
      country: "valid"
    });
    if (validate()) {
      onSubmit();
    }
  };
  const validate = () => {
    if (!location.city || !location.country) {
      setErrors({
        msg: "Please fill all the credentials",
        city: location.city ? "valid" : "invalid",
        country: location.country ? "valid" : "invalid"
      });
      return false;
    } else return true;
  };
  const handelChange = e => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  return (
    <Form style={{ margin: "auto" }}>
      <Row>
        <Col md={10} style={{ margin: "auto" }}>
          {errors.msg ? <Alert color="danger">{errors.msg}</Alert> : null}
        </Col>
      </Row>
      <Row form>
        <Col md={1} />
        <Col md={4}>
          <Input
            type="text"
            id="city"
            placeholder="city name"
            name="city"
            value={location.city}
            onChange={handelChange}
            invalid={errors.city === "invalid" ? true : false}
          />
          <FormFeedback>
            <strong>*required</strong>
          </FormFeedback>
        </Col>

        <Col md={4}>
          <Input
            type="text"
            id="country"
            placeholder="country name"
            name="country"
            value={location.country}
            onChange={handelChange}
            invalid={errors.country === "invalid" ? true : false}
          />
          <FormFeedback>
            <strong>*required</strong>
          </FormFeedback>
        </Col>
        <Col md={2}>
          <Button color="success" onClick={handelSubmit} type="submit" block>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
