<script setup lang="ts">
import { computed } from 'vue'
import draggable from 'vuedraggable'
import TaskCard from './TaskCard.vue'
import type { Task } from '../types/Task'


const props = defineProps<{
  title: string
  modelValue: Task[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Task[]): void
}>()

const tasks = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<template>
  <v-card class="ma-2 pa-2" width="300" elevation="2">
    <v-card-title>{{ title }}</v-card-title>

    <draggable v-model="tasks" item-key="id">
      <template #item="{ element }">
        <TaskCard :title="element.title" :description="element.description" />
      </template>
    </draggable>
  </v-card>
</template>
