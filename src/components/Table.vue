<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Title', value: 'title' },
        { text: 'Order', value: 'order' },
        { text: 'Completed', value: 'completed' },
        { text: 'Created On', value: 'createdOn' },
      ],
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await axios.get('./mocks/items.json');
      this.items = response.data;
    },
  },
};
</script>

<style scoped></style>
