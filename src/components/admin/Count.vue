<template>
    <div :class="current === name ? 'border bg-primary' : 'border bg-dark'" @click="$emit('filter-status', name)">
        <p class="lead font-weight-bold">{{countName}}</p>
        <p>{{count}}</p>
    </div>
</template>

<script>
    import toTitleCase from "../../utilities/toTitleCase";
    export default {
        name: "Count",
        props: ['name', 'count', 'current'],
        computed: {
            countName(){
                return toTitleCase(this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        text-align: center;
    }
    div, .btn {
        cursor: pointer;
        color: #fff;
        &:hover {
            background: #34c5b8!important;
        }
    }
</style>
