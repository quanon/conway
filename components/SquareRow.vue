<template>
  <div class="square-row">
    <Square v-for="(alive, n) in row" :key="n" :alive="alive" :m="m" :n="n"/>
  </div>
</template>

<script>
import Square from '~/components/Square.vue';

export default {
  props: {
    row: Array,
    m: Number
  },
  components: {
    Square
  }
};
</script>


<style lang="scss" scoped>
.square-row {
  display: flex;
  height: 5%;
  width: 100%;
}
</style>
