import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class Login extends Component {
  state = {};
  render() {
    return (
      <section class="fullscreen">
        <div class="fullscreen-child">
          <Container fluid>
            <Row>
              <Col sm={4} className="col-sm-offset-4">
                <Form></Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Login;
