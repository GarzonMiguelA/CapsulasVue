<script setup>
import { ref,computed } from 'vue'

const nom = ref('Miguel Angel')
const cognom = ref('Garzón')

//Gracias a computed podemos crear propiedades calculadas que dependen de otras var reactivas
const nomComplet = computed(() => {
    return `${nom.value} ${cognom.value}`
})

console.log('Componente cargado')
</script>

<template>
  <div>
    <p>Nom complet: {{ nomComplet }}</p>
    <input v-model="nom" placeholder="Nom" />
    <input v-model="cognom" placeholder="Cognom" />
  </div>
</template>