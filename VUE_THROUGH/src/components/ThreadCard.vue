<template>
  <div class="card">
    {{ thread.title }}
  </div>
</template>

<script setup>
defineProps({
  thread: Object
})
</script>