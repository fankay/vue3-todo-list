<template>
  <div class="input_header">
    <input type="text" class="input" placeholder="请输入待办事项" v-model="inputText" @keydown.enter="addNewTodo"/>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(_,{emit}) {
    let inputText = ref("")

    const addNewTodo = ()=>{
      emit('add',inputText.value);
      inputText.value = "";
    }
    return {
      inputText,
      addNewTodo
    }
  }
};
</script>

<style lang="postcss">
.input_header {
  @apply h-20 mt-10
}
.input {
  @apply h-20 border-solid border-gray-400 w-full border-4 outline-none text-2xl p-5 focus:outline-none focus:ring focus:border-blue-300
}
</style>