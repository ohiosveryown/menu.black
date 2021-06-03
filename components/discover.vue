<template>
  <section>
    <h3 class="title uc">Feeling adventurous? Random spots are shown below. Just
      <span class="refresh">
        <!-- refresh -->
        <span class="refresh--bg"></span>
      </span>
      the list for more offerings ↙</h3>
  </section>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  section {
    margin-bottom: 40vh;
  }

  h3 {
    font-size: 5.6vw;
    line-height: 1.24;
    @include breakpoint(md)  { font-size: 4vw; line-height: 1.1; }
    @include breakpoint(mdl) { font-size: 3.6vw; }
    @include breakpoint(lg)  { font-size: 4rem; }
  }

  .refresh {
    position: relative;
    border-radius: 50%;
    width: 100%; height: 100%;
    cursor: pointer;
  }

  .refresh:before { content: 'refresh'; }

  .refresh--bg {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
    border-radius: 50%;
    width: 100%; height: 100%;
    background: #92ff00;
    filter: blur(20px);
    @include breakpoint(md)  { filter: blur(32px); }
  }

</style>


<script>
  export default {

  }
</script>
