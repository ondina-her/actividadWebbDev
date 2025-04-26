// Import the necessary modules and components
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item.js';
import Menu from './Components/Menu/Menu.js';
import Formulario from './Components/Formulario/Formulario.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
      
      <Menu></Menu>
      <Container>
  <Row>
    <Col xs={12} md={4} className="mb-4">
      <Formulario />
    </Col>
    <Col xs={12} md={8}>
      <div className="items-container">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </Col>
  </Row>
</Container>
        
    </div>
  );
}

export default App;
