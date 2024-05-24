<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { showsApi, type Show } from '../../services/showsApi'
import ShowsList from '@/components/ShowsList/ShowsList.vue'

const showsGroupedAndSorted = ref<Map<string, Show[]>>(new Map())

const error = ref('')
const loading = ref(false)

const fetchShows = async () => {
  try {
    loading.value = true
    const response = await showsApi.getShows()
    const showsGrouped = response.data.reduce((acc: Map<string, Show[]>, show: Show) => {
      show.genres.forEach((genre: string) => {
        if (acc.has(genre)) {
          acc.get(genre)!.push(show)
        } else {
          acc.set(genre, [show])
        }
      })
      return acc
    }, new Map())
    showsGroupedAndSorted.value = new Map(
      [...showsGrouped.entries()].map(([genre, shows]) => [
        genre,
        shows.sort((a, b) => Number(b.rating.average) - Number(a.rating.average))
      ])
    )
    error.value = ''
  } catch (err) {
    error.value = 'Failed to fetch shows. Please try again.'
    console.error('Error fetching shows:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchShows()
})
</script>

<template>
  <div v-if="loading" class="message">Loading...</div>
  <div v-else-if="error" class="message error">{{ error }}</div>
  <template v-else>
    <ShowsList
      v-for="genre in showsGroupedAndSorted.keys()"
      :key="genre"
      :shows="showsGroupedAndSorted.get(genre)!"
      :genre="genre"
    />
  </template>
</template>

<style scoped>
.message {
  text-align: center;
  margin-top: 1.25rem;
}

.error {
  color: var(--color-error);
}
</style>
