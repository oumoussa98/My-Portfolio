<template>
  <div class="about">
    <div class="about__info">
      <h1 class="about__title">brief history about me</h1>
      <h3 class="about__name">{{ data.name }}</h3>
      <p class="about__birth">Born in {{ data.birthDate }}</p>
      <p class="about__history" v-html="data.history"></p>
    </div>
    <div class="about__image">
      <a href="images/ourika.jpg" target="_blank">
        <img class="image" src="images/ourika.jpg" alt="my village picture" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {},
  }),
  async fetch() {
    this.data = (await this.$content('about-me').fetch())[0]
  },
}
</script>

<style lang="scss">
.about {
  max-width: 1200px;
  // background: rgba(25, 51, 70, 0.2);
  margin: 50px auto 20px auto;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  transition: background 0.6s;
  &__info {
    max-width: 600px;
    margin: 0 0 20px 0;
  }
  &__image {
    position: relative;
    max-width: 500px;
    height: 400px;
    background: blueviolet;
    border-radius: 10px;
    box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.2);

    &:hover {
      &::after {
        background: transparent;
        z-index: -1;
      }
    }
    .image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      object-position: center center;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      top: 0;
      right: 0;
      background: rgba(23, 45, 63, 0.6);
      z-index: 1;
      transition: all 0.3s;
    }
  }
  &__title {
    margin: 0 0 30px 0;
    font-size: 40px;
  }
  &__name {
    margin: 0 0 5px 0;
    font-size: 26px;
  }
  &__birth {
    margin: 0;
    font-size: 20px;
  }
  &__history {
    margin: 0;
    font-size: 20px;
  }
}
body[data-light='true'] {
  .about {
    background: transparent;
  }
}
</style>
