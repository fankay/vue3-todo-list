<template>
  <div class="app">
    <h3 class="title">Vue 3 TodoList</h3>
    <todo-input @add="addTodo" />
    <todo-list :list="todoList" @check="triggleTodo" @delete="deleteTodo" />
    <todo-bottom-bar
      :todoSize="todoSize"
      :finishSize="finishSize"
      @finishAll="cleanFinish"
    />
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import TodoBottomBar from "../components/TodoBottomBar.vue";
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";
export default {
  components: {
    TodoInput,
    TodoList,
    TodoBottomBar,
  },
  setup() {
    const state = reactive({
      todoList: [],
      todoSize: computed(() => getTodoSize()),
      finishSize: computed(() => getFinishSize()),
    });
    //获取todolist
    function getTodoSize() {
      return state.todoList.length;
    }
    //获取完成的数量
    function getFinishSize() {
      return state.todoList.filter((item) => item.done).length;
    }

    //添加新的Todo
    const addTodo = (text) => {
      console.log("todo Text", text);
      const todo = {
        id: new Date().getTime(),
        text,
        done: false,
      };
      state.todoList.push(todo);
    };
    //更改Todo状态
    const triggleTodo = (todo) => {
      state.todoList.filter((item) => {
        if (item.id == todo.id) {
          item.done = todo.done;
        }
      });
    };
    //删除Todo
    const deleteTodo = (todo) => {
      state.todoList = state.todoList.filter((item) => {
        return item.id != todo.id;
      });
    };
    //清除已完成
    const cleanFinish = () => {
      state.todoList = state.todoList.filter((item) => {
        return (item.done == false);
      });
    };

    return {
      ...toRefs(state),
      addTodo,
      triggleTodo,
      deleteTodo,
      cleanFinish
    };
  },
};
</script>

<style lang="postcss" scoped>
.app {
  @apply w-3/5 mx-auto;
}
.title {
  @apply text-center mt-20 text-3xl font-semibold text-blue-400;
}
</style>