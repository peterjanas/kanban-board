<script setup lang="ts">
import TaskList from "../components/TaskList.vue";
import { useKanban } from "../composables/useKanban";
import NewTaskDialog from "../components/NewTaskDialog.vue";
import EditTaskDialog from "../components/EditTaskDialog.vue";
import type { Task } from "../types/Task";
import { ref } from "vue";

const { todo, inProgress, done, addTask, updateTask, deleteTask } = useKanban();
const editingTask = ref<Task | null>(null);

function handleAddTask(task: Task) {
  addTask(task);
}

function handleEditTask(task: Task) {
  editingTask.value = { ...task };
}

function handleSaveTask(updated: Task) {
  updateTask(updated);
  editingTask.value = null;
}

function handleDeleteTask(taskId: number) {
  deleteTask(taskId);
}
</script>

<template>
  <v-container fluid class="d-flex flex-column">
    <v-row>
      <v-col>
        <TaskList
          title="To Do"
          :tasks="todo"
          status="todo"
          @delete-task="handleDeleteTask"
          @edit-task="handleEditTask"
        />
      </v-col>
      <v-col>
        <TaskList
          title="In Progress"
          :tasks="inProgress"
          status="inProgress"
          @delete-task="handleDeleteTask"
          @edit-task="handleEditTask"
        />
      </v-col>
      <v-col>
        <TaskList
          title="Done"
          :tasks="done"
          status="done"
          @delete-task="handleDeleteTask"
          @edit-task="handleEditTask"
        />
      </v-col>
    </v-row>

    <v-row class="justify-end align-end" style="min-height: 64px">
      <v-col cols="auto">
        <NewTaskDialog @add-task="handleAddTask" />
      </v-col>
    </v-row>

    <EditTaskDialog
      v-if="editingTask"
      :task="editingTask"
      @save-task="handleSaveTask"
      @close="editingTask = null"
    />
  </v-container>
</template>
