<template>
  <div v-if="type !==  'hidden'">
    <label>{{ field }}</label>
    <select v-if="type === 'select'">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
        @input="$emit('input', $event.target.value)"
      >
        {{ option }}
      </option>
    </select>
    <input
      v-else-if="type === 'file'"
      type="file"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: ["value", "field", "type", "options"]
};
</script>

<style scoped></style>
