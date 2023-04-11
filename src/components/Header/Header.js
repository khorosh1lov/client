import "./Header.css";

import { Link, useNavigate } from "react-router-dom";

import HeaderButtons from './HeaderButtons';

function Header() {
	const navigate = useNavigate();
	const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
	const isAdmin = localStorage.getItem('role') === 'admin';

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.setItem('isLoggedIn', 'false');
		localStorage.removeItem('userName');
		localStorage.removeItem('userId');
		localStorage.removeItem('role');
		localStorage.removeItem('userEmail');

		navigate('/', { replace: true });
	};

	return (
		<header aria-label="Site Header">
			<nav className="navbar navbar-expand-lg bg-dark fixed-top">
				<div className="container">
					<Link className="navbar-brand text-warning fs-2" to="/">
						DoDelivery
					</Link>
					<div className="d-flex flex-row justify-content-end">
						<HeaderButtons isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
