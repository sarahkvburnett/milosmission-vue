<template>
  <main class="container d-md-flex">
    <section>
      <div class="border p-3 m-3 text-center">
        <h1 class="h1">{{animal.fields.name}}</h1>
      </div>
      <div class="image border p-2 m-3">
        <img :src="`.././images/${animal.fields.image}`" height="200"/>
      </div>
      <Form
              :fields="animal.fields"
              :inputs="animal.inputs"
              :options="animal.options"
              :actions="animal.actions"
      />
    </section>
    <section>
      <div v-if="animal.fields['room_id']" class="border p-3 m-3">
        <h2>Room</h2>
        <p class="h6">{{animal.fields['room_id']}}</p>
        <button class="btn btn-primary">Change</button>
      </div>
      <div v-if="animal.fields['rehomed_id']" class="border p-3 m-3">
        <h2>Rehomed</h2>
        <button class="btn btn-primary">Change</button>
      </div>
      <SelectorField v-if="animal.fields['friend_id']" title="Friend" :field="animal.friends[0]"/>
      <div class="border p-3 m-3">
        <h2>Images</h2>
        <Uploader :media="animal.media" category="animals" :subcategory="animal.fields.name"/>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Form from "../../components/admin/Form";
import SelectorField from "../../components/admin/SelectorField";
import Uploader from "../../components/admin/Uploader";
export default {
  name: "Animal",
  components: {Uploader, SelectorField, Form },
  data() {
    return {
      animal: []
    };
  },
  created() {
    const id = this.$route.query.id;
    axios
      .get(`/api/admin/animals/details?id=${id}`)
      .then(res => (this.animal = res.data));
    //catch
  }
};
</script>

<style scoped lang="scss">
  main > section {
    flex: 1 1 50%;
  }
  .image img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    max-height: 400px;
  }
</style>
