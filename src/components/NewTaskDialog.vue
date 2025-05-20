<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Task } from '../types/Task'

const emit = defineEmits<{
  (e: 'add-task', task: Task): void
}>()

const dialog = ref(false)
const newTaskTitle = ref('')
const newTaskDescription = ref('')
const selectedStatus = ref<'todo' | 'inProgress' | 'done'>('todo')
const warning = ref('')

const statusOptions = [
  { title: 'To Do', value: 'todo' },
  { title: 'In Progress', value: 'inProgress' },
  { title: 'Done', value: 'done' }
]

function submitTask() {
  const trimmed = newTaskTitle.value.trim()
  if (!trimmed) {
    warning.value = 'Title is required'
    return
  }

  emit('add-task', {
    id: Date.now(),
    title: trimmed,
    description: newTaskDescription.value.trim(),
    status: selectedStatus.value
  })

  dialog.value = false
  newTaskTitle.value = ''
  newTaskDescription.value = ''
  selectedStatus.value = 'todo'
  warning.value = ''
}

watch(newTaskTitle, (val) => {
  if (val.trim()) {
    warning.value = ''
  }
})
</script>

<template>
  <div>
    <v-btn
      color="primary"
      icon
      size="large"
      style="position: fixed; bottom: 24px; right: 24px; z-index: 999"
      @click="dialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Add New Task</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="newTaskTitle"
            :error="!!warning"
            :error-messages="warning"
            label="Title"
            @keyup.enter="submitTask"
          />
          <v-textarea
            v-model="newTaskDescription"
            label="Description"
            rows="3"
            auto-grow
          />
          <v-select
            v-model="selectedStatus"
            :items="statusOptions"
            item-title="title"
            item-value="value"
            label="Select Column"
          />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="submitTask">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
