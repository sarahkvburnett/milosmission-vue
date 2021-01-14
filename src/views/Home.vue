<template>
  <div id="main-home">
    <div id="main"></div>
    <section id="intro" class="p-5">
      <div class="lead">
        <h1>Animal Sanctuary</h1>
        <p class="lead">
          Milos mission provides safe haven for rescued animals until we find
          them a new forever home.
        </p>
      </div>
    </section>
    <section id="animals" class="p-5 bg-primary">
      <h1 class="text-center p-4">Animals needing homes</h1>
      <div>
        <div
          class="card"
          v-for="animal in animals"
          :animal="animal"
          :key="animal.id"
        >
          <img :src="'./images/' + animal.image" />
        </div>
      </div>
    </section>
    <section class="mh-40 p-5">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero tempore
        aperiam ex facilis assumenda voluptatem natus ipsam, quia cum. Debitis
        nemo tempora velit cupiditate architecto fugiat culpa assumenda vero
        sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        saepe amet aliquid facilis. Perspiciatis ratione aliquid cupiditate
        iusto deserunt dolore dolorem id, possimus alias fugiat sequi
        reprehenderit quos amet commodi.
      </p>
    </section>
    <footer class="mh-40 bg-secondary"></footer>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      animals: []
    };
  },
  components: {},
  mounted() {
    axios
      .get("/api/animals")
      .then(res => (this.animals = res.data.fields))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped lang="scss">
#main-home {
  & > * {
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #logo {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5vh;
  }
  section p {
    width: 60vw;
    margin: auto;
  }
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-between;
  }
  #main {
    display: block;
    padding: 5vh;
    margin: 0;
    background-image: url("../assets/main-bg.jpg");
    background-color: $gray-200;
    height: 70vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  #intro {
    color: $primary;
    font-family: "Staatliches";
    height: 20vh;
  }
  #animals {
    display: block;
    text-align: center;
    & > div {
      @include responsive-grid();
      grid-template-rows: 1fr;
    }
    .card {
      max-height: 300px;
      border: none;
      img {
        max-height: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>
