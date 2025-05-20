<script setup lang="ts">
import TaskList from '../components/TaskList.vue'
import { useKanban } from '../composables/useKanban'
import NewTaskDialog from '../components/NewTaskDialog.vue'
import type { Task } from '../types/Task'

const { todo, inProgress, done, addTask } = useKanban()


function handleAddTask(task: Task) {
  addTask(task)
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TaskList title="To Do" :tasks="todo" status="todo" />
      </v-col>
      <v-col>
        <TaskList title="In Progress" :tasks="inProgress" status="inProgress" />
      </v-col>
      <v-col>
        <TaskList title="Done" :tasks="done" status="done" />
      </v-col>
    </v-row>

    <NewTaskDialog @add-task="handleAddTask" />
  </v-container>
</template>




