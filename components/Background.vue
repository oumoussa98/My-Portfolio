<template>
  <div class="container">
    <div v-for="(icon, i) in icons" :key="i" class="circle-container">
      <VIcon id="tech-icon" :name="icon"></VIcon>
    </div>
    <div class="circle-container">
      <VIcon id="tech-icon" color="#AEDDFF" name="si-vuetify"></VIcon>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'vi-file-type-vue',
      'vi-file-type-node',
      'vi-file-type-mongo',
      'vi-file-type-mysql',
      'vi-file-type-html',
      'vi-file-type-css',
      'vi-file-type-scss',
      'vi-file-type-scss2',
      'vi-file-type-js',
      'vi-file-type-nuxt',
      'vi-file-type-git',
      'bi-github',
      'vi-file-type-c',
      'vi-file-type-cpp3',
      'vi-file-type-php3',
      'vi-file-type-gridsome',
      'vi-file-type-webpack',
      'fc-linux',
    ],
  }),
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 120%;
  top: -20%;
  left: 0;
  position: absolute;
  overflow: hidden;
  z-index: -1;
}

.circle-container {
  $particleNum: 25;

  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  #tech-icon {
    animation: scaleFrames 2s infinite;

    @keyframes scaleFrames {
      0% {
        transform: scale(1.3);
      }

      50% {
        transform: scale(1.5);
      }

      100% {
        transform: scale(1.3);
      }
    }
  }

  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $startPositionY: random(10) + 150;
      $framesName: 'move-frames-' + $i;
      $moveDuration: 30000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(40000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate(#{random(100) + vw}, #{$startPositionY + vh});
        }

        to {
          transform: translate(
            #{random(100) + vw},
            #{- $startPositionY - random(30) + vh}
          );
        }
      }

      #tech-icon {
        animation-delay: random(4000) + ms;
      }
    }
  }
}
</style>
