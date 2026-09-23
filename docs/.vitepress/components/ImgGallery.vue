<template>
  <div class="gallery">
    <div class="gallery-item" v-for="(img, idx) in images" :key="idx" @click="openPreview(idx)">
      <img :src="img" alt="gallery" />
    </div>
    <div v-if="showPreview" class="preview-mask" @click="showPreview=false">
      <img class="preview-img" :src="images[activeIndex]" alt="preview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
const showPreview = ref(false)
const activeIndex = ref(0)
const openPreview = (idx) => {
  activeIndex.value = idx
  showPreview.value = true
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px,1fr));
  gap: 8px;
  margin:1rem 0;
}
.gallery-item img {
  width:100%;
  height:140px;
  object-fit:cover;
  border-radius:4px;
  cursor:pointer;
}
.preview-mask{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.85);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:999;
}
.preview-img{
  max-width:90%;
  max-height:90vh;
}
</style>
