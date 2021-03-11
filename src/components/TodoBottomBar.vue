<template>
  <div class="bottom">
    <div class="msg">
      已完成 <span>{{finishSize}}</span> / <span>{{todoSize}}</span> 个任务
    </div>
    <button
      class="btn"
      @click="cleanFinishTodo"
      type="button"
    >
      清除已完成
    </button>
  </div>
</template>

<script>
export default {
  props:['todoSize','finishSize'],
  setup(_,{emit}) {
    const cleanFinishTodo = () => {
      emit('finishAll')
    }

    return {
      cleanFinishTodo
    }
  }
};
</script>

<style lang="postcss">
.bottom {
  @apply flex flex-row items-center justify-between
}
.msg {
  @apply flex-auto text-gray-600
}
.btn {
  @apply flex-none rounded-xl bg-red-400 text-white hover:bg-red-600 py-2 px-4
}
</style>