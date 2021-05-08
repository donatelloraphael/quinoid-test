<template>
  <div class="form-group">
    <label :for="name" class="form-label">{{ label }}</label>
    <input :type="type" :class="{ 'form-field': true, 'form-field-error': errorMsg }" v-model="textContent" :placeholder="placeholder" :name="name" :id="name" required>
    <div class="error" v-if="errorMsg">{{ errorMsg }}</div>
  </div>
</template>

<script>
  export default {
    name: "StyledInput",
    props: {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String
      },
      value: {
        type: String,
        default: "",
      },
      errorMsg: {
        type: String,
        default: "",
      },
    },
    model: {
      prop: "value",
      event: "changeValue",
    },
    data() {
      return {
        textContent: "",
      }
    },
    watch: {
      textContent() {
        this.$emit("changeValue", this.textContent);
      }
    },
  };
</script>

<style scoped>
  .form-group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
    height: 5rem;
  }

  .form-label {
    font-size: 0.8rem;
    color: #82869A;
  }

  .form-field {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #ebebeb;
    outline: 0;
    font-size: 1.3rem;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form-field::placeholder {
    color: #82869A;
    opacity: 50%;
    font-size: 0.9rem;
  }

  .form-field:focus {
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, #2b7fd7, #6da8ff);
    border-image-slice: 1;
  }
 
  /* reset input */
  .form-field:required, .form-field:invalid { 
    box-shadow:none;
  }

  .form-field-error {
    border-bottom-color: red;
  }

  .error {
    font-size: 0.8rem;
    color: red;
    margin-top: 5px;
  }
</style>

