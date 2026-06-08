<template>
  <div>
    <h2>비 오는 날</h2>

    <PhotoCard
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
    />
  </div>
</template>

<script setup>
import PhotoCard from '../components/PhotoCard.vue'

const photos = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300',
    comment: '퇴근길 한 장'
  }
]
</script>