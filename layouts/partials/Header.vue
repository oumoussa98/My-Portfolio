<template>
  <div class="header">
    <!--              computer vesion                 -->
    <!------- brand area ------>
    <NuxtLink class="brand" :to="brand.to">
      <img
        class="brand-img"
        src="~/assets/images/logo.svg"
        alt="logo"
        width="50"
      />
      <span>{{ brand.name }}</span>
    </NuxtLink>
    <!-------- Links area ------>
    <div class="links">
      <NuxtLink v-for="(link, i) in links" :key="i" class="link" :to="link.to">
        {{ link.name }}
      </NuxtLink>
    </div>
    <DarkLight />
    <div class="burger-container" @click="toggleMenu">
      <div role="button" class="burger-menu"></div>
    </div>
  </div>
</template>

<script>
export default {
  // Data ===========================
  data: () => ({
    // Brand --------------------
    brand: {
      name: 'Oumoussa',
      to: '/',
      //
    },
    // links --------------------
    links: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
      { name: 'Blog', to: '/blog' },
      //
    ],

    // for mobile devices
    mobileView: false,
    drawer: false,
  }),
  methods: {
    toggleMenu() {
      const links = document.querySelector('.links')
      const burgerMenu = document.querySelector('.burger-menu ')
      if (links.getAttribute('data-show')) {
        links.removeAttribute('data-show')
        burgerMenu.removeAttribute('data-show')
      } else {
        links.setAttribute('data-show', 'true')
        burgerMenu.setAttribute('data-show', 'true')
      }
    },
  },
}
</script>

<style lang="scss">
/* header */
.header {
  width: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
  /* brand area */
  .brand {
    min-width: 40%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
  .brand span {
    color: var(--color);
  }
  .brand-img {
    transition: all 1s;
  }
  .brand-img:hover {
    transition: all 1s;
    transform: rotate(360deg);
  }
  /* links area */
  .links {
    padding: 0 0 6px 0;
    border-bottom: 2px solid #14d89d;
  }
  .burger-container {
    display: none;
  }
  .link {
    margin: 0 8px 0 8px;
    padding: 0 5px;
    display: inline-flex;
    // transform: translateY(-1000%);
    color: var(--color);
  }
  .link:hover {
    animation: pulse 0.8s;
    box-shadow: 0 0 0 0.6em rgba(#fff, 0);
    color: #04a071;
  }
  @media only screen and (max-width: 800px) {
    .brand {
      min-width: auto;
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 6%;
      right: 20px;
      z-index: 1;
      box-shadow: -1px 4px 8px rgba(0, 0, 0, 0.3);
      background: var(--bg-secondary);
      transform: scale(0);
      transition: all 0.25s linear;
      opacity: 0;
    }
    .links[data-show='true'] {
      transform: scale(1);
      opacity: 1;
    }
    .link {
      margin: 4px 4px;
      color: var(--color);
      padding: 2px 20px;
    }
    .burger-container {
      display: inline-block;
      align-self: center;
      cursor: pointer;
      margin: 0 20px 0 10px;
      padding: 10px 0;
      .burger-menu {
        width: 25px;
        height: 4px;
        border-radius: 4px;
        position: relative;
        background: var(--color);
        transition: all 0.3s;
        &::after {
          position: absolute;
          content: '';
          top: 8px;
          width: 25px;
          height: 4px;
          border-radius: 4px;
          background: var(--color);
          transition: all 0.3s;
        }
        &::before {
          position: absolute;
          content: '';
          top: -8px;
          width: 25px;
          height: 4px;
          border-radius: 4px;
          background: var(--color);
          transition: all 0.3s;
        }
      }
      .burger-menu[data-show='true'] {
        background: transparent;
        &::after {
          top: -2px;
          transform: rotate(-45deg);
        }
        &::before {
          top: -2px;
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>
