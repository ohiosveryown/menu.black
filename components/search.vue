<template>
  <section class="width">
    <div class="textarea--wrapper">
      <label
        class="title uc"
        for="search">
        Or Search:
      </label>
      <textarea
        rows="1"
        type="text"
        id="search" name="search"
        class="title uc"
        placeholder="by location (Eastside) or Food Type (Pizza)"
        v-model="filter"
      />
    </div>

    <div class="empty title uc" v-if="!filteredProvisions.length">
      <p>Sorry, we don't have that one yet;</p>
      <p>Consider making a
        <a target="_blank" href="https://forms.gle/pqWk7PNgPfjUwXGo8" class="submission">
          <span class="submission--bg"></span>
        </a>
        💚
      </p>
    </div>

    <ul>
      <li v-for="(provision, index) in filteredProvisions" :key="`name-${index}`">
        <img :src="provision.image" :alt="provision.name">
        <div class="info">
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
        </div>
      </li>
    </ul>
  </section>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  section {
    margin-bottom: 20vw;
  }

  .textarea--wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 5.6rem;
    border-bottom: 1px solid #fff;
    width: 100%;
    @include breakpoint(md) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  textarea {
    border: none;
    margin-top: -.4rem;
    width: 100%;
    background: none;
    color: var(--coconut);
    resize: none;
    @include breakpoint(md) {
      flex: 1;
      margin-top: 0;
      margin-left: 2.4rem;
      text-align: right;
    }
  }

  label, textarea {
    padding: .4rem 0;
    font-size: 5.6vw;
    line-height: 1.24;
    @include breakpoint(md)  { font-size: 4vw; line-height: 1.1; }
    @include breakpoint(mdl) { font-size: 2.8vw; }
  }

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 5.6rem;
    @include breakpoint(md) {
      flex-direction: row;
      margin-bottom: 9.6rem;
    }
  }

  img {
    width: grid-width(12); height: 40vw;
    object-fit: cover;
    @include breakpoint(md) { width: grid-width(6); height: 28vw; }
    @include breakpoint(lg) { height: 24vw; }
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .empty {
    margin-top: 3.2rem;
    width: 100%;
    line-height: 1.3;
    font-size: 4.6vw;
    text-align: center;
    @include breakpoint(md) {
      font-size: 3.6vw;
      line-height: 1;
    }
  }

  .submission {
    position: relative;
    border-radius: 50%;
    width: 100%; height: 100%;
    cursor: pointer;
    &:before { content: 'submission↗'; }
  }

  .submission--bg {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
    border-radius: 50%;
    width: 100%; height: 100%;
    background: #92ff00;
    filter: blur(14px);
    @include breakpoint(md)  { filter: blur(24px); }
  }

  @media(pointer: fine) {
    .submission:hover {
      color: transparent;
      text-stroke: 1px var(--cucumber);
      -webkit-text-stroke: 1px var(--cucumber);
    }
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
