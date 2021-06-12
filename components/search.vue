<template>
  <section class="width">
    <div class="input-wrapper">
      <label for="search">Or Search Here:</label>
      <input
        type="text"
        id="search" name="search"
        placeholder="by location (Eastside) or Food Type (Pizza)"
        v-model="filter"
      />
    </div>

    <ul>
      <li v-for="(provision, index) in filteredProvisions" :key="`name-${index}`">
        <img :src="provision.image" :alt="provision.name">
        <div class="meta">
          <div>{{ provision.name }}</div>
          <div>{{ provision.type }}</div>
        </div>

        <div class="location">
          <div>{{ provision.address }}</div>
          <div>{{ provision.neighborhood }}</div>
        </div>

        <footer>
          <a target="_blank" :href="provision.url">Menu ↗</a>
        </footer>
      </li>
    </ul>
  </section>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  section {
    margin-bottom: 20vw;
  }

  .input-wrapper {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
  }

  img {
    width: 30rem;
  }

</style>


<script>
  import { provisions } from '../static/provisions'
  export default {
    data() {
      return {
        filter: "",
        provisions : provisions
      }
    },
    computed: {
      filteredProvisions() {
        return this.provisions.filter(provision => {
          const type = provision.type.toString().toLowerCase();
          const name = provision.name.toLowerCase();
          const searchTerm = this.filter.toLowerCase();

          return (
            name.includes(searchTerm) || type.includes(searchTerm)
          );
        });
      }
    }
  }
</script>
