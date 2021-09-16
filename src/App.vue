<template>
  <div id="app">
    <div class="counter">
      <h1>Counter: {{ getCounter }}</h1>
      <h2>Counter + 2: {{ getCounterPlus }}</h2>
      <Counter />
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import { mapGetters } from "vuex";

export default {
  components: { Counter },
  name: "App",
  data: () => ({
    count: "",
  }),

  computed: mapGetters(["getCounter", "getCounterPlus"]),

  // mounted() {
  //   this.count = this.$store.getters.getCounter;
  // },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
}
</style>
