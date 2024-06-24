<script setup lang="ts">
import type { NuxtError } from '#app'
import ErrorLayout from './pages/pages/NotFound.vue'

const props = defineProps({
  error: Object as () => NuxtError
})

console.log(props.error)

</script>

<template>
  <div>
    <error-layout :code=" error.statusCode " :message=" error.message "></error-layout>
  </div>
</template>