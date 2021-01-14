<template>
  <form class="container">
    <section>
      <div v-for="item in items" :key="item" :item="item">
        <img :src="`./images/${item.filename}`" height="150" />
        <input type="checkbox" />
      </div>
    </section>
    <button class="btn btn-primary">Update</button>
  </form>
</template>

<script>
export default {
  name: "Selector",
  props: ["items"]
};
</script>

<style scoped>
form > section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
div {
  border: 1px solid #778899;
  margin: 10px;
  width: 140px;
}
form {
  border: 1px solid #778899;
}
img {
  height: 140px;
  width: 140px;
  object-fit: cover;
}
</style>
