<template>
  <section class="skills">
    <h1 class="display-3">Skills</h1>
    <div class="skills__desc">
      <h2 class="title">Programming languages</h2>
      <div class="programing-languages">
        <div class="lang lang1">
          <div class="lang__title lang__title1">
            <VIcon id="icon" scale="4" name="vi-file-type-php3" />
            <span class="lang__name">PHP</span>
          </div>
          <span class="lang__desc">
            The first one I started with, I built some websites with it, Also I
            tried its laravel framework which I really liked even though I
            didn't like PHP syntax
          </span>
        </div>
        <div class="lang">
          <div class="lang__title lang__title2">
            <VIcon id="icon" scale="3" name="vi-file-type-c" />&
            <VIcon id="icon" scale="3" name="vi-file-type-cpp3" />
            <span class="lang__name">C and C++</span>
          </div>
          <span class="lang__desc">
            I started C++ at university first, but I learned more about it
            after, I also learned some C as well since C++ is a superset of C,
            whenever I get bored or not feeling good you'll find me playing with
            these languages
          </span>
        </div>
        <div class="lang">
          <div class="lang__title">
            <VIcon id="icon" scale="4" name="vi-file-type-js" />
            <span class="lang__name">Javascript</span>
          </div>
          <span class="lang__desc">
            Currently, trying to deep dive into it and get more comfortable with
            it and its ecosystem I like the idea of one codebase for multiple
            platforms it saves time and money and it fits nicely for small to
            medium projects
          </span>
        </div>
      </div>
      <div class="fullstack">
        <div class="frontend">
          <h2 class="title fullstack__title">Frontend development</h2>
          <div class="fullstack__container">
            <div class="fullstack__content">
              <div class="frontend__tech fullstack__content__tech">
                <span>
                  <VIcon scale="2" name="vi-file-type-html" />
                  <VIcon scale="2" name="vi-file-type-css" />
                  <a href="https://sass-lang.com/" target="_blank">
                    <VIcon scale="2" name="vi-file-type-scss" />
                  </a>

                  <span>
                    HTML, CSS and
                    <a href="https://sass-lang.com/" target="_blank">SASS</a>
                  </span>
                </span>
              </div>

              <div class="frontend__tech fullstack__content__tech">
                <a href="https://vuejs.org/" target="_blank">
                  <VIcon scale="2" name="vi-file-type-vue" />
                  <span class="fullstack__content__tech__name">Vuejs</span>
                </a>
                The Progressive JavaScript Framework
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://vuetifyjs.com/" target="_blank">
                  <VIcon scale="2" name="si-vuetify" color="#7BC6FF" />
                  <span class="fullstack__content__tech__name">Vuetifyjs</span>
                </a>
                Vue UI Library
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://getbootstrap.com/" target="_blank">
                  <VIcon scale="2" name="si-bootstrap" color="#7811F7" />
                  <span class="fullstack__content__tech__name">Bootstrap</span>
                </a>
                The most popular HTML, CSS, and JS library
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://gridsome.org/" target="_blank">
                  <VIcon
                    scale="1.8"
                    name="vi-file-type-gridsome"
                    color="#7BC6FF"
                  />
                  <span class="fullstack__content__tech__name">Gridsome</span>
                </a>
                A Jamstack framework for Vue.js
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://nuxtjs.org/" target="_blank">
                  <VIcon scale="1.8" name="vi-file-type-nuxt" />
                  <span class="fullstack__content__tech__name">Nuxtjs</span>
                </a>
                The Intuitive Vue Framework
              </div>
            </div>
          </div>
        </div>
        <div class="backend">
          <h2 class="title fullstack__title">Backend development</h2>
          <div class="fullstack__container">
            <div class="fullstack__content">
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://nodejs.org/" target="_blank">
                  <VIcon scale="2" name="vi-file-type-node" />
                  <span class="fullstack__content__tech__name">Nodejs</span>
                </a>
                Back-end JavaScript runtime environment
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://expressjs.com/" target="_blank">
                  <VIcon
                    style="
                      background: white;
                      color: black;
                      margin: 0 10px 0 12px;
                    "
                    scale="1.6"
                    name="si-express"
                  />
                  <span class="fullstack__content__tech__name">Expressjs</span>
                </a>
                Fast, unopinionated, minimalist web framework for Node.js
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://www.mongodb.com/" target="_blank">
                  <VIcon scale="2" name="vi-file-type-mongo" />
                  <span class="fullstack__content__tech__name">MongoDB</span>
                </a>
                General purpose, document-based, distributed database
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://www.mysql.com/" target="_blank">
                  <VIcon scale="2" name="vi-file-type-mysql" />
                  <span class="fullstack__content__tech__name">MySql</span>
                </a>
                Relational database management system
              </div>
              <div class="frontend__tech fullstack__content__tech">
                <a href="https://www.serverless.com/" target="_blank">
                  <VIcon scale="2" name="vi-file-type-serverless" />
                  <span class="fullstack__content__tech__name">Serverless</span>
                </a>
                <span>
                  serverless with
                  <a
                    href="https://www.netlify.com/products/functions/"
                    target="_blank"
                  >
                    netlify functions</a
                  >
                  it's a method of providing backend services on an as-used
                  basis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
