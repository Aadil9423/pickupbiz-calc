import { Card } from "react-bootstrap";

export const Calc = ({ header, title, desc }) => {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};
