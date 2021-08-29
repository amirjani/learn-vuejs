<template>
  <my-button color="white" background="darkslateblue" disabled="true" />
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>

<style>
* {
  font-size: 40px;
}

button {
  margin: 5px;
}
</style>
