import SignUpForm from "../components/Auth/SignUpForm";

function SignUpRoute() {
  return (
		<div className="container">
			<section className="m-5 d-flex justify-content-center ">
				<div className="col-md-5">
					<h2 className="mb-5">Welcome to Delivery App!</h2>
					<SignUpForm />
				</div>
			</section>
		</div>
  );
}

export default SignUpRoute;
