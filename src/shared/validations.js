export default {
  validateEmail() {
    // eslint-disable-next-line
    const emailRegex = /^[a-zA-Z0-9-+\~_]+@[a-zA-Z0-9-+\~_]+\.[a-zA-Z0-9-+\~_]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailError = "Enter a valid email";
    } else {
      this.emailError = "";
    }
  },
  validatePassword() {
    if (this.password.length < 8) {
      this.passwordError = "Password must be longer than 8 characters";
    } else {
      this.passwordError = "";
    }
  },
  validateConfirmPassword() {
    if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = "Passwords do not match";
    } else {
      this.confirmPasswordError = "";
    }
  },
}
