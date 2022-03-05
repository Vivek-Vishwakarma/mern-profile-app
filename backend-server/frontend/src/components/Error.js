
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
const Error = ({ message }) => {
const [show, setShow] = useState(true);
if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
  return <Button style={{margin : 10}} onClick={() => setShow(true)}>Show Alert</Button>;
};
export default Error;
