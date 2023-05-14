import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, ButtonGroup } from "react-bootstrap";
import EditMovieModal from "./EditMovieModal";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
    editMovie,
  } = useContext(GlobalContext);

  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(movie.title);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleEdit = (updatedMovie) => {
    editMovie(updatedMovie);
    setEditMode(false);
  };

  return (
    <div>
      <EditMovieModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        movie={movie}
        editMovie={editMovie}
      />
      {type === "watchlist" && (
        <>
          <div className="d-flex flex-column justify-content-center">
            <Button
              onClick={() => addMovieToWatched(movie)}
              variant="secondary"
              className="m-1"
            >
              Mark as watched
            </Button>
            <ButtonGroup size="sm">
              <Button
                variant="warning"
                className="m-1 "
                onClick={handleShowEditModal}
              >
                Edit
              </Button>
              <Button
                onClick={() => removeMovieFromWatchlist(movie.id)}
                variant="danger"
                className="m-1 "
              >
                X
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}

      {type === "watched" && (
        <div className="d-flex flex-column justify-content-center">
          <Button
            onClick={() => moveToWatchlist(movie)}
            variant="secondary"
            className="m-1"
          >
            Mark as not watched
          </Button>
          <ButtonGroup size="sm">
            <Button
              variant="warning"
              className="m-1"
              onClick={handleShowEditModal}
            >
              Edit
            </Button>
            <Button
              onClick={() => removeFromWatched(movie.id)}
              variant="danger"
              className="m-1 "
            >
              X
            </Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
};

export default MovieControls;
