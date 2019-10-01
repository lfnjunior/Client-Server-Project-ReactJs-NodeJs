import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap/";
import "./Login.css";
import user from "../../assets/user.png";

function App() {
  return (
    <Container className="card-login">
      <Row>
        <Col md={2} xs={1} lg={3} />
        <Col md={8} xs={10} lg={6}>
          <div className="card-login-center">
            <Card bg="light" className="shadow-lg p-3 mb-5 bg-white rounded">
              <div className="avatar">
                <Card.Img className="img-avatar" variant="middle" src={user} />{" "}
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
        <Col md={2} xs={1} lg={3} />
      </Row>
    </Container>
  );
}

export default App;