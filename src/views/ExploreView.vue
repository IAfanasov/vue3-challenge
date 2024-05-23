<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { showsApi, type Show } from '../services/showsApi'
import ShowsList from '@/components/ShowsList.vue'

const showsGroupedAndSorted = ref<Map<string, Show[]>>(new Map())

const fetchShows = async () => {
  try {
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
  } catch (error) {
    console.error('Error fetching shows:', error)
  }
}

onMounted(() => {
  fetchShows()
})
</script>

<template>
  <template v-for="genre in showsGroupedAndSorted.keys()" :key="genre">
    <ShowsList :shows="showsGroupedAndSorted.get(genre)!" :genre="genre" />
  </template>
</template>
