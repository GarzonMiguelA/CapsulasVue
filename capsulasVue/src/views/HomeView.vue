<script setup>
    import {useRouter} from 'vue-router';

    const router = useRouter();


    const goToAbout = () => {
        router.push('/about');
    }
</script>

<template>
    <div>
        <p>Ahora estas en HomeView</p>
        <button @click="goToAbout">Ves a About</button> //Esto te lleva la otra vue
    </div>
</template>