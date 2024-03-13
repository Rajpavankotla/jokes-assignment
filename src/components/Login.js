import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Modal, Form, FormText } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
      return false;
    }
    if (username === "Pavan" && password === "Pavan@2001") {
      setError(false);
      setLoggedIn(true);
      navigate("/");
    } else {
      setError(true);
      setShowPopup(true); 
    }
  };

  const handlePopupClose = () => setShowPopup(false);

  return (
    <Container className=" text-white main d-flex justify-content-center align-items-center" style={{
      backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/07/16/54/32/1000_F_716543264_jRiurF04mvk8apdzwh74y7AOctbBj8fS.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      <Row>
        <Col>
          <h2 className="m-5">Login</h2>
          <Form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3 d-flex">
                <Form.Label className="ml-2">User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
          
              {error && !username && (
                <FormText className="text-danger">
                  Enter valid user name
                </FormText>
              )}
            </div>

            <div className="mb-3 d-flex justify-content-space-between  w-100">
              <Form.Label className="mr-3">Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <FormText className="text-danger">
                  Enter valid password
                </FormText>
              )}
            </div>
          <div className="p-3">
              <Button variant="primary" className="m-3" type="submit">
                Login
              </Button>
              <Button variant="success" className="m-2" onClick={() => setShowPopup(true)}>
              View Credentials
              </Button>
          </div>
          </Form>
          
          
       
        </Col>
      </Row>

      <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-success text-white p-5 card mt-4 p-4 d-flex flex-column justify-content-start">
            <h3>Please Use Below Credentials</h3>
            <p>Username: Pavan</p>
            <p>Password: Pavan@2001</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handlePopupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login;
