import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { removeTodo,  addTodo } from '../../reducers/todoSlice';

function Item(props) {

  const dispatch = useDispatch();
  const removeItem = (e) => {   
    e.preventDefault();   
    dispatch(removeTodo(props.name));
    console.log("removeItem");
  }
  
  const addItem = (e) => {
    e.preventDefault();   
    dispatch(addTodo({"name":props.name}));
    console.log("addItem");
  }

  return (
    <Card className='card-item'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <blockquote className="blockquote mb-0">
        </blockquote>
        <Card.Title>Description</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
            {props.description}
          </p>
        </blockquote>
        <Card.Title>Due date</Card.Title>
        <blockquote className="blockquote mb-0">
        <p>{props.dueDate ? props.dueDate : "No due date set"}</p>
        </blockquote>
        <Button variant="info"  className="me-2">Editar</Button>
        <Button variant="info"  onClick={removeItem}> Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;