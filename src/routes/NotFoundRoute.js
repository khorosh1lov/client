import { Link } from "react-router-dom";

function NotFoundRoute() {
  return (
    <main className="container">
      <div className="bg-light p-5 rounded">
        <h1>404</h1>
        <p>We can't find that page.</p>
        <Link className="text-dark" to="/">
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundRoute;
