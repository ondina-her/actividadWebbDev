// Import the necessary modules and components
//import {Todos } from './reducers/todos';
//import {Goals} from './reducers/goals';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item.js';
import Menu from './Components/Menu/Menu.js';
import Formulario from './Components/Formulario/Formulario.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';

import {
  addTodo, 
  initAddTodo,
}from './reducers/todoSlice'
import './Components/todos'

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  return (
    <div className="App">
      
      <Menu></Menu>
      <Container>
  <Row>
    <Col xs={12} md={4} className="mb-4">
    <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
      <Formulario />
    </Col>
    <Col xs={12} md={8}>
      <div className="items-container">
        {
          todos.map((todos) => (
            
            <Item name={todos.name} 
            description={todos.description} 
            dueDate={todos.dueDate}/>
          ))
        }
      </div>
    </Col>
  </Row>
</Container>
        
    </div>
  );
}

export default App;
