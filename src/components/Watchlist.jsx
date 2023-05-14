import { useContext } from "react";
import { Link } from "react-router-dom";

import { Card, Button, Row, Col, Container, Alert } from "react-bootstrap";
import MovieCard from "./MovieCard";

import { GlobalContext } from "../context/GlobalState";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <Container fluid>
        <h1>My watchlist</h1>
        {watchlist.length > 0 ? (
          <Row xs={1} sm={2} md={4} lg={6} className="g-3 p-3">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} type="watchlist" movie={movie} />
            ))}
          </Row>
        ) : (
          <Alert variant="dark" className="text-center m-3">
            <h2>Your watchlist is empty</h2>
            <Button variant="success" className="m-3 btn-lg">
              <Link className="text-decoration-none text-white" to="/add">
                add new movie{" "}
              </Link>
            </Button>
          </Alert>
        )}
      </Container>
    </>
  );
}

export default Watchlist;
