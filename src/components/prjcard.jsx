import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// fill in links with props from array
function Prjcard(props) {
  return (
    <Card bg='dark' text="light" style={{ width: '25rem', height: '25rem'}}>
    <Card.Img variant='bottom' src={props.sshot} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.desc}
      </Card.Text>
      <a href={props.link}>
      <Button>Visit site</Button>
      </a>
    </Card.Body>
  </Card>
  );
}

export default Prjcard;
