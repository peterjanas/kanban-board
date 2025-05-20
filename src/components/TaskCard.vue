<script setup lang="ts">
import type { Task } from "../types/Task";

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
  (e: "edit-task", task: Task): void;
}>()

function handleDelete() {
  emit("delete-task", props.task.id);
}
</script>

<template>
  <v-card class="ma-2 pa-2" elevation="2">
    <v-card-title
      class="d-flex justify-space-between"
      style="white-space: normal; word-break: break-word;"
    >
      {{ task.title }}
      <div class="d-flex gap-1">
    <v-btn icon size="small" variant="text" @click="$emit('edit-task', task)">
      <v-icon size="22">mdi-pencil</v-icon>
    </v-btn>
    <v-btn icon size="small" variant="text" @click="handleDelete">
      <v-icon size="22" color="red">mdi-delete</v-icon>
    </v-btn>
  </div>
    </v-card-title>

    <v-card-text
      class="text-wrap"
      style="white-space: normal; word-break: break-word;"
    >
      {{ task.description }}
    </v-card-text>
  </v-card>
</template>
