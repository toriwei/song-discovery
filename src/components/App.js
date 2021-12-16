import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import Homepage from "./Homepage";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import {
  fetchArticles,
  createArticle,
  deleteArticle,
} from "../services/articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  // const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  // This is a trivial app, so all the articles fetched once, when
  // the app is loaded.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  // Update the "database" *then* update the internal React state.
  async function addArticle({ artist, movie, data }) {
    console.log("OOOOOOOOOOOO", artist, movie, data);
    let article = await createArticle({ artist, movie, data });
    setArticle(article);
    setArticles([article, ...articles]);
    // setWriting(false);
  }

  async function removeArticle(id) {
    await deleteArticle(id);
    setArticle(null);
    setArticles(articles.filter((a) => a.id !== id));
  }

  return (
    <div className="App">
      {user ? (
        <header>
          Song Discovery
          {/* <button className="buttons" onClick={() => setWriting(true)}>
            Search
          </button> */}
          <SignOut />
        </header>
      ) : (
        ""
      )}
      {/* change title later ^^^ */}

      {!user ? (
        <Homepage />
      ) : (
        <Nav articles={articles} setArticle={setArticle} />
      )}
      <ArticleEntry addArticle={addArticle} />
      <Article article={article} remover={removeArticle} />

      {/* {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} remover={removeArticle} />
      )} */}
    </div>
  );
}

/** commented out writingState */
