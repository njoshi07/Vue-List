<template>
  <div>
    <div class="todo-Item">
      <div class="checkbox">
        <input type="checkbox" />
      </div>

      <div class="checkboxlabel">
        <label for="">
          <h3>{{ todo.description }}</h3>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
};
</script>

<style>
.todo-Item {
  display: flex;
}
</style>