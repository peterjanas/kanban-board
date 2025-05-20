<script setup lang="ts">
import TaskList from '../components/TaskList.vue'
import { useKanban } from '../composables/useKanban'
import NewTaskDialog from '../components/NewTaskDialog.vue'
import type { Task } from '../types/Task'

const { todo, inProgress, done, addTask, deleteTask } = useKanban()


function handleAddTask(task: Task) {
  addTask(task)
}

function handleDeleteTask(taskId: number) {
  deleteTask(taskId)
}

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TaskList title="To Do" :tasks="todo" status="todo" @delete-task="handleDeleteTask" />
      </v-col>
      <v-col>
        <TaskList title="In Progress" :tasks="inProgress" status="inProgress" @delete-task="handleDeleteTask" />
      </v-col>
      <v-col>
        <TaskList title="Done" :tasks="done" status="done" @delete-task="handleDeleteTask" />
      </v-col>
    </v-row>

    <NewTaskDialog @add-task="handleAddTask" />
  </v-container>
</template>




