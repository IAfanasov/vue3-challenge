<script setup lang="ts">
import ShowDetails from '@/components/ShowDetails/ShowDetails.vue'
import { showsApi, type Show } from '@/services/showsApi'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref<string | null>(null)
const show = ref<Show>()
const error = ref('')
const loading = ref(false)

const fetchShow = async () => {
  if (!id.value) {
    return
  }
  try {
    loading.value = true
    const response = await showsApi.getShowMainInfo(Number(id.value))
    show.value = response.data
    error.value = ''
  } catch (err) {
    console.error('Error fetching shows:', err)
    error.value = 'Failed to fetch show. Please try again.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  id.value = route.params.id as string | null
  await fetchShow()
})
</script>

<template>
  <div v-if="loading" class="message">Loading...</div>
  <div v-else-if="error" class="message error">{{ error }}</div>
  <ShowDetails v-if="show" :show="show" />
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
