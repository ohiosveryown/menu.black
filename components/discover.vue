<template>
  <section>
    <h3 class="title width uc">Feeling adventurous? Random ¨
      spots are shown below.
      <span @click="shuffle" class="refresh">
        <span class="refresh--bg"/>
      </span>
      → the list for more offerings ↙
    </h3>

      <ul>
        <li v-for="(provision, index) in shuffledProvisions" :key="`name-${index}`">
          <a target="_blank" :href="provision.url">
            <img :src="provision.image" alt="">
            <div class="meta title uc">
              <h4>{{ provision.name }} ↗</h4>
              <h5>{{ provision.type }}</h5>
            </div>
          </a>
        </li>
      </ul>
  </section>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  section {
    position: relative;
    @include breakpoint(md) { margin-bottom: 6.4rem; }
    @include breakpoint(lg) { margin-bottom: 9.6rem; }
  }

  h3 {
    font-size: 5.6vw;
    line-height: 1.24;
    @include breakpoint(md)  { font-size: 4vw; line-height: 1.1; }
    @include breakpoint(mdl) { font-size: 3.6vw; }
    // @include breakpoint(lg)  { font-size: 4rem; }
  }

  .random {
    display: none;
    position: relative;
    transform: scale(.64) translateY(.88rem);
    @include breakpoint(md) { display: inherit; transform: scale(1) translateY(.24rem); }
    @include breakpoint(lg) { transform: scale(1) translateY(0rem); }
  }

  .refresh {
    position: relative;
    border-radius: 50%;
    width: 100%; height: 100%;
    cursor: pointer;
    &:before { content: 'Refresh'; }
  }

  @media(pointer: fine) {
    .refresh:hover {
      color: transparent;
      text-stroke: 1px var(--cucumber);
      -webkit-text-stroke: 1px var(--cucumber);
    }
  }

  .refresh--bg {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
    border-radius: 50%;
    width: 100%; height: 100%;
    background: #92ff00;
    filter: blur(12px);
    @include breakpoint(md)  { filter: blur(24px); }
  }

  ul {
    overflow-x: auto;
    white-space: nowrap;
    margin: 0 0 0 auto;
    padding-left: 5vw;
    padding: 2.4rem 0 4rem 5vw;
    max-width: 100vw;
    @include breakpoint(md) { padding-top: 4rem; }
  }

  li, a {
    display: inline-flex;
    align-items: center;
    margin-right: 2.4rem;
    @include breakpoint(mdl) { margin-right: 4rem; }
    @include breakpoint(xl)  { margin-right: 7.2rem; }
  }

  @media(pointer: fine) {
    a:hover {
      img { border: 3px solid rgba(210, 251, 155, .4); }
      h4 { font-style: italic; }
    }
  }

  li:last-of-type { margin-right: 8vw; }

  img {
    border-radius: 100px;
    border: 3px solid var(--cucumber);
    margin-right: 1.4rem;
    width: 20vw; height: 20vw;
    object-fit: cover;
    @include breakpoint(md) { width: 10vw; height: 10vw; }
  }

  h4 {
    margin-bottom: .2rem;
    font-size: 4vw;
    line-height: 1.1;
    letter-spacing: .8px;
    text-stroke: 1px var(--onion);
    -webkit-text-stroke: 1px var(--onion);
    @include breakpoint(md) {
      font-size: 1.8vw;
      text-stroke: 1.4px var(--onion);
      -webkit-text-stroke: 1.4px var(--onion);
    }
  }

  h5 {
    font-size: 3.2vw;
    opacity: .56;
    @include breakpoint(md) { font-size: 1.6vw; }
  }

</style>


<script>
  import { provisions } from '../static/provisions'
  export default {
    data: () => ({
      provisions,
      provision: null,
      shuffledProvisions: null
    }),
    methods: {
      randoProv : function(e) {
        this.provision = this.provisions[~~(Math.random() * this.provisions.length)]
      },
      shuffle() {
        let provisions = [...this.provisions]
        let first,
            second,
            temp,
            count = provisions.length
        for (let provision = 0; provision < 10; provision++) {
            first = Math.floor(Math.random() * count)
            second = Math.floor(Math.random() * count)
            temp = provisions[first]
            provisions[first] = provisions[second]
            provisions[second] = temp
        }
        this.shuffledProvisions = provisions.slice(0, 4)
      }
    },
    mounted() {
      this.shuffle()
    },
  }
</script>
