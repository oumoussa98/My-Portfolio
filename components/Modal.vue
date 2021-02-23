<template>
  <div>
    <div class="modal">
      <div @click="hideModal" class="modal-overlay"></div>
      <div class="modal-content">
        <span @click="hideModal" class="close"></span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      const el = document.querySelector('.modal')
      el.setAttribute('data-hide', 'true')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  animation: modalTransition 0.4s linear;
}
.modal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: transparent;
}
.modal[data-hide='true'] {
  display: none;
}
.modal[data-hide='false'] {
  display: flex;
}
.modal-content {
  width: 500px;
  height: 200px;
  margin: 0 10px;
  background: var(--bg);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.close {
  position: absolute;
  top: 4px;
  right: 3px;
  z-index: 4;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 25px;
    border-radius: 4px;
    height: 4px;
    background: var(--color);
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 25px;
    border-radius: 4px;
    height: 4px;
    background: var(--color);
    transform: rotate(-45deg);
  }
}
</style>
