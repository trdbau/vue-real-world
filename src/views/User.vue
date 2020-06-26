<template>
  <div>
    <h1>Hello {{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: '',
    },
  },
};
</script>
