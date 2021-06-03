<template>
  <div class="width">
    <about/>
    <main>
      <headline/>
      <subhead/>
      <discover/>
    </main>
  </div>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';
  .move {
    transform: translateX(30px);
    transition: all 300ms ease;
  }
</style>


<script>
  import about from '../components/about'
  import headline from '../components/headline'
  import subhead from '../components/subhead'
  import discover from '../components/discover'

  export default {
    components: { about, headline, subhead, discover  },

    head() {
        return {
          title: 'Menu Dot Black – ✊🏼✊🏽✊🏿'
        }
    },

  }
</script>
