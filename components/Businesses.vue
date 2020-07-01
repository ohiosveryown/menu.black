<template>
  <div class="wrapper">

    <header class="mb-5">
      <h1 class="fs-lg f--nmb">Black Owned</h1>
      <h1 class="mb-2 fs-lg f--nmb">Restaurants in Atlanta</h1>

      <article>
        <p class="f--us">menu.black is a growing collection of black-owned food spots in Atlanta. Don’t see a business in our collection that should be added? <span class="link">Contact us</span> and we’ll add them to the list.</p>
      </article>

      <img class="veggie-01" src="../static/img/veggies/veggies-01.png" alt="broccoli illustration">
    </header>

    <section id="items" class="items">


      <div class="tools mb-6">
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
        </div>
        <img class="veggie-02" src="../static/img/veggies/veggies-02.png" alt="mango illustration">
      </div>

      <!-- results -->
      <ul class="f--us list"></ul>
    </section>

  </div>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  .wrapper {
    position: relative;
    z-index: var(--z2);
    padding: 11.2rem 3.2rem 5.6rem;
    width: calc(100% - 6.4rem); min-height: 100vh;

    @include breakpoint(md) {
      width: calc(50% - 11.2rem);
      padding: 11.2rem 5.6rem 5.6rem;
     }

    @include breakpoint(mdl) {
      border-right: 1px solid var(--gravity);
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
    top: 0rem; left: -3.6rem;
    width: 4rem; height: auto;
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

  .tools--sort-btns {
    display: flex;
    justify-content: space-between;
    button { margin-left: .8rem; flex-grow: 1; }
    button:last-of-type {
      // display: none;
      @include breakpoint(lg) { display: flex; }
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
  import { items } from '../static/items'

  export default {
    mounted() {
      const options = {
        valueNames: [
          'name',
          'type',
          'neighborhood',
          'address',
          'link',
          { attr: 'src', name: 'image'},
          { name: 'url', attr: 'href' },
        ],

        item:
          `<li class="item">
            <img class="image">
            <div class="meta">
              <h2 class="type"></h3>
              <h3 class="neighborhood"></h3>
            </div>
            <div class="info">
              <h1 class="name"></h1>
              <a target="_blank" class="link url"></a>
            </div>
            <h4 class="address"></h4>
          </li>`
      }

      const itemList = new List('items', options, items)

      itemList.add({
        name: "9 Mile Station",
        type: 'American',
        neighborhood: 'Virginia Highlands',
        address: '600 Ponce de Leon Ave.',
        url: 'https://ovo.pink',
        link: 'menu / order',
        image: 'https://res.cloudinary.com/simpleview/image/upload/w_485,h_300,c_fill/crm/atlanta/ca16644d-d3f5-4b7d-8a46-4f39648a0170_88a3b463-5056-a36a-0a7f9c55f05d22a1.png',
      })

      // // discover
      // let result = items.slice(0, 3).map(function () {
      //     return this.splice(Math.floor(Math.random() * this.length), 1)[0]
      // }, items.slice())

      // let random = document.querySelector('.random')
      // random.innerText = result[0].name + ' / ' + result[1].name
    }
  }
</script>