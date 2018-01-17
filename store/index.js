import _ from 'lodash';
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const deepCopy = array => _.map(array, _.clone);

const store = () => new Vuex.Store({
  state: {
    matrix: new Array(20).fill(new Array(20).fill(false)),
    isActive: false
  },
  getters: {
    matrix: state => state.matrix,
    isActive: state => state.isActive,
    getNeighborsOf: state => ({ m, n }) => {
      const neighbors = [];

      _.range(m - 1, m + 2).forEach((i) => {
        _.range(n - 1, n + 2).forEach((j) => {
          if (i === m && j === n) return;
          const row = state.matrix[i];
          if (row === undefined) return;
          if (row[j] === undefined) return;

          neighbors.push(row[j]);
        });
      });

      return neighbors;
    },
    getAliveNeighborCountOf: (state, getters) => ({ m, n }) => {
      const neighbors = getters.getNeighborsOf({ m, n });
      const aliveNeighborCount =
        neighbors.filter(alive => alive === true).length;

      return aliveNeighborCount;
    }
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    spawn(state, { m, n }) {
      const matrix = deepCopy(state.matrix);
      matrix[m][n] = true;
      state.matrix = matrix;
    },
    kill(state, { m, n }) {
      const matrix = deepCopy(state.matrix);
      matrix[m][n] = false;
      state.matrix = matrix;
    },
    replaceMatrix(state, { matrix }) {
      state.matrix = matrix;
    },
    activate(state) {
      state.isActive = true;
    },
    inactivate(state) {
      state.isActive = false;
    }
  },
  /* eslint-enable no-param-reassign */
  actions: {
    spawn({ commit }, { m, n }) {
      commit('spawn', { m, n });
    },
    kill({ commit }, { m, n }) {
      commit('kill', { m, n });
    },
    startGame({ commit, getters }) {
      commit('activate');

      let ticktackId;

      const ticktack = () => {
        if (!getters.isActive) {
          clearInterval(ticktackId);
          return;
        }

        const matrix = deepCopy(getters.matrix);

        getters.matrix.forEach((row, m) => {
          row.forEach((alive, n) => {
            const aliveNeighborCount =
              getters.getAliveNeighborCountOf({ m, n });

            if (!alive && aliveNeighborCount === 3) {
              matrix[m][n] = true;
            } else if (alive && aliveNeighborCount <= 1) {
              matrix[m][n] = false;
            } else if (alive && aliveNeighborCount >= 4) {
              matrix[m][n] = false;
            }
          });
        });

        commit('replaceMatrix', { matrix });
      };

      ticktackId = setInterval(ticktack, 1000);
    },
    stopGame({ commit }) {
      commit('inactivate');
    }
  }
});

export default store;
