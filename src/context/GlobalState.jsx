import React, { createContext, useReduceer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

//state

const initialState = {
  watchlist: [],
  watched: [],
};

//context

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
