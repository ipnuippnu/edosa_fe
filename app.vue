<script setup lang="ts">

  const appTitle = "EDOv2"

  useHead({
    titleTemplate: (title? : String) => title ? `${title} – ${appTitle}` : appTitle
  })
  
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toast />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
</style>