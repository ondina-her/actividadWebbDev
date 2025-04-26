import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card className='card-item'>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum...
          </p>
        </blockquote>
        <Card.Title>Description</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
        </blockquote>
        <Card.Title>Due date</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
          Lorem ipsum dolor sit amet...
          </p>
        </blockquote>
        <Button variant="primary">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;