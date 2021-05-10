<template>
  <div class="container">
    <div class="home-graphics"></div>
    <div class="home-auth">
      <auth-card>
        <template>
          <h2>User Sign in</h2>
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
              name="examCategory"
              type="select"
              v-model="category"
              label="Exam Category" 
              placeholder="--Select your exam category--"
              :options="selectOptions"
              :errorMsg="categoryError">
            </styled-input>

            <div class="error" v-if="credentialError">Check username or password</div>

            <auth-button textContent="SIGN IN" @click.native="signin()"></auth-button>
            <p>
              <span>Don't have an account? <router-link to="/signup">Sign Up</router-link></span>
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
        category: "",
        emailError: "",
        passwordError: "",
        categoryError: "",
        selectOptions: ["Sports", "Arts", "History", "Physics"],
        credentialError: false,
      }
    },
    watch: {
      email() {
        this.validateEmail();
      },
    },
    methods: {
      validateFields() {
        this.validateEmail();
        this.validatePassword();
        this.validateCategory();
      },
      validatePassword() {
        if (this.password.length === 0) {
          this.passwordError = "Enter a password";
        } else {
          this.passwordError = "";
        }
      },
      validateCategory() {
         if (!this.category) {
          this.categoryError = "Select a category";
        } else {
          this.categoryError = "";
        }
      },
      signin() {
        this.credentialError = false;
        this.validateFields();

        if (this.emailError || this.passwordError || this.categoryError) {
          return;
        }
        this.$store.dispatch("login", { email: this.email, password: this.password });
        const user = this.$store.getters.getUser;
        if (user) {
          this.$store.commit("setCategory", this.category);
          this.$router.replace("/test");
        } else {
          this.credentialError = true;
        }
      }
    },
    created() {
      this.validateEmail = validations.validateEmail.bind(this);
    },
  };
</script>

<style scoped>
  .home-graphics {
    background: url("../assets/img/login.png") no-repeat scroll center;
    background-size: cover;
  }

  .error {
    font-size: 0.9rem;
    color: red;
  }
</style>
  
