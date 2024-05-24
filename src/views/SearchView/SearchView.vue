<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showsApi, type ScoredShow, type Show } from '@/services/showsApi'
import ShowCompact from '@/components/ShowCompact/ShowCompact.vue'

const router = useRouter()
const route = useRoute()

const query = ref<string>((route.query.q as string) || '')
const shows = ref<Show[]>([])
const loading = ref(false)
const error = ref('')

const search = async () => {
  if (!query.value.trim()) {
    return
  }

  shows.value = []
  loading.value = true
  error.value = ''

  try {
    router.push({ query: { q: query.value } })
    const response = await showsApi.searchShows(query.value)
    shows.value = response.data.map((entry: ScoredShow) => entry.show)
    error.value = ''
  } catch (err) {
    error.value = 'Failed to search shows. Please try again.'
    console.error('Error searching shows:', err)
  } finally {
    loading.value = false
  }
}

watch(
  () => route.query.q,
  (newQuery) => {
    if (newQuery) {
      query.value = newQuery as string
      search()
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="search-page">
    <h1>Search Shows</h1>
    <div class="search-box">
      <input
        v-model="query"
        @keyup.enter="search"
        type="text"
        placeholder="Search for a show..."
        class="search-input"
      />
      <button @click="search" class="search-button" type="button">Search</button>
    </div>

    <div v-if="loading" class="search-message">Loading...</div>
    <div v-else-if="error" class="search-message error">{{ error }}</div>
    <div v-else-if="!shows.length" class="search-message">No shows found.</div>
    <div v-else class="show-results">
      <p v-if="shows.length == 10">The top 10 entries are shown</p>
      <RouterLink :to="`/show/${show.id}`" v-for="show in shows" :key="show.id" class="show-entry">
        <ShowCompact :show="show" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.search-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.search-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.search-input,
.search-button {
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
}
.search-input {
  flex: 1;
  border: 1px solid var(--color-border);
}

.search-button {
  width: 80px;
  flex-shrink: 0;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: none;
  cursor: pointer;
}

.search-button:hover {
  background-color: var(--color-background-hover);
}

.error {
  color: var(--color-error);
}

.show-results {
  display: flex;
  gap: 1.25rem;
  margin-top: 1.25rem;
  flex-direction: column;
  align-items: center;
}

.search-message {
  text-align: center;
  margin-top: 1.25rem;
}

.show-entry {
  color: var(--color-text);
  width: 100%;
}

@media (max-width: 600px) {
  .search-box {
    flex-direction: column;
  }

  .search-input {
    width: 100%;
  }

  .search-button {
    width: 100%;
  }
}
</style>
