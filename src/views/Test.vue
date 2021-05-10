<template>
  <div class="container container-test">
    <Header></Header>
    <div class="test">

    </div>
    <Footer></Footer>
  </div>
</template>

 <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "Test",
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        
      }
    },
    created() {
      if (!this.$store.getters.getUser) {
        // this.$router.push("/login");
      }
    },
  };
 </script>
 
 <style scoped>
 .container-test {
   display: flex;
   flex-direction: column;
 }
  .test {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
 </style>