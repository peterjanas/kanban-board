<script setup lang="ts">
import draggable from "vuedraggable";
import TaskCard from './TaskCard.vue'
import type { Task } from '../types/Task'

const props = defineProps<{
  title: string
  tasks: Task[]
  status: Task['status']
}>()

</script>

<template>
  <v-card class="pa-2" elevation="4">
    <v-card-title>{{ title }}</v-card-title>

    <div v-for="task in tasks" :key="task.id">
      <TaskCard :task="task" />
    </div>
  </v-card>
</template>