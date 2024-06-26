
export const usePercobaanStore = defineStore('percobaan', () => {

  const count = ref(toRaw(useLocalStorage('count', 0)))
  const name = ref('Anas')
  const fullName = computed(() => `${name.value} tampan: ${count.value}`)

  function increment()
  {
    count.value++
  }

  function $reset()
  {
    count.value = 0
  }

  return {count, name, fullName, increment, $reset}
})