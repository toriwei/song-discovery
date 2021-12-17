export default function Article({ article, remover }) {
  return (
    <article>
      {!article ? (
        <p>No playlist selected</p>
      ) : (
        <section>
          <h2>{article.movie} and {article.artist}</h2>
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>

          {/* <h3 className="playlist">{article.data.map(a => <p key={a.Name}>{a.Name}</p>)}</h3> */}

          <button
            className="buttons"
            onClick={() => {
              remover(article.id);
            }}
          >
            Delete
          </button>
        </section>
      )}
    </article>
  );
}
/** deleted article body */
