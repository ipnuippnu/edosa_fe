<script setup lang="ts">

import { usePercobaanStore } from "~/stores/percobaan"
const percobaan = usePercobaanStore()

let {count, name, fullName, increment, $reset} = usePercobaanStore()
let a = useLocalStorage("Alissa", 0)

onMounted(() => {
    setInterval(() => {

        a.value = new Date()

    }, 1000)
})

</script>

<template>

<span>{{ percobaan.$state }}</span>
<span>{{ percobaan.fullName }}</span>
<span>{{ count }}</span>
<span>{{ a }}</span>

<Button @click="increment">Tambah</Button>
<Button @click="$reset">Reset</Button>

</template>