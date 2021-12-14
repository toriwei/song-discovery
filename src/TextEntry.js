import { useState } from "react";

export default function ArticleEntry({ addArticle }) {
  const [songTitle, setSongTitle] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both titles must be supplied");
    } else {
      addArticle({ title, body });
    }
  }

  return (
    <div>
      {" "}
      <p className="entry">
        <form onSubmit={submit}>
          {error && <p className="error">{error}</p>}
          Song Title
          <input
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
          Movie Title
          <textarea
            rows="8"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          ></textarea>
          <button type="submit">
            <span>Create</span>
          </button>
        </form>
      </p>
    </div>
  );
}
