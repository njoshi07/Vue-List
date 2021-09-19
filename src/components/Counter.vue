<template>
  <div class="container">
    <div class="displayCount">
      <div class="count">
        <div>
          <h1>This is counter</h1>
        </div>
        <div>
          <p class="counterNum">{{ getCounter }}</p>
        </div>
      </div>

      <div class="buttons">
        <div class="addButton">
          <button
            class="button"
            v-on:click="$store.commit('setIncrementCounter')"
          >
            +
          </button>
        </div>
        <div class="decreaseButton">
          <button
            class="button"
            v-on:click="$store.commit('setDecrementCounter')"
          >
            -
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCounter"]),
  },
};
</script>

<style scoped>
.displayCount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.counterNum {
  font-size: 50px;
  font-weight: 700;
}
.button {
  height: 50px;
  width: 50px;
  text-align: center;
  background-color: grey;
  color: honeydew;
  margin: 20px;
}
.buttons {
  display: flex;
}
</style>