export default function Article({ article, remover }) {
  return (
    <article>
      {!article ? (
        <p>Select a playlist to display</p>
      ) : (
        <section>
          <h2>
            {article.artist} and {article.movie}
          </h2>
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>
          <button
            className="buttons"
            onClick={() => {
              remover(article.id);
            }}
          >
            Delete
          </button>
          <h3 className="playlist">
            {article.data.map((a) => (
              <p key={a.Name}>{a.Name}</p>
            ))}
          </h3>
        </section>
      )}
    </article>
  );
}
/** deleted article body */
