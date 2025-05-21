<!-- ✅ EditTaskDialog.vue -->
<script setup lang="ts">
import { ref, watch } from "vue";
import type { Task } from "../types/Task";

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{
  (e: "save-task", task: Task): void;
  (e: "close"): void;
}>();

const dialog = ref(true);
const title = ref("");
const description = ref("");

watch(
  () => props.task,
  (task) => {
    title.value = task.title;
    description.value = task.description;
  },
  { immediate: true }
);

function handleClose() {
  dialog.value = false;
  emit("close");
}

function handleSave() {
  emit("save-task", {
    ...props.task,
    title: title.value.trim(),
    description: description.value.trim(),
  });
  handleClose();
}
</script>

<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title>Edit Task</v-card-title>
      <v-card-text>
        <v-text-field label="Title" v-model="title" />
        <v-textarea label="Description" v-model="description" rows="3" />
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="handleClose">Cancel</v-btn>
        <v-btn color="primary" @click="handleSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
