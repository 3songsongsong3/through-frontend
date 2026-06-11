<template>
  <div>
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
          :key="photo.id"
          class="photo"
          @click="openModal(photo)"
        >
          <img :src="photo.url" />
        </div>

      </div>

    </div>
    <!-- Modal -->
      <div
        v-if="selectedPhoto"
        class="modal"
        @click="closeModal"
      >

        <div
          class="modal-content"
          @click.stop
        >
        <img
        :src="selectedPhoto.url"
        class="modal-image"
        />

        <div class="photo-info">
            <h3>{{ selectedPhoto.title }}</h3>
            <p class="author">
                by {{ selectedPhoto.author }}
            </p>
            <p>
                {{ selectedPhoto.description }}
            </p>
        </div>

          <button
            class="close-btn"
            @click="closeModal"
          >
            ×
          </button>

        </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const selectedPhoto = ref(null)
const photos = [
  {
    id: 1,
    title: 'Rainy Street',
    description: '퇴근길에 찍은 비 오는 거리',
    author: 'Eugene',
    url: 'https://picsum.photos/id/1015/600/800'
  },
  {
    id: 2,
    title: 'Umbrella',
    description: '빗속을 걷는 사람',
    author: 'Yuki',
    url: 'https://picsum.photos/id/1011/600/800'
  },
  {
    id: 3,
    title: 'City Reflection',
    description: '젖은 도로에 비친 도시의 불빛',
    author: 'Takumi',
    url: 'https://picsum.photos/id/1043/600/800'
  },
  {
    id: 4,
    title: 'Rainy Window',
    description: '창문에 맺힌 빗방울',
    author: 'Minji',
    url: 'https://picsum.photos/id/1035/600/800'
  },
  {
    id: 5,
    title: 'Coffee Time',
    description: '비 오는 날의 따뜻한 커피',
    author: 'Haru',
    url: 'https://picsum.photos/id/1060/600/800'
  },
  {
    id: 6,
    title: 'Night Rain',
    description: '늦은 밤의 조용한 빗길',
    author: 'Sora',
    url: 'https://picsum.photos/id/1050/600/800'
  }
]

const openModal = (photo) => {
  selectedPhoto.value = photo
}

const closeModal = () => {
  selectedPhoto.value = null
}
</script>

<style scoped>
.detail {
  background: #0b0b0b;
  min-height: 100vh;
  padding: 30px;
}

h1 {
  color: white;
  margin-bottom: 30px;
}

.gallery {
  columns: 3;
  column-gap: 16px;
}

.photo {
  margin-bottom: 16px;
  cursor: pointer;
}

.photo img {
  width: 100%;
  border-radius: 12px;
  transition: 0.3s;
}

.photo img:hover {
  transform: scale(1.02);
}

/* Modal */

.modal {
  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.9);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.modal-content {
  position: relative;

  width: 90%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
}

.modal-image {
  width: 100%;
  max-height: 80vh;

  object-fit: contain;
  border-radius: 12px;
}

.photo-info {
  color: white;
  margin-top: 20px;
}

.close-btn {
  position: absolute;

  top: -10px;
  right: -10px;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  font-size: 24px;
}

.author {
  margin: 10px 0;
  color: #b0b0b0;
  font-size: 14px;
}

@media (max-width: 768px) {

  .gallery {
    columns: 2;
  }

}
</style>