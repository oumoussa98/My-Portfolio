<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  components: { Header, Footer },
}
</script>
<style>
.app {
  max-width: 1400px;
  margin: 0 auto;
}
main {
  min-height: 88vh;
}
</style>
