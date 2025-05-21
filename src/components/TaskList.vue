<script setup lang="ts">
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";
import type { Task } from "../types/Task";
import { ref, watch } from "vue";
import { useKanban } from "../composables/useKanban";

const { updateTaskStatus } = useKanban();

const props = defineProps<{
  title: string;
  tasks: Task[];
  status: Task["status"];
}>();

const emit = defineEmits<{
  (e: "delete-task", id: number): void;
  (e: "edit-task", task: Task): void;
}>();

const internalTasks = ref([...props.tasks]);

watch(
  () => props.tasks,
  (newTasks) => {
    internalTasks.value = [...newTasks];
  }
);

function handleDrop() {
  for (const task of internalTasks.value) {
    updateTaskStatus(task.id, props.status);
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
      style="min-height: 100px; padding: 4px"
    >
      <template #item="{ element }">
        <TaskCard
          :task="element"
          @delete-task="emit('delete-task', element.id)"
          @edit-task="emit('edit-task', element)"
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
