import "../styles/Header.css";

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
			<nav className="navbar navbar-expand-lg bg-dark fixed-top">
				<div className="container">
					<Link className="navbar-brand text-warning fs-2" to="/">
						DoDelivery
					</Link>
					<div className="d-flex flex-row justify-content-end">
						{localStorage.getItem('isLoggedIn') === 'true' ? (
							<div class="btn-group" role="group">
								{localStorage.getItem('role') === 'admin' ? (
									<Link type="button" className="btn btn-outline-light" to="/admin">
										Admin Dashboard
									</Link>
								) : null}
								<Link type="button" className="btn btn-outline-warning" to="/user">
									User Menu
								</Link>
								<Link type="button" className="btn btn-outline-danger" to="/" onClick={handleLogout}>
									Log Out
								</Link>
								{/* <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>
									Log Out
								</button> */}
							</div>
						) : (
							<div className="d-flex justify-content-end">
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
