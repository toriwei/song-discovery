export default function Article({ article, remover }) {
  return (
    <article>
      {!article ? (
        <p>No playlist selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>
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
