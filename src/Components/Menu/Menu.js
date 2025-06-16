import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../../reducers/optionsSlice';


function Menu() {
    const dispatch = useDispatch();
  const option = useSelector((state) => state.options.value);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='Color-Letras'>AppTasks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
           <Nav.Link 
              className={`Color-Letras ${option === 'tasks' ? 'active' : ''}`} 
              onClick={() => dispatch(setOption('tasks'))}
            >
              Tasks
            </Nav.Link>
            <Nav.Link 
              className={`Color-Letras ${option === 'goals' ? 'active' : ''}`} 
              onClick={() => dispatch(setOption('goals'))}
            >
              Goals
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;