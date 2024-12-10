<script setup>
import { RouterView } from 'vue-router';
import KeyForSample from './components/KeyForSample.vue'
import WatchArrayExample from './components/WatchArrayExample.vue'
import LaOtraView from './views/LaOtraView.vue'; 
import NombreApellido from './components/NombreApellido.vue';
import PrecioProducto from './components/PrecioProducto.vue';
import Desti from './components/Desti.vue';

</script>



<template>
  <div class="container">
    <h1>All examples</h1>
    
    <div class="example">
      <h3>Importancia de usar key en el for</h3>
      <p>KeyForSample:</p>
      <KeyForSample />
    </div>
    
    <div class="example">
      <h3>Importancia de watch</h3>
      <p>WatchArrayExample</p>
      <WatchArrayExample/>
    </div>
    
    <div class="example">
      <h3>Importancia de routerview</h3>
      <p>RouterView</p>
      <RouterView/>
    </div>
    
    <div class="example">
      <h3>Importancia de propiedad computed</h3>
      <p>NombreApellido</p>
      <NombreApellido />
    </div>
    
    <div class="example">
      <h3>Importancia de propiedad computed</h3>
      <p>PrecioProducto</p>
      <PrecioProducto/>
    </div>
    
    <div class="example">
      <h3>Importancia de vue router para navegar entre diferentes rutas</h3>
      <p>Desti</p>
      <Desti />
    </div>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Espacio entre los componentes */
}

.example {
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

h3 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}
</style>
