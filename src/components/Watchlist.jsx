import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleMovie from "./SingleMovie";

function Watchlist() {
  return (
    <Container>
      <h1>Watchlist</h1>
      <SingleMovie />
    </Container>
  );
}

export default Watchlist;
