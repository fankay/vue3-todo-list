<template>
  <div class="input_header">
    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
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
  @apply h-20 mt-10 relative
}
.icon {
 @apply w-10 h-10 absolute top-5 left-2 text-gray-500
}
.input {
  @apply h-20 border-solid border-gray-400 w-full border-4 outline-none text-2xl pl-12 p-5 focus:outline-none focus:ring focus:border-blue-300
}
</style>