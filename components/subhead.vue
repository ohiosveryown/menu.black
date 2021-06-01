<template>
  <nav class="width">
    <h2 class="uc taj">
      Is a
      <span class="power">✊🏼✊🏽✊🏾✊🏿</span>
      growing collection of black owned food
      <span class="food">🍛🥙🥘</span>
      spots in the Atlanta area, curated for your consumption
    </h2>
  </nav>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  h2 {
    color: var(--cucumber);
    font-size: 5.6vw;
    line-height: 1.1;
    @include breakpoint(lg) { font-size: 6.7rem; }
  }

  .power, .food {
    display: inline-flex;
    font-size: 3.2vw;
    transform: translateY(-4px);
    @include breakpoint(md) { font-size: 3.8rem; }
    @include breakpoint(lg) { font-size: 3.8rem; }
  }
</style>


<script>
  export default {

  }
</script>
