import React, { useState } from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import ResultCard from "./ResultCard";

const AddNew = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_API_KEY
      }&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <Container fluid>
      <Form className="text-center">
        <Form.Group className="mx-5 my-3">
          <Form.Control
            type="search"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          />
        </Form.Group>
        {results.length > 0 && (
          <Container fluid>
            <Row>
              {results.map((movie) => (
                <Col className="p-2" key={movie.id}>
                  <ResultCard movie={movie} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Form>
    </Container>
  );
};

export default AddNew;
