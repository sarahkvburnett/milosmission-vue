<template>
  <form class="border" @submit.prevent="$emit('change-chosen', chosenItem)">
    <h1 class="bg-light text-center py-3">Choose</h1>
    <section>
        <Uploader/>
        <SelectorItem v-for="item in items" :key="item.id" :item="item" :chosen="chosen"  v-model="chosenItem" />
    </section>
    <p class="d-flex justify-content-between px-5">
      <button class="btn btn-primary">Update</button>
      <button class="btn btn-secondary" type="button" @click="$emit('close-selector')">Cancel</button>
    </p>
  </form>
</template>

<script>
import SelectorItem from "./SelectorItem";
import Uploader from "./Uploader";
export default {
  name: "Selector",
  components: {Uploader, SelectorItem},
  props: ["items", "chosen"],
  data(){
    return {
      chosenItem: this.chosen,
    }
  },
};
</script>

<style scoped>
form > section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
div {
  margin: 10px;
  width: 140px;
  background: #fff;
}
form {
  position: absolute;
  height: 90vh;
  width: 90vw;
  top: 5vh;
  left: 5vw;
  background: #ffffff;
  overflow-y: auto;
}
</style>
