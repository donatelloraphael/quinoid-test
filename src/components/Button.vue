<template>
  <div :class="variant === 'primary' ? 'primary' : 'secondary'">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>

  export default {
    name: "Button",
    props: {
      variant: {
        type: String,
        default: "primary",
      },
    },
  };
</script>

<style scoped>

  div {
    height: 2.5rem;
    width: 9rem;
    font-size: 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .primary {
    background-color: #2B7DF7;
    color: white;
  }

  .secondary {
    background-color: transparent;
    color: #2B7DF7;
    border: 2px solid #2B7DF7;
  }

  .primary:hover {
    background-color: #0046af;
  }

  .secondary:hover {
    background-color: #c0d9ff;
  }
</style>