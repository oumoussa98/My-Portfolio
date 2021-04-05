<template>
  <div class="post">
    <div class="content">
      <h2>Create a content driven portfolio with nuxjs</h2>
      <p class="soon">soon</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut
        fugiat sequi ipsa consequatur quis pariatur doloremque, impedit, sint
        exercitationem ex temporibus porro esse voluptas qui, in reprehenderit
        dolores quot...
      </p>
      <div class="tags">
        <Tag name="Nuxt" />
        <Tag name="Content" />
        <Tag name="Portfolio" />
      </div>
      <div class="date">
        <p>July 17, 2020 - 5 min read</p>
      </div>
    </div>
    <div class="image">
      <img
        src="/images/nuxtjs.jpg"
        alt="Picture with Nuxtjs text and its logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  transition: all 0.25s;
  background: var(--bg-secondary);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%), 0 1px 2px rgb(0 0 0 / 30%);
  cursor: pointer;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px rgba(#000000, 0.3);
  }
  .image {
    width: 36%;
    height: 300px;
    border-radius: 10px;
    padding: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      object-position: center center;
    }
  }
  .content {
    position: relative;
    border-radius: 10px;
    width: 64%;
    padding: 1em 2em 0em 2em;

    h2 {
      font-size: 1.8rem;
      font-weight: 300;
      line-height: 1.5;
      margin: 0 0 20px 0;
    }
    p {
      font-weight: 500;
      line-height: 1.5;
      margin: 0 0 20px 0;
    }
    .soon {
      top: 13px;
      left: -2px;
      transform: rotate(-45deg);
      padding: 0px 10px;
      border-radius: 15px;
      background: #06da88;
      position: absolute;
      color: rgb(255, 255, 255);
    }
    .tags {
      padding: 0.5em 0;
    }
    .date {
      position: absolute;
      bottom: 0px;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    max-width: 600px;
    padding: 0 0 1em 0;
    .content {
      width: 100%;
      .date {
        position: static;
        margin-top: 1em;
      }
    }
    .image {
      width: 100%;
      height: 380px;
    }
  }
}
</style>
