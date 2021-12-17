import { SignIn } from "../services/authService";
import "./Homepage.css";
import "./App.css";
export default function Homepage() {
  return (
    <div className="Homepage">
      {/* <nav className="homepageNav">Sign in to view articles!</nav> */}

      <div className="title">
        <h1>Jukebox</h1>
        <SignIn />
      </div>
      <footer>
        <p>
          ✼ Unique playlist generator determined by artist and film preferences
          ✼
        </p>
      </footer>
    </div>
  );
}
