
<template>
    <div class="card flex justify-center">
        Selamat Malam Kak
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-80 w-full">
            <template #value="{ value }">
                {{ value.map(a => a.label).join(",") }}
            </template>
        </TreeSelect>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const selectedValue = ref(null);

useHead({
    title: "Beranda"
})

onMounted(() => {
    
    fetch('/demo/data/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root)
            .then((data) => (nodes.value = data))
});
</script>
