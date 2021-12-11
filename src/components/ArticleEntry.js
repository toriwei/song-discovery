import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import Playlist from "./Playlist";

export default function ArticleEntry({ addArticle }) {
  const [artist, setArtist] = useState("");
  const [movie, setMovie] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState("");

  function getData() {
    console.log(artist);
    console.log(movie);
    const artistName = encodeURIComponent(
      document.querySelector("#artist_name").value
    );
    const movieName = encodeURIComponent(
      document.querySelector("#movie_name").value
    );
    setArtist(artistName.toLowerCase());
    setMovie(movieName.toLowerCase());
    const q = `${artistName}, ${movieName}`;
    const url = `https://ProxyForElenaAndTori.rtoal.repl.co/similar?q=${q}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      })
      .catch((e) => setData(null));
  }
  /**, [addArticle]); */

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!artist.trim() || !movie.trim()) {
      setError("Both input boxes must be filled");
    } else {
      addArticle({ artist, movie }).catch(() => {
        setError("playlist creation failed");
      });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Artist
        <input
          id="artist_name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        {/* part we deleted: onChange={(e) => setSong(e.target.value)} */}
        Movie
        <input
          id="movie_name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        {/**onChange={(e) => setMovie(e.target.value)} */}
        <button className="buttons" type="submit" onClick={getData}>
          Create Playlist
        </button>
      </form>
      {data ? <Playlist data={data} /> : ""}
    </div>
  );
}
