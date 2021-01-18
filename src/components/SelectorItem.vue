<template>
  <div class="border">
      <p class="p-2 text-center mb-0 lead">{{item.name}}</p>
      <Thumbnail :filepath="item.image" />
<!--      <input type="radio" :checked="item.id === chosen.id">-->
    <input type="radio" :value="item" :checked="item.id === value.id" @change="$emit('input', item)"/>
  </div>
</template>

<script>
import Thumbnail from "./Thumbnail";
export default {
  name: "SelectorItem",
  components: {Thumbnail},
  props: ["item", "value", "chosen"]
};
</script>

<style scoped>
    img {
        height: 140px;
        width: 140px;
        object-fit: cover;
    }
</style>
