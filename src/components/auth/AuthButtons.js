import { Link } from "react-router-dom";
import "../../styles/SignUpForm.css";

function AuthButtons() {
  return (
    <div>
      <button className="btn btn-outline-success me-3">
        <Link className="nav-link text-warning" to="/auth/login">
          Log In
        </Link>
      </button>
      <button className="btn btn-success">
        <Link className="nav-link text-warning" to="/signup">
          Sign Up
        </Link>
      </button>
    </div>
  );
}

export default AuthButtons;
