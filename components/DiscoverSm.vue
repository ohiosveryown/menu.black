<template>
  <aside class="anim--enter">

    <header class="anim--enter">
      <h2 class="mb-1 fs-md f--nmb">Discover Something New</h2>
      <p class="f--us">Feeling adventourous? Random spots are shown here – <span class="link refresh">refresh the list</span> or browse more directly in the section below.</p>
    </header>

    <ul>
      <li class="anim--enter discover">
        <figure class="one-img"/>
        <div class="content">
          <div class="one-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="two-img"/>
        <div class="content">
          <div class="two-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="three-img"/>
        <div class="content">
          <div class="three-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="four-img"/>
        <div class="content">
          <div class="four-link f--usb uc"/>
        </div>
      </li>
    </ul>

  </aside>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  aside {
    margin-left: -3.2rem;
    width: calc(100% + 6.4rem);
    overflow-x: scroll;

    @include breakpoint(md) {
      margin-left: -5.6rem;
      width: calc(100% + 11.2rem);
    }

    @include breakpoint(mdl) {
      display: none;
    }
  }

  header {
    position: sticky;
    top: 0; left: 3.2rem;
    margin-left: 3.2rem;
    @include breakpoint(md) { left: 5.6rem; }
  }

  ul {
    display: flex;
    align-items: stretch;
    margin: 3.2rem 0 3.2rem 3.2rem;
    @include breakpoint(md) { margin: 3.2rem 0 8rem 5.6rem; }
  }

  li {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    flex: 0 0 40%;
    @include breakpoint(md) { margin-right: 4rem; }
  }

  figure {
    flex: 1;
    margin-bottom: 1.2rem;
    border-radius: 8px;
    width: auto; height: 64%;
    overflow: hidden;
  }

</style>


<script>
  export default {
    mounted() {

    },
  }
</script>