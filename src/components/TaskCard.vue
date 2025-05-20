<script setup lang="ts">
import type { Task } from "../types/Task";

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
}>();

function handleDelete() {
  emit("delete-task", props.task.id);
}
</script>

<template>
  <v-card class="ma-2 pa-2" elevation="2">
    <v-card-title class="d-flex justify-space-between">
      <span>{{ task.title }}</span>
      <v-btn icon @click="handleDelete" color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>{{ task.description }}</v-card-text>
  </v-card>
</template>
