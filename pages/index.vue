<template>
  <div class="enter">
    <about/>
    <main>
      <headline/>
      <subhead/>
      <discover/>
      <search/>
    </main>
  </div>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  @keyframes enter {
    0% { opacity: 0; transform: translateY(4rem); }
    100%   { opacity: 1; transform: translateY(0) }
  }

  .enter { opacity: 0; animation: enter 1s ease 500ms forwards; }
</style>


<script>
  import about from '../components/about'
  import headline from '../components/headline'
  import subhead from '../components/subhead'
  import discover from '../components/discover'
  import search from '../components/search'

  export default {
    components: { about, headline, subhead, discover, search },

    head() {
        return {
          title: 'Menu Dot Black – ✊🏼✊🏽✊🏿'
        }
    },

  }
</script>
