<script setup lang="ts">
import draggable from "vuedraggable";
import TaskCard from './TaskCard.vue'
import type { Task } from '../types/Task'

const props = defineProps<{
  title: string
  tasks: Task[]
  status: Task['status']
}>()

const emit = defineEmits<{
  (e: 'delete-task', id: number): void
}>()

</script>

<template>
  <v-card class="pa-2" elevation="4">
    <v-card-title>{{ title }}</v-card-title>

    <div v-for="task in tasks" :key="task.id">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', $event)"
      />
    </div>
  </v-card>
</template>