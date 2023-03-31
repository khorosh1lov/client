//import { BsFacebook, BsApple, BsGoogle } from "react-icons/bs"; 
//-------------BAD LIBRARY---------------//

import { IconContext } from "react-icons";

function LoginWithThirdParty() {
  return (
    <>
      <div className="col-md-8">
        <hr></hr>
      </div>
      <button type="submit" className="col-md-8 mb-2 btn btn-info text-light">
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "1.1em",
          }}
        >
          {/* <BsGoogle /> */}
        </IconContext.Provider>{" "}
        Continue with Google
      </button>
      <button
        type="submit"
        className="col-md-8 mb-2 btn btn-primary text-light"
      >
        {/* <BsFacebook /> */} Continue with Facebook
      </button>
      <button type="submit" className="col-md-8 mb-2 btn btn-dark text-light">
        {/* <BsApple /> */} Continue with Apple
      </button>
    </>
  );
}
export default LoginWithThirdParty;
