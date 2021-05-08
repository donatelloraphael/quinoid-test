<template>
  <div class="container">
    <div class="home-graphics"></div>
    <div class="auth">
      <auth-card>
        <template>
          <h2>User Signup</h2>
          <form>
            <styled-input 
              name="email" 
              type="email" 
              v-model="email" 
              label="Your Email" 
              placeholder="Enter Your Email" 
              :errorMsg="emailError"
              spellcheck="false">
            </styled-input>

            <styled-input 
              name="password" 
              type="password" 
              v-model="password" 
              label="Password"
              placeholder="Enter Your Password"
              :errorMsg="passwordError">
            </styled-input>

            <styled-input 
              name="confirmPassword" 
              type="password" 
              v-model="confirmPassword" 
              label="Confirm Password" 
              placeholder="Confirm Password"
              :errorMsg="confirmPasswordError">
            </styled-input>

            <auth-button textContent="SIGN UP" @click.native="signup()"></auth-button>
            <p>
              <span>Already have an account? <router-link to="/signin">Sign In</router-link></span>
            </p>
          </form>
        </template>
      </auth-card>
     </div>
  </div>
</template>

<script>
  import AuthCard from "@/components/AuthCard.vue";
  import StyledInput from "@/components/StyledInput.vue";
  import AuthButton from "@/components/AuthButton.vue";

  export default {
    name: "Signup",
    components: {
      StyledInput,
      AuthButton,
      AuthCard,
    },
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
      }
    },
    watch: {
      email() {
        this.validateEmail();
      },
      password() {
        this.validatePassword();
      },
      confirmPassword() {
        this.validateConfirmPassword();
      }
    },
    methods: {
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
      validateFields() {
        this.validateEmail();
        this.validatePassword();
        this.validateConfirmPassword();
      },
      signup() {
        this.validateFields();
        
        if ((this.email && this.emailError) || (this.password && this.passwordError) || (this.confirmPassword && this.confirmPasswordError)) {
          console.log("FAIL")
          return;
        }
        console.log("Signing up");
      }
    },
  };
</script>

<style scoped>
  .home-graphics {
    width: 50%;
    height: 100%;
    background: url("../assets/img/signup.png") no-repeat scroll center;
    background-size: cover;
    display: inline-block;
  }

  .auth {
    width: 50%;
    height: 100%;
    float: right;
    position: relative;
    display: flex;
    align-content: center;
  }

</style>
  
