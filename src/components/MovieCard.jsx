import React from "react";
import { Col, Card, Button, ButtonGroup } from "react-bootstrap";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
        <MovieControls type={type} movie={movie} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movie.release_date.substring(0, 4)}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
