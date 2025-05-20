<script setup lang="ts">
import TaskList from '../components/TaskList.vue'
import { useKanban } from '../composables/useKanban'

const { columns, addTask, deleteTask } = useKanban()
</script>

<template>
  <v-container fluid>
    <v-row justify="space-between">
        <TaskList title="To Do" v-model="columns.todo" />
        <TaskList title="In Progress" v-model="columns.inProgress" />
        <TaskList title="Done" v-model="columns.done" />
    </v-row>
  </v-container>
</template>
