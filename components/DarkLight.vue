<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    class="toggle-theme"
    @click="themeToggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-sun"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <span class="switcher"></span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-moon"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script>
export default {
  mounted() {
    const lightMode = localStorage.getItem('lightMode')
    if (lightMode === 'enabled') this.enableLightMode()
  },
  methods: {
    enableLightMode() {
      document.body.setAttribute('data-light', true)
      localStorage.setItem('lightMode', 'enabled')
    },
    disableLightMode() {
      document.body.removeAttribute('data-light')
      localStorage.setItem('lightMode', 'disabled')
    },
    themeToggle() {
      const lightMode = localStorage.getItem('lightMode')
      if (lightMode !== 'enabled') {
        this.enableLightMode()
      } else this.disableLightMode()
    },
  },
}
</script>

<style lang="scss">
.toggle-theme {
  padding: 1px 4px;
  margin: 0 20px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #26325c;
  border-radius: 30px;
  color: var(--color);
  background: var(--bg-secondary);
  transition: background 0.6s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
}
.switcher {
  display: inline-block;
  width: 10px;
  height: 22px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    transition: all 0.3s linear;
    right: -230%;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgb(16, 187, 115);
  }
}
body[data-light='true'] {
  .switcher {
    &::after {
      right: 100%;
    }
  }
  .toggle-theme {
    border: 1px solid #b9bfd1;
  }
}
</style>
