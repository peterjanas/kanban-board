<script setup lang="ts">
import type { Task } from "../types/Task";

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
  (e: "edit-task", task: Task): void;
}>();

function handleDelete() {
  emit("delete-task", props.task.id);
}

function handleEdit() {
  emit("edit-task", props.task);
}
</script>

<template>
  <v-card class="ma-2 pa-2" elevation="2">
    <v-card-title
      class="d-flex justify-space-between"
      style="white-space: normal; word-break: break-word"
    >
      {{ task.title }}
      <v-btn-toggle class="pa-0">
        <v-btn icon size="small" variant="text" @click="handleEdit">
          <v-icon size="22">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon size="small" variant="text" @click="handleDelete">
          <v-icon size="22" color="red">mdi-delete</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-card-title>

    <v-card-text
      class="text-wrap"
      style="white-space: normal; word-break: break-word"
    >
      {{ task.description }}
    </v-card-text>
  </v-card>
</template>
