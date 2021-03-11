<template>
  <div class="todo_list">
      <div class="todo" :class="{todo_done:item.done}" v-for="item in list" :key="item.id">
        <input type="checkbox" class="todo_ck" @click="inputClickHandler(item)">
        <span class="todo_text">{{item.text}}</span>
        <a href="javascript:;" @click="deleteTodo(item)" class="todo_del">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props:['list'],
  setup(_,{emit}) {
    //复选框点击
    const inputClickHandler = (item) => {
      item.done = !item.done;
      emit('check',item);
    }
    //删除链接点击
    const deleteTodo = (item) => {
      emit('delete',item)
    }

    return {
      inputClickHandler,
      deleteTodo
    }
  }
}
</script>

<style lang="postcss">
.todo_list {
  @apply mt-10 mb-10
}
.todo {
  @apply flex flex-row text-3xl text-black mb-5 bg-gray-100 hover:bg-gray-200 p-4 rounded-2xl ring-1 ring-gray-300 shadow-lg
}
.todo_ck {
  @apply w-10 h-10 flex-none flex-shrink-0
}
.todo_text {
  @apply flex-auto ml-5
}
.todo_done .todo_text {
  @apply text-gray-400 line-through  !important
}
.todo_del {
  @apply flex-none text-red-600 flex-shrink-0 flex items-center
}
</style>