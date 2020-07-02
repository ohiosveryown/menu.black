<template>
  <aside>

    <header class="anim--enter">
      <h2 class="mb-1 fs-md f--nmb">Discover Something New</h2>
      <p class="f--us">Feeling adventourous? Random spots are shown below – <span class="link refresh">refresh the list</span> or browse more directly in the section to the left.</p>
      <img class="veggie-01" src="../static/img/veggies/veggies-05.png" alt="asparagus illustration">
    </header>

    <ul>
      <li class="anim--enter discover">
        <figure class="one-img"/>
        <div class="content">
          <h1 class="one-name f--nmb"/>
          <h2 class="one-type f--us"/>
          <div class="one-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="two-img"/>
        <div class="content">
          <h1 class="two-name f--nmb"/>
          <h2 class="two-type f--us"/>
          <div class="two-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="three-img"/>
        <div class="content">
          <h1 class="three-name f--nmb"/>
          <h2 class="three-type f--us"/>
          <div class="three-link f--usb uc"/>
        </div>
      </li>

      <li class="anim--enter discover">
        <figure class="four-img"/>
        <div class="content">
          <h1 class="four-name f--nmb"/>
          <h2 class="four-type f--us"/>
          <div class="four-link f--usb uc"/>
        </div>
      </li>
    </ul>

  </aside>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  aside {
    display: none;
    position: fixed;
    z-index: var(--z1);
    top: 0; right: 0;
    padding: 0 0 0 5.6rem;
    width: calc(50% - 5.6rem); height: 100%;
    overflow-x: scroll;

    @include breakpoint(mdl) {
      display: flex;
      flex-direction: column;
      // width: calc(50% - 5.6rem); height: calc(100% - 6.6rem);
    }
  }

  header {
    position: sticky;
    z-index: var(--z4);
    top: 11.6rem; left: 0;
    p { margin-right: 1.6rem; max-width: 48ch; }
  }

  .veggie-01 {
    position: absolute;
    z-index: var(--zmin);
    top: -2rem; left: 80%;
    width: 3.2rem; height: auto;

    @include breakpoint(lg) {
      top: -1rem; left: 74%;
      width: 2.8rem; height: auto;
    }

    @include breakpoint(xl) {
      top: 4rem; left: 88%;
      width: 5.6vw; height: auto;
    }
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%; height: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: var(--z4);
    flex: none;
    margin: 11.2rem 5.6rem 0 0;
    width: 32%; height: 64%;
  }

  figure {
    flex: 1;
    margin-bottom: 1.2rem;
    border-radius: 8px;
    width: auto; height: 64%;
    overflow: hidden;
  }

  // aside > *:last-of-type { background: red; }


</style>


<script>
  export default {
    mounted() {
      // entrance
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 112,
        // skewY: 10,
        stagger: .075,
        duration: 1,
        delay: .64,
        ease: Power2.easeInOut
      })
    },
  }
</script>