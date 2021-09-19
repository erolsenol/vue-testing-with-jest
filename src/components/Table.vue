<template>
    <div>
        <v-data-table  
        :headers="headers"
        :items="desserts"
        item-key="name"
        class="elevation-1">
        
        </v-data-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            items: []
        }
    },
    methods: {
        GetData() {
            const response = await axios.get('https://todowebapi.herokuapp.com/items')
            console.log(response)
        }
    }
}
</script>

<style scoped>

</style>