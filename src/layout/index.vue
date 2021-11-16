<template>
  <a-layout class="layout">
    <a-layout-sider :collapsed="collapsed" :width="asiderWidth" :trigger="null" collapsible>
      <logo :collapsed="collapsed"></logo>
      <siderbar :collapsed="collapsed"></siderbar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content>
        <div class="container">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Layout } from 'ant-design-vue'
import Logo from './Logo/index.vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

import Siderbar from './Siderbar/index.vue'
export default defineComponent({
  components: {
    Logo,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Siderbar,
    [Layout.name]: Layout,
    [Layout.Header.name]: Layout.header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider
  },
  setup() {
    const collapsed = ref<boolean>(false)
    // 自定义侧边栏菜单收缩和展开时的宽度
    const asiderWidth = computed(() => (collapsed.value ? 80 : 208))

    return {
      collapsed,
      asiderWidth
    }
  }
})
</script>

<style lang="less">
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
  }
  .ant-layout-content {
    padding: 30px 40px;
    .container {
      padding: 20px 30px;
      height: 100%;
      background-color: #fff;
    }
  }
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
