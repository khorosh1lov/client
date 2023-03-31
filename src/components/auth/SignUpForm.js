import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/SignUpForm.css";
import Input from "../forms/Input";
import TelInput from "../forms/TelInput";
import ErrorRequiredMessage from "../forms/ErrorRequiredMessage";
import ErrorPasswordLength from "../forms/ErrorPasswordLength";
import ErrorPasswordMatch from "../forms/ErrorPasswordMatch";
import LoginWithThirdParty from "../forms/LogInWithThirdParty";

function SignUpForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
  });
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState({
    value: "",
    isTouched: false,
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email.value);
  }

  const getIsFormValid = () => {
    return (
      firstName.value.length >= 1 &&
      lastName.value.length >= 1 &&
      isValidEmail(email) &&
      password.value.length >= 8 &&
      password.value === passwordConfirmation.value
    );
  };

  const clearForm = () => {
    setFirstName({ value: "", isTouched: false });
    setLastName({ value: "", isTouched: false });
    setPhone("");
    setEmail({ value: "", isTouched: false });
    setPassword({ value: "", isTouched: false });
    setPasswordConfirmation({ value: "", isTouched: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: `${firstName.value} ${lastName.value}`,
      phone: phone,
      email: email.value,
      password: password.value,
    };

    await axios
      .post("https://deliveryapp-sever.herokuapp.com/auth/signup", userData)
      .then((response) => {
        console.log(response.status, response.data);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", response.data.user.name);
        clearForm();
        navigate("/usermenu", { replace: true });
      })
      .catch((err) => {
        localStorage.setItem("isLoggedIn", "false");
        if (err.response) {
          console.log(err.response);
          console.log("Server responded");
        } else if (err.request) {
          console.log("network error");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <section>
      <form className="row g-2" onSubmit={handleSubmit}>
        <Input
          label="First Name"
          type="text"
          value={firstName.value}
          onChange={(e) => {
            setFirstName({ ...firstName, value: e.target.value });
          }}
          onBlur={() => {
            setFirstName({ ...firstName, isTouched: true });
          }}
        />
        <ErrorRequiredMessage label="First Name" value={firstName} />

        <Input
          label="Last Name"
          type="text"
          value={lastName.value}
          onChange={(e) => {
            setLastName({ ...lastName, value: e.target.value });
          }}
          onBlur={() => {
            setLastName({ ...lastName, isTouched: true });
          }}
        />
        <ErrorRequiredMessage label="Last Name" value={lastName} />

        <TelInput
          label="Telephone"
          phone={phone}
          setPhone={setPhone}
        ></TelInput>

        <Input
          label="Email"
          type="email"
          value={email.value}
          onChange={(e) => {
            setEmail({ ...email, value: e.target.value });
          }}
          onBlur={() => {
            setEmail({ ...email, isTouched: true });
          }}
        />
        <ErrorRequiredMessage label="Email" value={email} />

        <Input
          label="Password"
          type="password"
          value={password.value}
          onChange={(e) => {
            setPassword({ ...password, value: e.target.value });
          }}
          onBlur={() => {
            setPassword({ ...password, isTouched: true });
          }}
        />

        <ErrorPasswordLength password={password} />

        <Input
          label="Password Confirmation"
          type="password"
          value={passwordConfirmation.value}
          onChange={(e) => {
            setPasswordConfirmation({
              ...passwordConfirmation,
              value: e.target.value,
            });
          }}
          onBlur={() => {
            setPasswordConfirmation({
              ...passwordConfirmation,
              isTouched: true,
            });
          }}
        />
        <ErrorRequiredMessage
          label="Password Confirmation"
          value={passwordConfirmation}
        />
        <ErrorPasswordMatch
          password={password}
          passwordConfirmation={passwordConfirmation}
        />

        <div className="col-md-8 ">
          By tapping “Sign Up” or “Continue with Google, Facebook, or Apple,”
          you agree to Delivery’s App Terms and Conditions and Privacy Policy.
        </div>
        <button
          type="submit"
          className="col-md-8 mt-3 btn btn-danger"
          disabled={!getIsFormValid()}
        >
          Sign Up
        </button>
        <LoginWithThirdParty />
        <div className="col-md-8 ">
          <p className="text-muted">
            Already have an account?{" "}
            <Link className="text-dark" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
