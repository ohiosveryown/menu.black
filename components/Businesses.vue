<template>
  <div class="wrapper">

    <header class="mb-5">
      <h1 class="anim--enter fs-lg f--nmb">Black Owned</h1>
      <h1 class="anim--enter mb-2 fs-lg f--nmb">Restaurants in Atlanta</h1>

      <article>
        <p class="anim--enter f--us">menu.black is a growing collection of black-owned food spots in Atlanta. Don’t see a business in the collection that should be added? <a class="link" target="_blank" href="https://forms.gle/GbfRiMT4yZRxv9Ry9">Contact here</a> and we’ll add them to the list.</p>
      </article>

      <img class="anim--enter veggie-01" src="../static/img/veggies/veggies-01.png" alt="broccoli illustration">
    </header>

    <!-- discover small -->
    <DiscoverSm/>

    <section id="items" class="items">
      <div class="anim--enter tools mb-4">
        <div class="tools--search f--us">
          <svg width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.254 13.414a5.5 5.5 0 117.778-7.779 5.5 5.5 0 01-7.778 7.779zm-.34 1.047a6.5 6.5 0 10-.708-.707l-4.963 4.963.707.707 4.963-4.963z" fill="#000"/></svg>
          <input class="search" placeholder="Search" />
          <small class="f--us fs--sm uc">Try location (Kirkwood) or food type (Pizza)</small>
        </div>
        <div class="tools--sort">
          <div class="tools--sort-btns">
            <button class="sort" data-sort="neighborhood">By Location</button>
            <button class="sort" data-sort="type">By Food Type</button>
          </div>
          <div class="tools--sort-label">
            <small class="f--us fs--sm uc">...or sort by location or food type</small>
          </div>
          <img class="veggie-03" src="../static/img/veggies/veggies-03.png" alt="mangos illustration">
        </div>
        <img class="veggie-02" src="../static/img/veggies/veggies-02.png" alt="pepers illustration">
      </div>

      <!-- list header -->
      <div class="anim--enter updated">
        <h3 class="f--usb uc fs--sm">Restaurant list</h3>
        <span/>
        <div class="updated--date uc fs--sm">Updated: July 2020</div>
      </div>

      <!-- results -->
      <ul class="anim--enter f--us list"></ul>
    </section>

  </div>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  .updated {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.4rem 0;

    span {
      flex-grow: 1;
      margin: 0 1.6rem ;
      height: 1px;
      background: #000;
    }
  }

  .wrapper {
    position: relative;
    z-index: var(--z2);
    padding: 11.2rem 3.2rem 5.6rem;
    width: calc(100% - 6.4rem); min-height: 100vh;

    @include breakpoint(md) {
      padding: 11.2rem 5.6rem 5.6rem;
      width: calc(100% -  11.2rem);
     }

    @include breakpoint(mdl) {
      border-right: 1px solid var(--gravity);
      width: calc(50% - 11.2rem);
    }
  }

  header {
    position: relative;
    p { max-width: 48ch; }
  }

  .veggie-01 {
    position: absolute;
    top: 0; right: 0;
    width: 12%; height: auto;
  }

  .veggie-02 {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: -3.6rem;
    width: 4rem; height: auto;
  }

  .veggie-03 {
    position: absolute;
    z-index: var(--zmin);
    bottom: 0rem; right: -2rem;
    width: 4rem; height: auto;
    @include breakpoint(lg) { display: none; }
  }

  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .tools {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    @include breakpoint(lg) { flex-direction: row; }
  }

  .tools--search {
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    margin-bottom: 2rem;
    text-transform: uppercase;

    @include breakpoint(lg) { margin-bottom: 0; }

    svg {
      position: absolute;
      top: 1.6rem; right: 1.6rem;
      z-index: 9999;
    }
  }

  .tools--sort {
    position: relative;
  }

  .tools--sort-btns {
    display: flex;
    justify-content: space-between;
    button { flex-grow: 1; }
    button:first-of-type {
      margin-right: .6rem;
      @include breakpoint(lg) { margin-right: 0; margin-left: .8rem; }
    }

    button:last-of-type {
      margin-left: .6rem;
      @include breakpoint(lg) { margin-left: 0; margin-left: .8rem; }
    }
  }

  input {
    margin-bottom: .76rem;
    padding: 1.6rem 1.6rem;
    // max-width: 48rem;
    border: 1px solid var(--gravity);
    border-radius: 0;
    background: var(--kale);
    font-size: 1.3rem;
    text-transform: uppercase;
    transition: box-shadow 100ms ease;
  }

  input:focus {
    outline: 0px solid var(--gravity);
    background: var(--darkkale);
    // box-shadow: 0 4px 24px rgba(0, 0, 0, 0.24);
  }

  ::placeholder {
    color: var(--gravity);
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  button {
    margin: .2rem 0 .4rem;
    padding: 1.6rem 1.2rem;
    border: 1px solid var(--gravity);
    background: var(--kale);
    font-size: 1.3rem;
    text-transform: uppercase;
    transition: var(--ease);
  }

  button:focus, button:hover {
    outline: 0px solid var(--gravity);
    background: var(--darkkale)
  }

</style>


<script>
  import DiscoverSm from './DiscoverSm'
  export default {
    components: { DiscoverSm },
  }
</script>