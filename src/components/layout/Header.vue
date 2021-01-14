<template>
  <header
    class="bg-primary px-4 d-flex justify-content-center align-items-center"
    style="height: 15vh"
  >
    <h1
      id="logo"
      class="m-8 p-8 <?php if(!isset($black)) { echo 'text-primary';}?>"
    >
      MIL<i class="fas fa-paw fa-sm"></i>'S <br />
      MISSI<i class="fas fa-paw fa-sm"></i>N
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
#logo {
  font-family: "Staatliches";
  line-height: 0.9;
  font-weight: bold;
  // padding: 5vw;
  display: inline;
}
</style>
