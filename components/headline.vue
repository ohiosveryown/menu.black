<template>
  <header class="width uc">
    <h1 class="title">
      <span class="row-one">
        <span>Menu</span>
        <span class="emoji mt-2">🌶️</span>
        <span class="dot">Dot</span>
      </span>
      <span class="black">Black</span>
    </h1>
  </header>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  h1 {
    margin: 3.2rem 0 0;
    font-size: 16vw;
    line-height: .92;
    @include breakpoint(lg) {
      margin-top: 8.4rem;
      font-size: 19.2rem;
    }
  }

  .row-one {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .emoji {
    font-size: 6vw;
    @include breakpoint(lg) {
      font-size: 7.2rem;
    }
  }

  .dot {
    color: transparent;
    text-stroke: 1px var(--cucumber);
    -webkit-text-stroke: 1px var(--cucumber);
  }

  .black {
    display: flex;
    justify-content: flex-end;
  }

</style>


<script>
  export default {

  }
</script>
