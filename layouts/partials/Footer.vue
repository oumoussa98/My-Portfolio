<template>
  <ClientOnly>
    <div class="footer">
      <div class="section-1">
        <div>
          <h3>Get connected on</h3>
          <div class="social-links">
            <a
              href="https://www.facebook.com/oumoussa98"
              target="_blank"
              class="social-link"
            >
              <v-icon scale="1.3" name="bi-facebook"></v-icon>
            </a>
            <a
              href="https://www.twitter.com/oumoussa98"
              target="_blank"
              class="social-link"
            >
              <v-icon scale="1.3" name="bi-twitter"></v-icon>
            </a>
            <a
              href="https://www.instagram.com/oumoussa98"
              target="_blank"
              class="social-link"
            >
              <v-icon scale="1.3" name="bi-instagram"></v-icon>
            </a>
            <a
              href="https://www.github.com/oumoussa98"
              target="_blank"
              class="social-link"
            >
              <v-icon scale="1.3" name="bi-github"></v-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelouahed-oumoussa-168838206/"
              target="_blank"
              class="social-link"
            >
              <v-icon scale="1.3" name="bi-linkedin"></v-icon>
            </a>
          </div>
        </div>
        <div class="links">
          <NuxtLink class="link" to="/">Home</NuxtLink>
          <NuxtLink class="link" to="/about">About</NuxtLink>
          <NuxtLink class="link" to="/contact">Contact</NuxtLink>
          <NuxtLink class="link" to="/blog">Blog</NuxtLink>
        </div>
        <div class="other">
          <p>The portfolio is open sourced under MIT license</p>
          <p>Feel free to fork and customize as you like</p>
          <div class="other__links">
            <p>
              Open sourced on
              <a
                href="https://github.com/oumoussa98/portfolio"
                target="_blank"
                class="social-link"
              >
                <v-icon scale="1.2" name="bi-github"></v-icon>
              </a>
            </p>
            <p>
              Deployed to
              <a
                href="https://www.netlify.com"
                target="_blank"
                class="social-link"
              >
                <v-icon scale="1.2" name="si-netlify" color="#3398DB"></v-icon>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="section-2">
        <p>&copy; {{ new Date().getFullYear() }} — <strong>Oumoussa</strong></p>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  min-height: 300px;
  padding: 40px 50px 0px 50px;
  margin: 0 60px;
  border-radius: 50px 50px 0 0;
  background: var(--bg-secondary);
  .section-1 {
    display: flex;
    justify-content: space-between;
    min-height: 200px;
    flex-wrap: wrap;

    .social-links {
      padding: 20px 0;
      margin: 20px auto;
      text-align: center;
    }
    .social-link {
      color: inherit;
      margin: 0px 10px 10px 0;
    }
    .links {
      display: flex;
      flex-direction: column;
      margin: 0 0 10px 0;
      cursor: pointer;
      text-transform: uppercase;
      .link {
        padding: 4px 0;
        margin: 0 0 4px 0;
        color: inherit;
      }
    }
    .other {
      p {
        padding: 0;
        margin: 0;
      }
      &__links {
        margin: 10px 0 0 0;
      }
    }
  }
  .section-2 {
    text-align: center;
    border-top: 1px solid var(--color);
    padding: 6px 10px 1px 10px;
    margin: 20px auto 0 auto;
    strong {
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 910px) {
    margin: 0;
    border-radius: 0;
  }
}
</style>
