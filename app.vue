<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toast />
  </div>
</template>

<script setup>

import { useToast } from 'primevue/usetoast';
const toast = useToast()

onMounted(() => {
  setInterval(() => {

    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Detail', life: 3000 })

  }, 5000)
})

</script>