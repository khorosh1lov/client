import SignUpForm from "../components/auth/SignUpForm";

function SignUpRoute() {
  return (
    <section className="m-5 d-flex justify-content-center ">
      <div className="col-md-8">
        <h2 className="mb-5">Welcome to Delivery App!</h2>
        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUpRoute;
