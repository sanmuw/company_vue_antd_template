<template>
  <div>
    <div class="oper">
      <a-radio-group v-model:value="rang" button-style="solid">
        <a-radio-button value="my">我的收藏</a-radio-button>
        <a-radio-button value="all">全部项目</a-radio-button>
      </a-radio-group>
      <a-input-search
        v-model:value="projectKey"
        placeholder="请输入项目的关键字"
        style="width: 200px"
        @search="onSearch"
      />
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const rang = ref<string>('all')
    const projectKey = ref<string>('')
    const onSearch = () => {
      console.log('sanmu')
    }
    return {
      onSearch,
      rang,
      projectKey
    }
  }
})
</script>

<style lang="less">
.oper {
  display: flex;
  justify-content: space-between;
}
</style>
