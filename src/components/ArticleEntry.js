import { useState } from "react";
import { auth } from "../firebaseConfig";

export default function ArticleEntry({ addArticle }) {
  const [song, setSong] = useState("");
  const [movie, setMovie] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!song.trim() || !movie.trim()) {
      setError("Both input boxes must be filled");
    } else {
      addArticle({ song, movie }).catch(() => {
        setError("playlist creation failed");
      });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Song
        <input value={song} onChange={(e) => setSong(e.target.value)} />
        Movie
        <input value={movie} onChange={(e) => setMovie(e.target.value)}></input>
        <button className="buttons" type="submit">
          Create Playlist
        </button>
      </form>
    </div>
  );
}
