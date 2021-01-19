<template>
<!--  todo need to add action back in it was bitching-->
  <form class="border p-3 m-3">
    <h2>Info</h2>
    <!--        todo: add error component-->
    <FormField
      v-for="(value, name) in fields"
      :key="name"
      :field="name"
      :type="inputs.hasOwnProperty(name) ? inputs[name] : 'text' "
      :options="options.hasOwnProperty(name) ? options[name] : []"
      :value="value"
    />
    <button class="btn btn-primary">Update</button>
  </form>
</template>

<!--todo need to sort out the v-model data binding for the form values
see here: https://stackoverflow.com/questions/47311936/v-model-and-child-components
-->

<script>
import FormField from "./FormField";
export default {
  name: "Form",
  components: { FormField },
  props: ["fields", "inputs", "options", "actions"],
  data(){
    return {
      formFields: {...this.fields}
    }
  }
};
</script>
