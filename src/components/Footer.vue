<template>
  <div class="footer">
    <div class="top">
      <div class="left">
        <img src="@/assets/img/colored_logo_bold.svg" alt="Website logo">
      </div>
      <div class="right">
        <img src="@/assets/img/facebook.svg" alt="facebook logo">
        <img src="@/assets/img/twitter.svg" alt="twitter logo">
        <img src="@/assets/img/youtube.svg" alt="youtube logo">
        <img src="@/assets/img/instagram.svg" alt="instagram logo">
      </div>
    </div>
    <div class="bottom">
      <span>© Copyright Clinical Scholar</span>
      <span>|</span>
      <span>Powered by Qunoid Business Solutions</span>
    </div>
  </div>   
</template>

<script>

export default {
  name: "Footer",

}
</script>

<style scoped>

  .footer {
    width: 100%;
    height: 19.5rem;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 5;
  }

  .top {
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top:after {
    content: "";
    width: 95%;
    height: 2px;
    background-color: #ebebeb;
    position: absolute;
    bottom: -4px;
    margin-left: 2.5%;
  }

  .top > * {
    margin: auto 2rem;
  }

  .top .left img {
    height: 3rem;
  }

  .top .right {
    width: 18rem;
    display: flex;
    justify-content: space-between;
  }

  .top .right > * {
    width: 2.7rem;
    height: 2.7rem;
  }

  .bottom {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bottom span {
    display: inline-block;
    position: relative;
    top: 0.5rem;
    margin: auto 1rem;
    color: #626262;
  }


</style>