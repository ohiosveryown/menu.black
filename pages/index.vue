<template>
  <div>
    <about/>
    <headline/>
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

  export default {
    components: { about, headline, },

    head() {
        return {
          title: 'Menu Dot Black – ✊🏼✊🏽✊🏿'
        }
    },

  }
</script>
