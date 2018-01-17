<template>
  <div id="app">
    <div class="ui container">
      <SquareMatrix/>
      <StartButton/>
    </div>
  </div>
</template>

<script>
import SquareMatrix from '~/components/SquareMatrix.vue';
import StartButton from '~/components/StartButton.vue';

export default {
  components: {
    SquareMatrix,
    StartButton
  },
  computed: {
    buttonClassObject() {
      if (this.$store.getters.isActive) {
        return {};
      }

      return { green: true };
    },
    iconClassObject() {
      if (this.$store.getters.isActive) {
        return { stop: true };
      }

      return { play: true };
    },
    buttonContent() {
      if (this.$store.getters.isActive) {
        return 'ストップ';
      }

      return 'スタート';
    }
  },
  methods: {
    onClick() {
      if (this.$store.getters.isActive) {
        this.$store.dispatch('stopGame');
      } else {
        this.$store.dispatch('startGame');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.play-button {
  margin-top: 2rem;
}
</style>
