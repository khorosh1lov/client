import "../../styles/SignUpForm.css";

import { Link } from "react-router-dom";

function AuthButtons() {
  return (
		<div>
			<div class="btn-group" role="group">
				<Link type="button" className="btn btn-outline-warning" to="/login">
					Log In
				</Link>
        <Link type="button" className="btn btn-outline-warning" to="/signup">
          Sign Up
        </Link>
			</div>
		</div>
  );
}

export default AuthButtons;
