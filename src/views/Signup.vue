<template>
  <div class="container">
    <div class="home-graphics"></div>
    <div class="home-auth">
      <auth-card>
        <template>
          <h2>User Sign up</h2>
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
              <span>Already have an account? <router-link to="/login">Sign In</router-link></span>
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
  import validations from "@/shared/validations";

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
      validateFields() {
        this.validateEmail();
        this.validatePassword();
        this.validateConfirmPassword();
      },
      signup() {
        this.validateFields();

        if (this.emailError || this.passwordError|| this.confirmPasswordError) {
          return;
        }
        this.$store.commit("addUser", { email: this.email, password: this.password });
        this.$router.push("/success");
      }
    },
    created() {
      this.validateEmail = validations.validateEmail.bind(this);
      this.validatePassword = validations.validatePassword.bind(this);
      this.validateConfirmPassword = validations.validateConfirmPassword.bind(this);
    },
  };
</script>

<style>
  .home-graphics {
    width: 50%;
    height: 100%;
    background: url("../assets/img/signup.png") no-repeat scroll center;
    background-size: cover;
    display: inline-block;
  }

  .home-auth {
    width: 50%;
    height: 100%;
    float: right;
    position: relative;
    display: flex;
    align-content: center;
  }

</style>
  
