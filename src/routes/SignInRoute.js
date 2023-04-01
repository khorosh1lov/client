import SignInForm from "../components/auth/SignInForm";

function SignInRoute() {
  return (
    <section className="m-5 d-flex justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-5">Welcome back!</h2>
        <SignInForm />
      </div>
    </section>
  );
}

export default SignInRoute;
