<script setup>
//import { shuffle } from 'lodash'
import { ref,watch } from 'vue'
import { shuffle } from 'lodash'

const text= ref('')

const items = ref([
  { id: 1, label: 'first name' },
  { id: 2, label: 'last name' },
  { id: 3, label: 'email' },
  { id: 4, label: 'website' }
])

// Gracias a watch podemos ver cambios en la variable (en este caso text) y muestra en consola los valores nuevos y antiguos
watch(text, (newText, oldText) => console.log(newText, oldText))

function shuffleItems() {
  items.value = shuffle(items.value)
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
      <input type="text" v-model="item.value" />
    </li>
  </ul>
  <button @click="shuffleItems">Shuffle</button>
</template>