<template>
  <div class="card">
    <slot></slot>  
  </div>
</template> 

<script>
  export default {
    name: "AuthCard",
  };
</script>

<style scoped>
  .card {
    min-width: 27rem;
    min-height: 26rem;
    max-width: 80%;
    box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    margin: auto;
    padding: 3.5rem 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }

  .card h2 {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #282C40;
  }

  .card p {
    margin: 1rem auto 0.6rem;
    font-size: 0.8rem;
    color: #82869A;
    opacity: 85%;
    display: flex;
    justify-content: center;
  }

  .card a {
    color: #82869A;
    font-weight: 700;
    text-decoration: none;
  }
</style>
