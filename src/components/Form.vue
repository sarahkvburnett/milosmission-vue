<template>
<!--  need to add action back in it was bitching-->
  <form>
    <!--        todo: add error component-->
    <FormField
      v-for="(value, name) in fields"
      :key="name"
      :field="name"
      :type="inputs.hasOwnProperty(name) ? inputs[name] : 'text' "
      :options="options.hasOwnProperty(name) ? options[name] : []"
      :value="value"
    />
  </form>
</template>

<!--need to sort out the v-model data binding for the form values
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
  },
};
</script>

<style scoped></style>

