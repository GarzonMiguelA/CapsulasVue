<script setup>
    import {useRouter} from 'vue-router';

    const router = useRouter();


    const goToAbout = () => {
        router.push('/about');
    }
</script>

<template>
    <div>
        <button @click="goToAbout">Ves a About</button> //Esto te lleva la otra vue
    </div>
</template>