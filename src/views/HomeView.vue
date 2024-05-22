<template>
  <div>
    <h1>shows</h1>
    <ul>
      <li v-for="show in shows" :key="show.id">{{ show.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { showsApi, type Show } from '../services/showsApi'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      shows: [] as Show[]
    }
  },
  async created() {
    try {
      const response = await showsApi.getShows()
      this.shows = response.data
    } catch (error) {
      console.error('Error fetching shows:', error)
    }
  }
})
</script>
