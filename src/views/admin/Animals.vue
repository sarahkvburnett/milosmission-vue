<template>
    <div class="container py-2">
        <h1 class="text-center">Animals</h1>
        <hr>
        <div class="counts my-3">
            <Count v-for="(count, name) in counts" :count="count" :name="name" :key="count" :current="currentStatus" @filter-status="filterAnimalsByStatus(name)"/>
        </div>
        <div class="search my-3">
<!--          todo:  search component and need to sort the fitler out - look at old react job listings things got an array of applied filters-->
            <input type="text" class="form-control" placeholder="Search">
            <div>
                <button :class="isActiveType('cat') ? 'btn btn-primary' : 'btn btn-dark'" @click="toggleTypeFilter('cat')">Cat</button>
                <button :class="isActiveType('dog') ? 'btn btn-primary' : 'btn btn-dark'" @click="toggleTypeFilter('dog')">Dog</button>
            </div>
        </div>
        <Table :rows="currentAnimals" :counts="counts" :actions="actions"/>
    </div>
</template>

<!-- status: all => 0, new = 1, waiting = 2, rehomed = 3 -->
<!-- type: all => 0, cat = 1, dog = 2 -->

<script>
    import Table from "../../components/admin/Table";
    import axios from "axios";
    import Count from "../../components/admin/Count";
    export default {
        name: "Animals",
        components: {Count, Table},
        data(){
            return {
                animals: [],
                currentAnimals: [],
                counts: [],
                actions: [],
                currentStatus: 'all',
                currentType: 'all'
            }
        },
        created(){
            axios.get('/api/admin/animals').then( res => {
                this.animals = res.data.fields;
                this.currentAnimals = res.data.fields;
                this.counts = res.data.counts;
                this.actions = res.data.actions;
            });
            //todo catch;
        },
        methods: {
            filterAnimalsByStatus(status){
                this.currentStatus = status;
                if (status === "all") return this.currentAnimals = this.animals;
                this.currentAnimals = this.animals.filter( animal => animal.status.toLowerCase() === status);
            },
            filterAnimalsByType(type){
                this.currentType = type;
                this.currentAnimals = this.currentAnimals.filter( animal => animal.type.toLowerCase() === type);
            },
            applySearch(){
              //todo
            },
            removeSearch(){
                this.currentAnimals = this.animals;
            },
            isActiveType(type){
                if (this.currentType === type || this.currentType === 'all') return true;
                return false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .counts, .search {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        @media (min-width: 450px){
            grid-template-columns: repeat(4, 1fr);
        }
    }
    .search {
        grid-template-columns: 1fr auto;
    }
</style>
