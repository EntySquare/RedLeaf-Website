<script setup lang="ts" name="layout">
import AppTopNavVue from './components/app-topnav.vue'
import AppFooterVue from './components/app-footer.vue'
</script>
<template>
  <AppTopNavVue></AppTopNavVue>
  <router-view></router-view>
  <AppFooterVue></AppFooterVue>
</template>
<style scoped lang="less"></style>