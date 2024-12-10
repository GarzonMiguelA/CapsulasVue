<script setup>
import { useRoute,useRouter } from 'vue-router';
import { watch } from 'vue';

const route = useRoute(); 
const router = useRouter();//Esto es lo que nos permite consultar todo, lo que permite hacer el pùsh

function navegarAmbHash() {
  router.push({ path: '/', hash: '#introduccio' });
}

const goToNextUser = () => {
  const nextId = parseInt(route.params.id) + 1;//Gracuas esta funcion flecha podemos acceder a la siguiente
  router.push(`/desti/${nextId}`);//Si nos fijamos hacer push con ROUTERR
};
const goToPrevUser = () => {
  const nextId = parseInt(route.params.id) - 1;
  router.push(`/desti/${nextId}`);//Gracias al routeRRR podemos construir url
};

watch(
  () => route.path,//A su vez route nos permite acceder los elementos de de la url creados con routeRR
  (newPath, oldPath) => {
    console.log(`Canvi de ruta: ${oldPath} → ${newPath}`);
  }
);
</script>


<template>
    <div>desti</div>
    <h3>Path: {{ route.path }}</h3><!-- Nos muesta todo lo de despues del localhost: /desti/(numero) --En este caso-- -->
    <h4>Id: {{ route.params.id }}</h4>
    <p>Query:{{ route.query }}</p>
    <p>hash:{{ route.hash }}</p>
    <button @click="navegarAmbHash">Ir a home</button>
    <button @click="goToNextUser">Ves al siguiente link</button>
    <button @click="goToPrevUser">Ves al anterior link</button>

   
</template>