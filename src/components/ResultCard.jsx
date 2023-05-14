import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button, Placeholder, Container } from "react-bootstrap";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((stored) => stored.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <>
      {movie.poster_path ? (
        <Card style={{ width: "9rem" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          />
          <Card.Body>
            <Button
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
              variant="primary"
            >
              Add to watchlist
            </Button>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {movie.release_date.substring(0, 4)}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "9rem" }}>
          <Card.Img variant="top" src="https://placekitten.com/200/300" />
          <Card.Body>
            <Placeholder.Button variant="primary" xs={6} />
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ResultCard;
