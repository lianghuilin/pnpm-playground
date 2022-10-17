<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

const barData = ref([
  {
    name: '2011',
    type: 'bar',
    data: [118203, 23489, 29034, 104970, 131744, 630230]
  },
  {
    name: '2012',
    type: 'bar',
    data: [19325, 23438, 31000, 121594, 134141, 681807]
  }
])
</script>

<template>
  <!-- 自定义的icon组件 -->
  <w-icon></w-icon>
  <!-- 自定义的button组件 -->
  <w-button color="orange">确定</w-button>
  <!-- 自定义的bar-chart组件 -->
  <w-bar-chart :data="barData" :customStyle="{ width: '800px', border: '1px solid red', height: '500px'}">
  </w-bar-chart>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
