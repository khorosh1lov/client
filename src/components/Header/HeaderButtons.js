import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import CartIcon from "../Cart/cart.svg";
import {useCart} from "../withCart";

function HeaderButtons({ isLoggedIn, isAdmin, onLogout }) {
	const {openCart, cartQuantity} = useCart();
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
				{cartQuantity > 0 && (
					<Button
						onClick={openCart}
						style={{ width: "3rem", height: "3rem", position: "relative"}}
						variant="outline-primary"
						className="btn btn-outline-warning bi bi-cart"


					>
						<i className="fas fa-cart-plus"><img src={CartIcon} alt="" width="20" style={{marginBottom: ".5rem"}}/></i>
						<div
							className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
							style={{
								color: "white",
								width: "1.5rem",
								height: "1.5rem",
								position: "absolute",
								bottom: 0,
								right: 0,
								transform: "translate(25%, 25%)",
							}}
						>
							{cartQuantity}
						</div>
					</Button>)}
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
				{cartQuantity > 0 && (
				<Button
					onClick={openCart}
					style={{ width: "3rem", height: "3rem", position: "relative"}}
					variant="outline-primary"
					className="btn btn-outline-warning bi bi-cart"


				>
					<i className="fas fa-cart-plus"><img src={CartIcon} alt="" width="20" style={{marginBottom: ".5rem"}}/></i>
					<div
						className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "translate(25%, 25%)",
						}}
					>
						{cartQuantity}
					</div>
				</Button>)}
			</div>
		);
	}
}

export default HeaderButtons;
