<template>
  <div class="home">

    <section class="hero">
      <h1>Through</h1>

      <p class="tagline">
        See the world through others' eyes
      </p>
      <p class="tagline">
        ひとつのテーマ、無数のまなざし
      </p>
      <p class="tagline">
        하나의 주제, 각자의 시선.
      </p>
    </section>

    <section class="theme-list">

      <div
        v-for="theme in themes"
        :key="theme.id"
        class="theme-card"
      >
        <img
          :src="theme.image"
          :alt="theme.title"
        >

        <div class="overlay">
          <h2>{{ theme.title }}</h2>

          <p>
            {{ theme.count }} Contributions
          </p>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
const themes = [
  {
    id: 1,
    title: 'RAINY DAY',
    count: 23,
    image: 'https://picsum.photos/1200/700?random=1'
  },
  {
    id: 2,
    title: 'COMMUTE',
    count: 41,
    image: 'https://picsum.photos/1200/700?random=2'
  },
  {
    id: 3,
    title: 'RED',
    count: 18,
    image: 'https://picsum.photos/1200/700?random=3'
  }
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #0f0f0f;
  color: white;
}

.hero {
  padding: 120px 80px 80px;
}

.hero h1 {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 12px;
}

.tagline {
  color: #9b9b9b;
  font-size: 18px;
}

.theme-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 80px 80px;
}

.theme-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  cursor: pointer;
}

.theme-card img {
  width: 100%;
  height: 500px;
  object-fit: cover;

  transition: 0.4s;
}

.theme-card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  padding: 40px;

  background: linear-gradient(
    transparent,
    rgba(0,0,0,0.8)
  );
}

.overlay h2 {
  font-size: 42px;
  margin-bottom: 8px;
}

.overlay p {
  color: #d0d0d0;
}
</style>