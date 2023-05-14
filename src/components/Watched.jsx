import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

import { Card, Button, Row, Col, Container, Alert } from "react-bootstrap";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <>
      <Container fluid>
        <h1>Watched Movies</h1>
        {watched.length > 0 ? (
          <Row xs={1} sm={2} md={4} lg={6} className="g-3 p-3">
            {watched.map((movie) => (
              <MovieCard key={movie.id} type="watched" movie={movie} />
            ))}
          </Row>
        ) : (
          <Alert variant="dark" className="text-center m-3">
            <h2>Your watched list is empty</h2>
            <Button variant="primary" className="m-3 btn-lg">
              <Link className="text-decoration-none text-white" to="/">
                check your Watchlist
              </Link>
            </Button>
          </Alert>
        )}
      </Container>
    </>
  );
};

export default Watched;
