 <template>
  <div class="button">
    <span>{{ textContent }}</span>
  </div>
</template>

<script>
  export default {
    name: "AuthButton",
    props: [
      "textContent",
    ],
  };
</script>

<style scoped>
  .button {
    width: 100%;
    background-color: #2B7DF7;
    height: 3rem;
    border-radius: 8.75px;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 1.5rem;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #2c70d5;
  }
</style>