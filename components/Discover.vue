<template>
  <aside>

    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>

  </aside>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  aside {
    display: flex;
    position: fixed;
    z-index: var(--z1);
    align-items: center;
    top: 6.4rem; right: 0;
    padding: 0 0 0 5.6rem;
    width: calc(50% - 5.6rem); height: calc(100% - 6.6rem);
    overflow-x: scroll;

    @include breakpoint(md) {
      // width: calc(50% - 5.6rem); height: calc(100% - 6.6rem);
    }
  }

  aside > * {
    flex: none;
    margin-left: 5.6rem;
    width: 60%; height: 40%;
    background: pink;
  }

  aside > *:last-of-type { background: red; }


</style>


<script>
  export default {

  }
</script>