import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from './Components/Navbar'
import Left from './Components/Left'
import Middle from './Components/Middle';
import Right from './Components/Right';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Left></Left>
          </Col>
          <Col md={7} >
            <Middle></Middle>
          </Col>
          <Col md={3}>
            <Right></Right>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
