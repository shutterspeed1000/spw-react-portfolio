import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// fill in links with props from array
function Prjcard(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.sshot} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.desc}
      </Card.Text>
      <a href={props.link}>
      <Button variant="primary">Visit site</Button>
      </a>
    </Card.Body>
  </Card>
  );
}

export default Prjcard;
