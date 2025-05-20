<script setup lang="ts">
import type { Task } from '../types/Task'

const props = defineProps<{task: Task }>()
</script>


<template>
  <v-card class="mb-2 pa-2" elevation="2">
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-text>{{ task.description }}</v-card-text>
  </v-card>
</template>
