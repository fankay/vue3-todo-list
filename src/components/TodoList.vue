<template>
  <div class="todo_list">
      <div class="todo" :class="{todo_done:item.done}" v-for="item in list" :key="item.id">
        <input type="checkbox" class="todo_ck" @click="inputClickHandler(item)">
        <span class="todo_text">{{item.text}}</span>
        <a href="javascript:;" @click="deleteTodo(item)" class="todo_del">删除</a>
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
  @apply w-10 h-10 flex-grow-0 flex-shrink-0
}
.todo_text {
  @apply flex-grow ml-5
}
.todo_done .todo_text {
  @apply text-gray-400 line-through  !important
}
.todo_del {
  @apply flex-grow-0 text-red-600 flex-shrink-0
}
</style>