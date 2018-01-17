<template>
  <div class="play-button ui small button" :class="buttonClassObject" @click="onClick">
    <i class="icon" :class="iconClassObject"></i> {{ buttonContent }}
  </div>
</template>

<script>
export default {
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
.play-button {
  margin-top: 2rem;
}
</style>
