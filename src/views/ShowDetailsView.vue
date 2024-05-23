<script setup lang="ts">
import ShowDetails from '@/components/ShowDetails.vue'
import { showsApi, type Show } from '@/services/showsApi'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref<string | null>(null)
const show = ref<Show>()

const fetchShow = async () => {
  if (!id.value) {
    return
  }
  try {
    const response = await showsApi.getShowMainInfo(Number(id.value))
    show.value = response.data
  } catch (error) {
    console.error('Error fetching shows:', error)
  }
}

onMounted(async () => {
  id.value = route.params.id as string | null
  await fetchShow()
})
</script>

<template>
  <template v-if="show">
    <ShowDetails :show="show" />
  </template>
  <template v-else>
    <p>Loading...</p>
  </template>
</template>
