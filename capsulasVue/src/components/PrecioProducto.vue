<script setup>
import { ref, computed } from 'vue'

const productes = ref([
  { nombre: 'Portàtil', preu: 1000 },
  { nombre: 'Mòbil', preu: 500 },
  { nombre: 'Tauleta', preu: 300 },
])

const preuMinim = ref(0)

//Gracias a computed podemos crear propiedades calculadas de manera eficiente
const listaFiltrada = computed(() => //Gracias a computed mejoramos rendimiento y evitando calculos innecesarios
  productes.value.filter(producte => producte.preu > preuMinim.value)
)
</script>

<template>
  <input v-model.number="preuMinim" placeholder="Preu mínim" />
  <ul>
    <li v-for="producte in listaFiltrada" :key="producte.nombre">
      {{ producte.nombre }} - {{ producte.preu }} €
    </li>
  </ul>
</template>