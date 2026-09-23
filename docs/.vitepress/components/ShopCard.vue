<template>
  <div class="shop-card">
    <h3>{{ name }}</h3>
    <span class="tag" :class="tag">{{ tag }}</span>
    <p>📍 {{ area }} | ⭐ {{ score }} /5</p>
    <p>💰 {{ price }}</p>
    <p>🕒 {{ time }}</p>
    <p>🏠 {{ address }}</p>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  area: String,
  score: Number,
  tag: {
    type: String,
    validator: (v) => ['推荐','避雷'].includes(v)
  },
  price: String,
  time: String,
  address: String,
  desc: String
})
</script>

<style scoped>
.shop-card{
  border: 1px solid #eee;
  padding:16px;
  border-radius:8px;
  margin:1rem 0;
}
.tag{
  padding:4px 8px;
  border-radius:4px;
  color:white;
}
.推荐{
  background:#27ae60;
}
.避雷{
  background:#e74c3c;
}
</style>
