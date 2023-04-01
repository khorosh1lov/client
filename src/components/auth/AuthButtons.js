import { Link } from "react-router-dom";
import "../../styles/SignUpForm.css";

function AuthButtons() {
  return (
    <div>
      <button className="m-2 btn btn-outline-warning me-3">
        <Link className="nav-link" to="/login">
          Log In
        </Link>
      </button>
      <button className="btn btn-warning">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>
      </button>
    </div>
  );
}

export default AuthButtons;
