module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Please enter a username.';
  }
  if (email.trim() === '') {
    errors.email = 'Please enter an email address.';
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Please enter a valid email address.';
    }
  }
  if (password === '') {
    errors.password = 'Please enter a password.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Please match the passwords.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
