<template>
    <aside class="bg-primary">
        <!-- todo bro there is still php in this... -->
        <a v-for="item in menuLinks" :item="item" :key="item" href="'.$url.'" class="list-group-item list-group-item-action"><i class="fas fa-'.$icon.' fa-2x"></i> '.$page.'</a>';
        <button class="list-group-item list-group-item-action" data-toggle="modal" data-target="#admin-logout"><i class="fas fa-'.$icon.' fa-2x"></i> '.$page.'
        </button>
    </aside>
</template>

<script>
    export default {
        name: "Menu",
        computed: {
            menuLinks(){
             return [
                ['/admin', 'home', 'Home'],
                ['/admin/animals', 'paw', 'Animals'],
                ['/admin/owners', 'user-friends', 'Owners'],
                ['/admin/media', 'photo-video', 'Media'],
                ['/admin/rooms', 'warehouse', 'Rooms'],
                ['/admin/users', 'user', 'Users'],
                ['/admin/rehomings', 'house-user', 'Rehomings'],
             ]
            }
        }
    }
</script>

<style scoped>

</style>
