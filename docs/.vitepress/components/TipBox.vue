<template>
  <div class="tip-box" :class="type">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (v) => ['info','warning','danger','success'].includes(v)
  }
})
</script>

<style scoped>
.tip-box {
  padding: 12px 16px;
  border-radius: 6px;
  margin: 1rem 0;
}
.info {
  background: #eef6ff;
  border-left:4px solid #4299e1;
}
.warning {
  background: #fffbeb;
  border-left:4px solid #f59e0b;
}
.danger {
  background: #fef2f2;
  border-left:4px solid #ef4444;
}
.success {
  background: #f0fdf4;
  border-left:4px solid #10b981;
}
</style>
