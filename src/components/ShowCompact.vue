<script setup lang="ts">
import type { Show } from '@/services/showsApi'

defineProps<{
  show: Show
}>()
</script>

<template>
  <template v-if="show">
    <div class="show-details">
      <h3>{{ show.name }}</h3>
      <div class="show-info">
        <img v-if="show.image" :src="show.image.medium" :alt="show.name" class="show-image" />
        <div v-else class="show-image-placeholder">No image</div>
        <div class="show-meta">
          <p><strong>Rating:</strong> {{ show.rating.average }}</p>
          <p><strong>Genres:</strong> {{ show.genres.join(', ') }}</p>
          <p><strong>Status:</strong> {{ show.status }}</p>
          <p><strong>Duration:</strong> {{ show.runtime ? `${show.runtime} minutes` : '' }}</p>
          <p><strong>Premiered:</strong> {{ show.premiered }}</p>
          <p><strong>Ended:</strong> {{ show.ended }}</p>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <p>Ooops... Something went wrong - the show is not provided</p>
  </template>
</template>

<style scoped>
.show-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.show-info {
  display: flex;
  gap: 1.25rem;
}

.show-image,
.show-image-placeholder {
  width: 100%;
  max-width: 100px;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.show-image {
  height: auto;
}

.show-image-placeholder {
  height: 140px;
  border: var(--color-border) 1px solid;
  display: flex;
  justify-content: center;
  place-items: center;
}

.show-meta {
  flex: 1;
  min-width: 200px;
}
</style>
