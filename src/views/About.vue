<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <div class="border p-3 m-3">
        <h1>Friend</h1>
        <p>{{chosen.name}}</p>
        <Thumbnail :filepath="chosen.image"/>
        <button class="btn btn-primary mb-3 d-block my-3" @click="toggleSelector">
          Change
        </button>
      </div>
      <Selector
        v-if="viewSelector"
        :items="items.fields"
        :actions="items.actions"
        :chosen="chosen"
        @close-selector="toggleSelector"
        @change-chosen="changeChosen"
      />
    </div>
  </div>
</template>

<script>
import Selector from "../components/Selector";
import axios from "axios";
import Thumbnail from "../components/Thumbnail";
export default {
  name: 'About',
  components: {Thumbnail, Selector },
  data() {
    return {
      chosen: {
          "id": "2",
          "name": "Misty",
          "type": "Cat",
          "breed": "Shorthaired moggie",
          "colour": "Grey and White",
          "age": "12",
          "status": "Waiting",
          "image": "/animals/misty/misty3.jpg",
          "room_id": "2",
          "friend_id": "1",
          "owner_id": null,
          "rehoming_id": null
      },
      items: [],
      viewSelector: false
    };
  },
  mounted() {
    axios.get("/api/admin/animals").then(res => (this.items = res.data));
  },
  methods: {
    toggleSelector() {
      this.viewSelector = !this.viewSelector;
    },
    changeChosen(newChosen){
      this.chosen = newChosen;
      this.viewSelector = false;
    }
  }
};
</script>
