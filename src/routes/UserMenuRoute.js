function UserMenuRoute() {
  const userName = localStorage.getItem("userName");

  return (
    <section className="m-5">
      <div className="col-md-8">
        <h2 className="mb-5">User Profile</h2>
        <h3 className="mb-5">Hello, {userName} </h3>
        <p className="mb-5">Orders history</p>
      </div>
    </section>
  );
}

export default UserMenuRoute;
