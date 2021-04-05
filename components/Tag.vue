<template>
  <a class="tag">{{ name }}</a>
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>

<style>
.tag {
  padding: 0.5em 1em;
  border-radius: 15px;
  margin: 0 10px 0 0;
  color: white;
}
.tag:nth-of-type(1n + 1) {
  background: rgb(186, 8, 8);
  background: linear-gradient(
    90deg,
    rgba(186, 8, 8, 1) 0%,
    rgba(163, 117, 6, 1) 100%
  );
}
.tag:nth-of-type(2n + 1) {
  background: rgb(2, 11, 129);
  background: linear-gradient(90deg, rgb(156, 3, 87) 0%, rgb(5, 3, 148) 100%);
}
.tag:nth-of-type(3n + 1) {
  background: rgb(13, 128, 45);
  background: linear-gradient(90deg, rgb(4, 143, 78) 0%, rgb(3, 74, 107) 100%);
}
</style>
