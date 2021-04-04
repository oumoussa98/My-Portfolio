<template>
  <div class="blog">
    <Post :post="{}" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Oumoussa | Blog',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to my blog where i share my experience on building stuff and solving problems',
      },
    ],
  },
}
</script>

<style lang="scss">
.blog {
  padding: 2rem 4rem;
}
</style>
