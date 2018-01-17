<template>
  <div class="square" :class="{ alive }" @click="onClick">
    <span>
      {{ aliveNeighborCount }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    alive: Boolean,
    m: Number,
    n: Number
  },
  methods: {
    onClick() {
      if (this.alive) {
        this.$store.dispatch('kill', this.coordinate);
      } else {
        this.$store.dispatch('spawn', this.coordinate);
      }
    }
  },
  computed: {
    coordinate() {
      return { m: this.m, n: this.n };
    },
    aliveNeighborCount() {
      return this.$store.getters.getAliveNeighborCountOf(this.coordinate);
    }
  }
};
</script>

<style lang="scss" scoped>
.square {
  height: 100%;
  width: 5%;
  border-right: solid #a7c8c9 1px;
  border-bottom: solid #a7c8c9 1px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #78aaac;
  font-size: 2vmin;

  &.alive {
    background-color: #a7c8c9;
  }
}
</style>
