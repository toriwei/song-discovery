import Article from "./Article";
import ArticleEntry from "./ArticleEntry";

export default function Nav({ articles, setArticle }) {
  return (
    <nav className="Art">
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.artist} and {a.movie}
            </p>
          ))}
    </nav>
  );
  /** playlist name (past searches) */
}
