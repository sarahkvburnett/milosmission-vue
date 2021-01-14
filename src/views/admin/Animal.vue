<template>
  <div class="container">
    <h1>Animal</h1>
    <img :src="`.././images/${animal.fields.image}`" height="200"/>
    <Form
      :fields="animal.fields"
      :inputs="animal.inputs"
      :options="animal.options"
      :actions="animal.actions"
    />
    <div v-if="animal.fields['rehomed_id']">
      <h2>Rehomed</h2>
    </div>
    <div v-if="animal.fields['friend_id']">
      <h2>Friend</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../../components/Form";
export default {
  name: "Animal",
  components: { Form },
  data() {
    return {
      animal: []
    };
  },
  mounted() {
    const id = this.$route.query.id;
    axios
      .get(`/api/admin/animals/details?id=${id}`)
      .then(res => (this.animal = res.data));
    //catch
  }
};
</script>

<style scoped></style>
