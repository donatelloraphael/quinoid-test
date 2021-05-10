<template>
  <div>
    <div class="header">
      <img class="logo" src="@/assets/img/colored_logo.svg" alt="website logo">
      <h1>EXAM CATEGORY: {{ $store.getters.getCategory.toUpperCase() }}</h1>
      <div class="right-nav">
        <img src="@/assets/img/notification.svg" alt="notification icon">
        <img src="@/assets/img/pull_down.svg" alt="menu icon">
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: "Header",
  components: {
  }
}
</script>

<style scoped>
  .header {
    height: 5rem;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 5;
  }

  .header > * {
    margin: auto 2rem;
  }

  .logo {
    height: 2rem;
    width: 8rem;
  }

  h1 {
    color: #333333;
    font-size: 1.8rem;
  }

  .right-nav img {
    width: 2rem;
    height: 2rem;
    margin: auto 0.3rem;
    cursor: pointer;
  }
</style>
