import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch, useSelector} from 'react-redux';
import { removeTodo,  addTodo } from '../../reducers/todoSlice';
import { useRef } from 'react';
import { removeGoal, addGoalAsync } from '../../reducers/goalSlice';
import { nanoid } from '@reduxjs/toolkit';


function Formulario() {

const dispatch = useDispatch();
const option = useSelector((state) => state.options.value);

const inputRefName = useRef();
const inputRefDescription = useRef();
const inputRefDueDate = useRef();
/*
  const addItem = (e) => {
    e.preventDefault();   
    dispatch(addTodo({
    "name":inputRefName.current.value,
    "description":inputRefDescription.current.value,
    "dueDate":inputRefDueDate.current.value
  }));
    console.log("addItem");
  }*/
 const handleSubmit = (e) => {
    e.preventDefault(); // prevenir recarga

    const item = {
      name: inputRefName.current.value,
      description: inputRefDescription.current.value,
      dueDate: inputRefDueDate.current.value,
    };

    
    if (option === 'tasks') {
      dispatch(addTodo({
      ...item,
      _id: nanoid()
    }));
      console.log("Task agregada:", item);
    } else if (option === 'goals') {
       dispatch(addGoalAsync(item)); // Aquí usas el thunk que hace la llamada al backend
  console.log("Goal agregada:", item);
    }


 // Limpiar los campos (opcional)
    inputRefName.current.value = '';
    inputRefDescription.current.value = '';
    inputRefDueDate.current.value = '';
  }
  
  return (
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" className="input-gray" ref={inputRefName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea"  className="input-gray" rows={3} ref={inputRefDescription}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date"  className="input-gray"ref={inputRefDueDate}/>
      </Form.Group>
      <Button variant="info" className="button-color" type="submit">
        Add {option === 'tasks' ? 'Task' : 'Goal'}

      </Button>
    </Form>
  );
}

export default Formulario;

