<template>
  <div id="app">
    <div class="todos">
      <Todos v-bind:todos="todos"></Todos>
    </div>
  </div>
</template>

<script>
// import Checkbox from "./components/Checkbox.vue";

import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
  props: ["Todos"],
  data: function () {
    return {
      todos: [
        {
          id: 1,
          name: "Workout",
          description: "Workout to stay healthy",
        },
        {
          id: 2,
          name: "Lawn Mowing",
          description: "To keep yard Clean",
        },
        {
          id: 3,
          name: "Grocery",
          description: "Eat Healthy",
        },
      ],
      // styleObject: {
      //   color: "gray",
      // },
    };
  },
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
