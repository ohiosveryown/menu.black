<template>
  <div class="wrapper">

    <header>
      <h1 class="fs-lg f--nmb">Black Owned</h1>
      <h1 class="mb-2 fs-lg f--nmb">Restaurants in Atlanta</h1>

      <article>
        <p class="f--us">menu.black is a growing collection of black-owned food spots in Atlanta. Don’t see a business in our collection that should be added? <span class="link">Contact us</span> and we’ll add them to the list.</p>
      </article>

      <img class="veggie-01" src="../static/img/veggies/veggies-01.png" alt="broccoli illustration">
    </header>

    <section id="items" class="items">
      <div class="tools">
        <input class="search" placeholder="Search" />
      </div>
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

  .items {
    display: flex;
    flex-direction: column;
    margin-top: 6.4rem;
    width: 100%;
  }

  .tools {
    display: flex;
  }

  input {
    padding: 1.2rem 1.6rem;
    border: 1px solid var(--gravity);
    border-radius: 0;
    background: var(--kale);
    font-size: 1.3rem;
    text-transform: uppercase;
    transition: box-shadow 100ms ease;
  }

  input:focus {
    outline: 0px solid var(--gravity);
    // box-shadow: 0 4px 24px rgba(0, 0, 0, 0.24);
    background: var(--darkkale);
  }

  ::placeholder {
    color: var(--gravity);
    font-size: 1.3rem;
    text-transform: uppercase;
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