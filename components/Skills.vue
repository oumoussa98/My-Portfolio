<template>
  <section class="skills">
    <h1 class="display-3">Skills</h1>
    <div class="skills__desc">
      <h2 class="title">Programming languages</h2>
      <div class="programing-languages">
        <div v-for="(lang, i) in languages" :key="lang.name" class="lang">
          <div :class="'lang__title lang__title' + (i + 1)">
            <ClientOnly>
              <VIcon
                v-for="(icon, i) in lang.icons"
                id="icon"
                :key="i"
                :scale="lang.iconScale"
                :name="icon"
              />
            </ClientOnly>
            <span class="lang__name">{{ lang.name }}</span>
          </div>
          <span class="lang__desc">
            {{ lang.description }}
          </span>
        </div>
      </div>
      <div class="fullstack">
        <div class="frontend">
          <h2 class="title fullstack__title">Frontend development</h2>
          <div class="fullstack__container">
            <div class="fullstack__content">
              <div
                v-for="tech in frontend"
                :key="tech.name"
                class="frontend__tech fullstack__content__tech"
              >
                <a :href="tech.href" target="_blank">
                  <ClientOnly>
                    <VIcon
                      v-for="icon in tech.icons"
                      :key="icon"
                      scale="1.8"
                      :name="icon"
                      :color="tech.iconColor"
                    />
                  </ClientOnly>
                  <span class="fullstack__content__tech__name">
                    {{ tech.name }}
                  </span>
                </a>
                <span v-html="tech.description"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="backend">
          <h2 class="title fullstack__title">Backend development</h2>
          <div class="fullstack__container">
            <div class="fullstack__content">
              <div
                v-for="tech in backend"
                :key="tech.name"
                class="frontend__tech fullstack__content__tech"
              >
                <a :href="tech.href" target="_blank">
                  <ClientOnly>
                    <VIcon scale="2" :name="tech.icon" />
                  </ClientOnly>
                  <span class="fullstack__content__tech__name">
                    {{ tech.name }}
                  </span>
                </a>
                <span v-html="tech.description"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    languages: [],
    frontend: [],
    backend: [],
  }),
  async fetch() {
    const frontend = await this.$content('skills/frontend').fetch()
    const backend = await this.$content('skills/backend').fetch()
    const languages = await this.$content('skills/languages').fetch()

    this.languages = languages[0].languages
    this.frontend = frontend[0].frontend
    this.backend = backend[0].backend
  },
}
</script>
<style lang="scss">
.skills {
  min-height: 100vh;
  padding: 100px 20px 200px 20px;
  clip-path: polygon(100% 0%, 0% 10%, 0% 100%, 100% 90%);
  background: var(--bg-secondary);
  a {
    color: var(--color);
    text-decoration: underline;
  }
  .display-3 {
    text-align: center;
    letter-spacing: 3px;
    text-shadow: 4px 4px 0px var(--bg-secondary), 7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  &__desc {
    display: flex;
    flex-direction: column;
  }
  .title {
    margin: 30px auto 10px auto;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    width: 210px;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    animation: pulse 1s infinite;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 25px solid rgba(0, 0, 0, 0.2);
      border-right: 25px solid transparent;
      transform: rotate(-45deg);
      bottom: -12px;
      left: 42%;
    }
  }
  .programing-languages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 0 0;
    border-radius: 20px;
    position: relative;
    background: var(--bg-secondary);
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(5, 223, 114, 0.3);
      background: linear-gradient(
        to left,
        rgba(5, 223, 114, 0.4),
        rgba(4, 200, 226, 0.4)
      );
      z-index: -1;
      border-radius: 20px;
    }

    .lang {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 20px 0;
      padding: 10px 20px 20px 20px;
      border-radius: 20px;
      flex: 1 1 410px;
      flex: 0 1 410px;
      background: rgba(0, 0, 0, 0.1);

      &__name {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      &__title2 {
        margin: 14px 0 10px 0;
      }
      &__title1 {
        margin: 6px 0 0px 0;
      }
    }
  }
  .fullstack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &__title {
      width: 196px;
    }
    .frontend,
    .backend {
      flex: 1 1 46%;
      flex: 0 1 46%;
      @media screen and (max-width: 750px) {
        flex: 1 1 410px;
        flex: 0 1 410px;
      }
    }
    &__container {
      border-radius: 20px;
      margin: 32px 0 0 0;
      background: rgba(121, 6, 6, 0.1);
      border-radius: 20px;
      position: relative;
      background: var(--bg-secondary);

      &::after {
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: rgba(5, 223, 114, 0.3);
        background: linear-gradient(
          to right,
          rgba(5, 223, 114, 0.4),
          rgba(4, 200, 226, 0.4)
        );
        z-index: -1;
      }
    }
    &__content {
      padding: 10px 20px 10px 20px;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.1);
      &__tech {
        display: flex;
        align-items: center;
        margin: 15px 0;
        svg {
          margin: 0 8px;
        }
        &__name {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 160px 20px 200px 20px;
  }
}
</style>
