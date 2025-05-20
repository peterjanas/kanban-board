<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <v-card class="mb-2 pa-2" elevation="2">
    <div class="font-weight-bold">{{ title }}</div>
    <div class="text-subtitle-2">{{ description }}</div>
  </v-card>
</template>
