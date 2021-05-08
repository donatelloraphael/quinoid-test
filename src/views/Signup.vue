<template>
  <div class="container">
    <div class="home-graphics"></div>
    <div class="auth">
      <auth-card>
        <template>
          <h2>User Signup</h2>
          <form @submit.prevent>
            <styled-input name="email" type="email" label="Your Email" placeholder="Enter Your Email"></styled-input>
            <styled-input name="password" type="password" label="Password" placeholder="Enter Your Password"></styled-input>
            <styled-input name="confirmPassword" type="password" label="Confirm Password" placeholder="Confirm Password"></styled-input>
            <auth-button textContent="SIGN UP"></auth-button>
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
  
