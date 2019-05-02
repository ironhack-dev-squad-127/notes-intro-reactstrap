import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';
import MyNavbar from './MyNavbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <h1 className="mt-4">Election of 2016</h1>
      {/* <Button color="danger">My first Bootstrap button</Button><br />
      <Button color="primary">Primary</Button><br />
      <Button color="success" outline>Success and outline</Button><br />
      <Button color="warning" size="sm">Warning and small</Button><br />
      <a href="https:///google.com" className="btn btn-primary">Google</a> */}


      {/* The direct children of <Row> is ALWAYS <Col> */}

      <div className="card-container">
        <Card className="candidate-card" >
          <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg?1556788787510" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h3">Donald Trump</CardTitle>
            <CardText>Let's make America great again!</CardText>
            <Button color="danger" tag="a" href="https://www.wikiwand.com/en/Donald_Trump">
              More info
            </Button>
          </CardBody>
        </Card>
        <Card className="candidate-card" >
          <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg/440px-Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h3">Hillary Cliton</CardTitle>
            <CardText>Stronger Together</CardText>
            <Button color="primary" tag="a" href="https://www.wikiwand.com/en/Hillary_Clinton">
              More info
          </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
