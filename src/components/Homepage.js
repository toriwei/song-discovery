import { SignIn } from "../services/authService";
import "./Homepage.css";
import "./App.css";
export default function Homepage() {
  return (
    <div className="Homepage">
      {/* <nav className="homepageNav">Sign in to view articles!</nav> */}
      <article>
        <div className="title">
          <h1>Song Discovery</h1>
          <SignIn />
        </div>
      </article>
    </div>
  );
}
