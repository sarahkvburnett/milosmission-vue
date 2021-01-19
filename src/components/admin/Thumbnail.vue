<template>
    <img :src="`.././images/${filepath}`" height="200"/>
</template>

<script>
    export default {
        name: "Thumbnail",
        props: ['filepath']
    }
</script>

<style scoped>
    img {
        max-width: 100%;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
</style>
