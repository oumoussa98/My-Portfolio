<template>
  <div class="page404">
    <h1>Page Not Fount Error 404</h1>
    <p>
      Oops!! this page could not be found
      <br />Sorry but the page you looking for doesn't exist
    </p>
    <img
      class="img"
      alt="No data image"
      src="~/assets/images/404.svg"
      width="450"
    />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Oumoussa | 404 Not Found',
  },
}
</script>

<style>
.page404 {
  padding: 1rem;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.page404 h1,
p {
  padding: none;
  margin: 0 0 20px 0;
}
.page404,
img {
  padding: 0 30px;
}
</style>
