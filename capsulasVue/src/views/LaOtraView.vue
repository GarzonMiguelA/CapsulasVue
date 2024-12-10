<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();

const goToAbout = () => {
    router.push({name: '/about'})
}

</script>

<template>
  <header>
    <p>Ahora en LaOtraView</p>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
        
    </div>
  </header>

  <main >
    <KeyForSample />
    <WatchArrayExample />
  </main>
</template>

