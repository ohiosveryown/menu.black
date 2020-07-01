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
          <input class="search" placeholder="Search" />
          <small class="f--us fs--sm uc">Try by location (Kirkwood) or food type (Pizza)</small>
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
  @import '../style/type.scss';

  .wrapper {
    position: relative;
    z-index: var(--z2);
    padding-top: 11.2rem;
    padding: 11.2rem 5.6rem 5.6rem;
    width: calc(50% - 11.2rem); min-height: 100vh;
    border-right: 1px solid var(--gravity);
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
    justify-content: space-between;
    position: relative;
  }

  .tools--search {
    display: flex;
    flex: 1;
    flex-direction: column;
    // width: 40%;
    text-transform: uppercase;
  }

  .tools--sort-btns {
    display: flex;
    justify-content: space-between;
    button { margin-left: .8rem; width: 50%; }
  }

  input {
    margin-bottom: .9rem;
    padding: 1.6rem 1.6rem;
    max-width: 48rem;
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
          'link'
        ],

        item:
          `<li>
            <h1 class="name"/>
            <h2 class="type"/>
            <h3 class="neighborhood"/>
            <h4 class="address"/>
            <h5 class="link"/>
          </li>`
      }

      const itemList = new List('items', options, items)

      itemList.add({
        name: "9 Mile Station",
        type: 'American',
        neighborhood: 'Virginia Highlands',
        address: '600 Ponce de Leon Ave.',
        link: '9mile.com',
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