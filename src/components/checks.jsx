let errMsg;

const validateSignUp = (email, alert) => {
  // targeting all form fields
  const emailInput = document.querySelector("#email");

  if (!email) {
    alert.error("Please input your email address");
    emailInput.focus();
    errMsg = false;
  } else {
    alert.success("You've signed up successfully. Proceed to login");
    errMsg = true;
  }
  return errMsg;
};

export default validateSignUp;
