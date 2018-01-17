<template>
  <div class="square-matrix">
    <SquareRow v-for="(row, m) in matrix" :key="m" :row="row" :m="m"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import SquareRow from '~/components/SquareRow.vue';

export default {
  components: {
    SquareRow
  },
  computed: {
    ...mapGetters([
      'matrix'
    ])
  }
};
</script>


<style lang="scss" scoped>
.square-matrix {
  display: flex;
  flex-direction: column;
  width: calc(100vmin - 5rem);
  height: calc(100vmin - 5rem);
  border-top: solid #a7c8c9 1px;
  border-left: solid #a7c8c9 1px;
}
</style>
