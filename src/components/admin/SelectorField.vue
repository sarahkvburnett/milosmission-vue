<template>
  <section>
      <div class="border p-3 m-3">
        <h2>{{title}}</h2>
        <p class="h6" v-if="chosen.name">{{chosen.name}}</p>
          <p style="width: 160px;">
              <Thumbnail v-if="chosen.image" :filepath="chosen.image"/>
          </p>
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
    </section>
</template>

<script>
import Selector from "./Selector";
import axios from "axios";
import Thumbnail from "./Thumbnail";
export default {
  name: 'SelectorField',
  props: ['title', 'field'],
  components: {Thumbnail, Selector },
  data() {
    return {
      chosen: this.field,
      items: [],
      viewSelector: false
    };
  },
  created() {
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

<style scoped lang="scss">
  .container > div {
    width: 300px;
  }
</style>
