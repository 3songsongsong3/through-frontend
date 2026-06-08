<template>
  <div class="container">

    <!-- Hero -->
    <section class="slide hero">
      <div class="hero-content">
        <h1>Through</h1>

        <p class="eng">
          See the world through others' eyes
        </p>

        <p class="jp">
          ひとつのテーマ、無数のまなざし。
        </p>

        <p class="kr">
          하나의 주제, 각자의 시선.
        </p>

        <div class="scroll-guide">
          ↓ Discover perspectives
        </div>
      </div>
    </section>

    <!-- Theme Slides -->
    <section
      v-for="theme in themes"
      :key="theme.id"
      class="slide"
    >
      <div class="theme-card">
        <img :src="theme.image" :alt="theme.title" />

        <div class="overlay">
          <h2>{{ theme.title }}</h2>
          <p>{{ theme.count }} Contributions</p>
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
    image: 'https://picsum.photos/id/1015/1200/800'
  },
  {
    id: 2,
    title: 'COMMUTE',
    count: 41,
    image: 'https://picsum.photos/id/1011/1200/800'
  },
  {
    id: 3,
    title: 'NIGHT WALK',
    count: 15,
    image: 'https://picsum.photos/id/1043/1200/800'
  }
]
</script>

<style scoped>

.container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.slide {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  scroll-snap-align: start;
}

/* Hero */

.hero {
  text-align: center;
}

.hero-content h1 {
  font-size: 96px;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

.eng {
  font-size: 24px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.jp {
  font-size: 22px;
  margin-bottom: 10px;
}

.kr {
  font-size: 18px;
  opacity: 0.7;
}

.scroll-guide {
  margin-top: 80px;
  opacity: 0.4;
  font-size: 14px;
}

/* Theme */

.theme-card {
  position: relative;

  width: 95%;
  height: 85vh;

  overflow: hidden;
  border-radius: 20px;
}

.theme-card img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.overlay {
  position: absolute;

  left: 40px;
  bottom: 40px;

  color: white;
}

.overlay h2 {
  margin: 0;
  font-size: 48px;
}

.overlay p {
  margin-top: 10px;
  opacity: 0.8;
}

/* Mobile */

@media (max-width: 768px) {

  .hero-content h1 {
    font-size: 64px;
  }

  .eng {
    font-size: 18px;
  }

  .jp {
    font-size: 16px;
  }

  .kr {
    font-size: 14px;
  }

  .theme-card {
    width: 96%;
    height: 90vh;
  }

  .overlay {
    left: 20px;
    bottom: 20px;
  }

  .overlay h2 {
    font-size: 32px;
  }
}

</style>