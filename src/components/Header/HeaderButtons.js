import { Link } from 'react-router-dom';

function HeaderButtons({ isLoggedIn, isAdmin, onLogout }) {
	if (isLoggedIn) {
		return (
			<div className="btn-group" role="group">
				{isAdmin && (
					<Link type="button" className="btn btn-outline-light" to="/admin">
						Admin Dashboard
					</Link>
				)}
				<Link type="button" className="btn btn-outline-warning" to="/user">
					Account
				</Link>
				<Link type="button" className="btn btn-outline-danger" to="/" onClick={onLogout}>
					Log Out
				</Link>
			</div>
		);
	} else {
		return (
			<div className="btn-group" role="group">
				<Link type="button" className="btn btn-outline-warning" to="/login">
					Log In
				</Link>
				<Link type="button" className="btn btn-outline-warning" to="/signup">
					Sign Up
				</Link>
			</div>
		);
	}
}

export default HeaderButtons;
