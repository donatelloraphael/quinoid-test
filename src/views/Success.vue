 <template>
   <div class="container">
     <h1>Successfully created the account. Sign in to access the test...</h1>
   </div>
 </template>

 <script>
  export default {
    mounted() {
      setTimeout(() => {
        this.$router.push("/login");
      }, 2000);
    }
  };
 </script>

 <style scoped>
   .container {
     display: flex;
     align-content: center;
     justify-content: center;
   }
 </style>
 