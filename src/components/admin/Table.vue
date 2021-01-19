<template>
    <div class="my-3 table-responsive">
        <table v-if="rows.length > 0" class="table bg-white">
            <tr>
                <th v-for="column in columns" :column="column" :key="column">{{column}}</th>
                <th></th>
            </tr>
            <tr v-for="row in rows" :row="row" :key="row.id">
<!--                todo display image here if applicable -->
                <td v-for="(value, column) in row" :value="value" :key="column">
                    <Thumbnail v-if="column === 'image'" :filepath="value" />
                    <span v-else>{{value}}</span>
                </td>
                <td class="text-right"><a class="btn btn-primary" :href="`/admin/animal?id=${row['id']}`">Edit</a></td>
            </tr>
        </table>
        <table v-else>
            <th class="text-center py-5">None found</th>
        </table>
    </div>
</template>

<script>
    import toTitleCase from "../../utilities/toTitleCase";
    import Thumbnail from "./Thumbnail";

    export default {
        name: "Table",
        components: {Thumbnail},
        props: ['rows', 'actions'],
        computed: {
            columns(){
                const columns = Object.keys(this.rows[0]);
                return columns.map( name => toTitleCase(name));
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }
    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
</style>
