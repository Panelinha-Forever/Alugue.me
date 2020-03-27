<template>
  <div id="appRoot">
    <v-app
      id="dashboard"
      class="app"
      v-if="!$route.meta.public && $auth.ready()"
    >
      <AppBar />

      <v-content>
        <transition
          :name="transitionName"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
        >
          <router-view :key="$route.fullPath"></router-view>
        </transition>
      </v-content>

      <!-- <Footer /> -->
    </v-app>

    <template v-else>
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </template>
  </div>
</template>

<script>
import AppBar from './components/AppBar';

const DEFAULT_TRANSITION = 'slide-right';
export default {
  components: {
    AppBar
  },

  data: () => ({
    prevHeight: 0,
    transitionName: DEFAULT_TRANSITION
  }),

  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },

  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    enter() {}
  },
  mounted() {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
