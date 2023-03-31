function ErrorPasswordMatch({ password, passwordConfirmation }) {
  return password.value.length >= 8 &&
    passwordConfirmation.value.length >= 8 &&
    password.value !== passwordConfirmation.value ? (
    <p className="fieldError">* Passwords does not match</p>
  ) : null;
}

export default ErrorPasswordMatch;
