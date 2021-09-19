<template>
    <div>
        <div>
            <item/>
        </div>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
export default {
    components: {
        Item
    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style scoped>

</style>