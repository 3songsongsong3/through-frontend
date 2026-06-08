<template>
  <div>
    <img
      :src="photo.imageUrl"
      width="300"
    />

    <p>{{ photo.comment }}</p>
  </div>
</template>

<script setup>
defineProps({
  photo: Object
})
</script>