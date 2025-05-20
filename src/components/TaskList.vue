<script setup lang="ts">
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";
import type { Task } from "../types/Task";
import { ref, watch } from "vue";

const props = defineProps<{
  title: string;
  tasks: Task[];
  status: Task["status"];
}>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
  (e: "edit-task", task: Task): void;
}>()

const internalTasks = ref([...props.tasks]);

watch(
  () => props.tasks,
  (newTasks) => {
    internalTasks.value = [...newTasks];
  }
);

function handleDrop(evt: any) {
  for (const task of internalTasks.value) {
    task.status = props.status;
  }
}
</script>

<template>
  <v-card class="pa-2 d-flex flex-column flex-grow-1" elevation="4">
    <v-card-title>{{ title }}</v-card-title>

    <draggable
      v-model="internalTasks"
      group="tasks"
      item-key="id"
      ghost-class="drag-ghost"
      @change="handleDrop"
      class="draggable-column"
    >
      <template #item="{ element }">
        <TaskCard
          :task="element"
          @delete-task="$emit('delete-task', element.id)"
          @edit-task="$emit('edit-task', element)"
        />
      </template>
    </draggable>

    <v-card-subtitle
      v-if="internalTasks.length === 0"
      class="text-grey text-center"
    >
      No tasks
    </v-card-subtitle>
  </v-card>
</template>

<styled>
  
</styled>
