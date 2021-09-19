<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-text-field
                v-model="item.title"
                label="Title"
                :rules="ruleTitle"
                hide-details="auto">
                </v-text-field>
                <v-text-field
                v-model="item.order"
                label="Order"
                :rules="ruleOrder"
                hide-details="auto">
                </v-text-field>
                <v-checkbox
                v-model="item.completed"
                :label="`Completed ${item.completed.toString()}`">
                </v-checkbox>
                <v-btn @click="GetItem" small color="primary" dark>Get Item</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            item : {
                id: -1,
                title: '',
                order: -1,
                completed : false,
                createdOn: ''
            },
            ruleTitle: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            ruleOrder: [
                value => !!value || 'Required.',
                value => value > -1 || 'Value must be greater than -1'
            ]
        }
    },
    methods: {
        async GetItem() {
            console.log(this.ruleTitle, this.ruleOrder)
            const response = await axios.get('https://todowebapi.herokuapp.com/items')
            console.log(response)
        }
    }
}
</script>

<style scoped>

</style>