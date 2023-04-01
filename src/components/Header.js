import { Link, useNavigate } from "react-router-dom";
import AuthButtons from "./auth/AuthButtons";

function Header() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");

    navigate("/", { replace: true });
  };

  return (
    <header aria-label="Site Header">
      <nav className="p-2 navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ms-5">
          <Link className="navbar-brand text-warning" to="/">
            <h1>Delivery App</h1>
          </Link>
          <div className="d-flex flex-row justify-content-end">
            {localStorage.getItem("role") === "admin" ? (
              <div>
                <button className="btn btn-light me-3">
                  <Link className="nav-link text-dark" to="/admin">
                    Admin Dashboard
                  </Link>
                </button>
              </div>
            ) : null}

            {localStorage.getItem("isLoggedIn") === "true" ? (
              <div className="me-3">
                <button className="btn btn-warning me-3">
                  <Link className="nav-link text-dark" to="/user">
                    User Menu
                  </Link>
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-end me-4">
                <AuthButtons />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
