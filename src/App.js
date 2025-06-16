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
import React, { use,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { initAddGoal,
  removeGoal,
  selectGoal} from './reducers/goalSlice'; // Asegúrate de tener esta acción

import {
  addTodo, 
  initAddTodo,
  removeTodo,
  selectTodos
}from './reducers/todoSlice'
import './Components/todos'
import './reducers/goalSlice'


function App() {
  const dispatch = useDispatch();
 // const todos = useSelector((state) => state.todos.todos);
 //tasks
 const todos = useSelector(selectTodos); 
 const option = useSelector((state) => state.options.value);
  const goals = useSelector((state) => state.goals.goals);
function initFetch() {
  fetch('http://localhost:3000/tasks/getTasks', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": '123456'
                },
            }).then((response)=>
              response.json()
            ).then((response)=>{
              dispatch(initAddTodo(response));
            
            }
              
            ).catch((error) => {
                console.error("Error al agregar el todo:", error);
            });
}
//tasks
//goals

function initFetchGoals() {
  fetch('http://localhost:3000/goals/getGoals', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch(initAddGoal(response));  // Acción que deberías tener en goalSlice
    })
    .catch((error) => {
      console.error('Error al obtener goals:', error);
    });
}

useEffect(() => {
  initFetch();       // tareas
  initFetchGoals();  // metas
}, []);



useEffect(() => {
  console.log("Todos actualizados:", todos);
}, [todos]);

useEffect(() => {
  console.log("Goals actualizados:", goals);
}, [goals]);

useEffect(() => {
  console.log("Option:", option);
}, [option]);


useEffect(() => {
  console.log("Todos IDs:", todos.map(t => t._id));
}, [todos]);

useEffect(() => {
  console.log("Goals IDs:", goals.map(g => g._id));
}, [goals]);


  return (
    <div className="App">
      
      <Menu></Menu>
      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><Formulario/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
            <div className='scrolling'>

            
              {option === 'tasks' && Array.isArray(todos) &&
  todos.map((todo, index) => (
    <Item 
      id={todo._id || index}
      key={todo._id || index}
      name={todo.name}
      description={todo.description}
      dueDate={todo.dueDate} />
  ))
}

        {option === 'goals' &&

          goals.map((goal, index) => (
            
            <Item 
            id = {goal._id || index} 
            key={goal._id || index} 
            name={goal.name} 
            description={goal.description} 
            dueDate={goal.dueDate}/>
          ))
        }
          </div>
          </Row>

        </Col>
      </Row>
    </Container>
        
    </div>
  );
}

export default App;
