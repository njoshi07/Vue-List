<template>
  <div class="container">
    <div class="displayCount">
      <div class="count">
        <div>
          <h1>This is counter</h1>
        </div>
        <div>
          <p class="counterNum">{{ count }}</p>
        </div>
      </div>

      <div class="buttons">
        <div class="addButton">
          <button class="button" v-on:click="increment">+</button>
        </div>
        <div class="decreaseButton">
          <button class="button" v-on:click="decrement()">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 2,
  }),
  methods: {
    increment: function () {
      this.count++;
    },

    decrement: function () {
      if (this.count > 0) {
        this.count--;
      } else {
        `<p> Counter can't go below 0. </p>`;
      }
    },
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