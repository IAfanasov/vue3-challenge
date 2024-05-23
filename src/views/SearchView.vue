<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showsApi, type ScoredShow, type Show } from '@/services/showsApi'
import ShowCompact from '@/components/ShowCompact.vue'

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
  } catch (err) {
    error.value = 'Failed to search shows. Please try again.'
    console.error('Error searching shows:', err)
  } finally {
    loading.value = false
  }
}

watch(
  route,
  () => {
    if (route.query.q) {
      query.value = route.query.q as string
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

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="shows.length > 0" class="show-results">
      <p v-if="shows.length == 10">The top 10 entries are shown</p>
      <RouterLink :to="`/show/${show.id}`" v-for="show in shows" :key="show.id" class="show-entry">
        <ShowCompact :show="show" />
      </RouterLink>
    </div>

    <div v-else-if="!loading && !error" class="no-results">No shows found.</div>
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

.search-input {
  height: 2rem;
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
}

.search-button {
  height: 2rem;
  width: 80px;
  flex-shrink: 0;
  padding: 0.5rem;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.search-button:hover {
  background-color: var(--color-background-hover);
}

.loading {
  text-align: center;
  margin-top: 1.25rem;
}

.error {
  color: var(--color-error);
  text-align: center;
  margin-top: 1.25rem;
}

.show-results {
  display: flex;
  gap: 1.25rem;
  margin-top: 1.25rem;
  flex-direction: column;
  align-items: center;
}

.no-results {
  text-align: center;
  margin-top: 1.25rem;
}

.show-entry {
  color: var(--color-text);
  width: 100%;
}

@media (max-width: 37.5rem) {
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
