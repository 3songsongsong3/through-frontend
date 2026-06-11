<template>

  <div class="detail">

    <div class="header">

      <router-link to="/">
        ← Back
      </router-link>

      <h1>{{ title }}</h1>

    </div>

    <div class="gallery">

      <div
        v-for="photo in photos"
        :key="photo"
        class="photo"
      >
        <img :src="photo" />
      </div>

    </div>

  </div>

</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const title = 'RAINY DAY'

const photos = [
  'https://picsum.photos/id/1001/600/800',
  'https://picsum.photos/id/1002/600/800',
  'https://picsum.photos/id/1003/600/800',
  'https://picsum.photos/id/1004/600/800',
  'https://picsum.photos/id/1005/600/800',
  'https://picsum.photos/id/1006/600/800'
]
</script>

<style scoped>

.detail {
  background: #0b0b0b;
  min-height: 100vh;
  padding: 30px;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 42px;
}

.gallery {
  columns: 3;
  column-gap: 16px;
}

.photo {
  margin-bottom: 16px;
}

.photo img {
  width: 100%;
  border-radius: 12px;
}

@media (max-width: 768px) {

  .gallery {
    columns: 2;
  }

}
</style>