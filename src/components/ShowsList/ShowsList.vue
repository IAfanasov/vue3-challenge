<script setup lang="ts">
import type { Show } from '@/services/showsApi'

defineProps<{
  genre: string
  shows: Show[]
}>()
</script>

<template>
  <div class="wrapper">
    <h1 data-test-id="genre">{{ genre }}</h1>
    <div class="shows-list">
      <RouterLink
        v-for="show in shows"
        :key="show.id"
        :to="`/show/${show.id}`"
        class="show-entry"
        data-test-id="show-entry"
      >
        <img :src="show.image?.medium" :alt="show.name" data-test-id="show-image" />
        <h2 class="show-title" data-test-id="show-title">{{ show.name }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0 1rem;
}
.shows-list {
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}
.show-entry {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.show-title {
  color: var(--color-link);
}
</style>
