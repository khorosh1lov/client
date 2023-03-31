function ErrorPasswordLength({ password }) {
  return password.isTouched && password.value.length < 8 ? (
    <p className="fieldError">* Password should have at least 8 characters</p>
  ) : null;
}

export default ErrorPasswordLength;
