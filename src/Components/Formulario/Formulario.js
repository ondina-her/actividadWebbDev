import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch } from 'react-redux';
import { removeTodo,  addTodo } from '../../reducers/todoSlice';
import { useRef } from 'react';

function Formulario() {

const dispatch = useDispatch();
const inputRefName = useRef();
const inputRefDescription = useRef();
const inputRefDueDate = useRef();
const addItem = (e) => {
    e.preventDefault();   
    dispatch(addTodo({
    "name":inputRefName.current.value,
    "description":inputRefDescription.current.value,
    "dueDate":inputRefDueDate.current.value
  }));
    console.log("addItem");
  }
 
  return (
    <Form>
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
      <Button variant= "info" className="button-color" type="submit" onClick={addItem} >
        Add goal
      </Button>
    </Form>
  );
}

export default Formulario;