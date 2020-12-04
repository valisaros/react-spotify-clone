import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from './spotify';
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue(); // With this we can pull everything from the Data Layer

  // useEffect - Run code based on a given condition
  useEffect(() => {
    // Set token (hash)
    const hash = getTokenFromResponse();
    window.location.hash = "";     // Hides the actual token from the url
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcNveg19Jgr6t").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

    }
  }, []);

  return (
    // BEM
    <div className="app">
      { token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
