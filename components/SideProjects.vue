<template>
  <section class="side-projects">
    <h1 class="display-3">Side Projects</h1>

    <div class="side-projects__container">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="side-projects__card"
      >
        <div class="side-projects__card__img-container">
          <img
            class="side-projects__card__img-container__img"
            :src="project.img"
            alt="project image"
          />
        </div>
        <div class="side-projects__card__desc">
          <div class="side-projects__card__desc__links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="github"
            >
              <VIcon scale="1.5" name="bi-github" />
            </a>
            <a
              v-if="project.codepen"
              :href="project.codepen"
              target="_blank"
              class="codepen"
            >
              <VIcon scale="1.5" name="si-codepen" />
            </a>
            <a
              v-if="project.netlify"
              :href="project.netlify"
              target="_blank"
              class="netlify"
            >
              <VIcon scale="1.5" name="si-netlify" color="#3398DB" />
              <span class="netlify__preview">Preview</span>
            </a>
          </div>
          <h5 style="margin-bottom: 4px">{{ project.title }}</h5>
          <span style="text-align: center"> {{ project.description }} </span>
        </div>
      </div>
      <div v-if="projects.length < length" class="load-more-container">
        <span class="load-more-btn" @click="$fetch">
          Load more
          <VIcon v-if="!loading" name="ri-loader-fill" />
          <VIcon v-else name="ri-loader-fill" animation="spin" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [],
    length: null,
    step: 3,
    skip: 0,
    loading: false,
  }),
  async fetch() {
    this.loading = true
    const projects = await this.$content('side-projects')
      .only(['title', 'description', 'img', 'github', 'netlify', 'codepen'])
      .sortBy('createdAt')
      .skip(this.skip)
      .limit(this.step)
      .fetch()

    this.projects.push(...projects)
    this.skip += this.step
    this.loading = false
    if (!this.length) {
      this.length = (await this.$content('side-projects').fetch()).length
      this.step = 2
    }
  },
}
</script>

<style lang="scss">
.side-projects {
  min-height: 100vh;
  padding: 10px 50px;
  .display-3 {
    text-align: center;
    letter-spacing: 3px;
    text-shadow: 4px 4px 0px var(--bg-secondary), 7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  a {
    color: inherit;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }
  &__card {
    width: 600px;
    height: 300px;
    margin: 40px 0 50px 0px;
    background: var(--bg-secondary);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4);
    position: relative;

    &__img-container {
      width: 90%;
      height: 90%;
      border-radius: 10px;
      transition: all 0.25s;
      padding: 4px 0;
      position: absolute;
      overflow: hidden;
      left: 5%;
      top: 5%;
      background: rgba(5, 223, 114, 0.3);
      background: linear-gradient(
        to right,
        rgba(5, 223, 114, 0.5),
        rgba(4, 200, 226, 0.5)
      );
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #2f495e65;
        transition: 0.4s;
      }
      &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
        border-radius: 10px;
        @media screen and (max-width: 700px) {
          object-fit: cover;
        }
      }

      &:hover {
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        &::before {
          background: transparent;
        }
      }
    }
    &__desc {
      width: 300px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 30px 20px 20px 20px;
      background: var(--bg-secondary);
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 25%;
      top: -10%;
      &__links {
        position: absolute;
        top: -10%;
        left: -5%;
        margin: 0 0 0 40px;
      }
      .github {
        cursor: pointer;
        margin: 0;
      }
      .codepen {
        cursor: pointer;
        margin: 0 0 0 20px;
      }
      .netlify {
        cursor: pointer;
        margin: 0 0 0 20px;
        position: relative;
        &:hover {
          .netlify__preview {
            border: unset;
            clip: unset;
            height: unset;
            margin: inset;
            overflow: unset;
            width: unset;
          }
        }
        &__preview {
          /* for screen readers */
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          width: 1px;
          /* end for screen readers */
          padding: 4px 10px;
          background: #223546;
          color: white;
          border-radius: 6px;
          position: absolute;
          bottom: 200%;
          right: -80%;
          &::after {
            content: '';
            position: absolute;
            border-bottom: 15px solid #223546;
            border-right: 15px solid transparent;
            transform: rotate(-45deg);
            bottom: -7px;
            left: 40%;
          }
        }
      }

      @media screen and (max-width: 600px) {
        width: 80%;
        left: 10%;
      }
    }
  }

  &__card:nth-of-type(2n) {
    margin: 40px 0 50px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    &__card {
      margin: 40px 0 50px 0 !important;
    }
  }
  .load-more-container {
    width: 600px;
    margin: 40px 0 50px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .load-more-btn {
      padding: 10px 30px;
      border: none;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      background: rgba(5, 223, 114, 0.3);
      background: linear-gradient(to right, rgb(2, 146, 74), rgb(2, 128, 145));
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
