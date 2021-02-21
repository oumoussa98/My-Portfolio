<template>
  <div class="home">
    <section class="home__hero">
      <ClientOnly>
        <Background />
      </ClientOnly>
      <div>
        <div class="intro">
          <h1 class="hi">Hi there!</h1>
          <ClientOnly>
            <VIcon
              scale="3"
              name="la-handshake"
              animation="wrench"
              speed="slow"
              hover
            />
          </ClientOnly>
          <h1 class="name">I'm Abdelouahed Oumoussa</h1>
          <p class="bio">
            A junior self-taught full-stack javascript developer from morocco,
            My journey started from 2020. Coding is a passion first before it
            becomes a profession. I always enjoy building and developing web
            apps. A list of all my side projects could be found over
            <a
              class="github-link"
              href="https://github.com/oumoussa98/My-projects-list"
              target="_blank"
            >
              here
              <ClientOnly>
                <VIcon
                  class="github-link__icon"
                  scale="1.2"
                  name="oi-link-external"
                />
              </ClientOnly>
            </a>
          </p>
        </div>
        <!-- buttons section -->
        <div class="actions">
          <NuxtLink class="first" to="/contact">Get in touch</NuxtLink>
          <NuxtLink class="second" to="/resume.pdf" target="_blank">
            Download my resume
            <ClientOnly>
              <VIcon scale="0.9" name="oi-link-external" />
            </ClientOnly>
          </NuxtLink>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="~/assets/images/oumoussa.jpg"
          alt="my personal picture"
        />
        <div class="overlay"></div>
      </div>
    </section>
    <Skills />
    <SideProjects />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home {
  &__hero {
    animation: smoothDisplay 0.8s linear;
    min-height: 80vh;
    justify-content: center;
    padding: 0 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    .intro {
      padding: 10px 15px 10px 0;
      margin: 80px 0 0 0;
      max-width: 790px;
      .hi {
        font-size: 45px;
        margin: 0 10px 0 0;
        display: inline-block;
      }
      .name {
        font-size: 50px;
        padding: 10px 0;
      }
      .bio {
        font-size: 23px;
        padding-bottom: 20px;
      }
      .github-link {
        color: #05aa37;
        &__icon {
          margin: 0 4px 1px 0;
        }
      }
    }
    .image {
      width: 300px;
      height: 300px;
      margin: 100px 0 20px 10px;
      position: relative;
      .img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }
      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #2f495e65;
        border-radius: 50%;
        transition: 0.4s;
        &:hover {
          background: transparent;
        }
        &:after {
          content: '';
          position: absolute;
          width: 110%;
          height: 110%;
          top: -15px;
          right: -15px;
          background: rgba(5, 223, 114, 0.3);
          background: linear-gradient(
            to left,
            rgba(5, 223, 114, 0.3),
            rgba(4, 200, 226, 0.3)
          );
          border-radius: 50%;
          z-index: -1;
        }
      }
    }
    .actions {
      display: inline-flex;
      flex-wrap: wrap;
      .first,
      .second {
        border: none;
        border-radius: 4px;
        padding: 15px 35px;
        margin: 10px 0;
        font-weight: 900;
        font-size: 15px;
        color: #ffffff;
        text-transform: uppercase;
        transition: 0.25s;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
      }
      .first {
        background-color: #03b683;
        margin-right: 20px;
        &:hover {
          background-color: #03b683c4;
        }
      }
      .second {
        text-decoration: none;
        background-color: #0475a1;
        &:hover {
          background-color: #0474a1cc;
        }
      }
    }
    @media only screen and (max-width: 400px) {
      .image {
        width: 200px;
        height: 200px;
        .img {
          width: 200px;
          height: 200px;
        }
        .overlay {
          &:after {
            top: -10px;
            right: -10px;
          }
        }
      }
    }
  }
}
</style>
