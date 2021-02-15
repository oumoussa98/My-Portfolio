<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Header from './partials/Header'
export default {
  components: { Header },
  head: {
    bodyAttrs: {
      'data-dark': 'true',
    },
  },
}
</script>
<style></style>
