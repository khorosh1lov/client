import SignInForm from "../components/auth/SignInForm";

function SignInRoute() {
  return (
		<div className="container">
			<section className="m-5 d-flex justify-content-center">
				<div className="col-md-5">
					<h2 className="mb-5">Welcome back!</h2>
					<SignInForm />
				</div>
			</section>
		</div>
  );
}

export default SignInRoute;
