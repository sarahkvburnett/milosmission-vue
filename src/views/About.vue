<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <Selector
              :items="items.fields"
              :actions="items.actions"
      />
    </div>
  </div>
</template>

<script>
import Selector from "../components/Selector";
import axios from 'axios';
export default {
  components: {Selector},
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get("/api/admin/media").then(res => (this.items = res.data));
  }
};
</script>
