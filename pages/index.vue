<template>
  <div>

    <div class="random mb-6 f--usb"/>

    <div id="items">
      <input class="search" placeholder="Search" />
      <button class="sort" data-sort="neighborhood">Sort By Location</button>
      <ul class="f--us list"></ul>
    </div>

  </div>
</template>

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

      let result = items.slice(0, 3).map(function () {
          return this.splice(Math.floor(Math.random() * this.length), 1)[0]
      }, items.slice())

      let random = document.querySelector('.random')
      random.innerText = result[0].name + ' / ' + result[1].name
    }
  }
</script>