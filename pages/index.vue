<template>
  <div>
    <div class="about-parent">
      <About/>
    </div>
    <Navigation/>
    <Businesses/>
    <Discover/>
  </div>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  .about-parent { display: none; }
  .active { display: flex; }

</style>


<script>
  import Navigation from '../components/Navigation'
  import Businesses from '../components/Businesses'
  import Discover from '../components/Discover'
  import About from '../components/About'
  import { items } from '../static/items'

  export default {
    components: { Navigation, Businesses, Discover, About },

    head() {
        return {
          title: 'Black Owned Food & Drinks In Atlanta'
        }
      },

    mounted() {

      // about
      const about = document.querySelector('.about')
      const aboutParent = document.querySelector('.about-parent')
      const close = document.querySelector('.close')

      about.addEventListener('click', () => {
        aboutParent.classList.toggle('active')
      })

      close.addEventListener('click', () => {
        aboutParent.classList.toggle('active')
      })

      document.onkeypress = (evt) => {
        evt = evt || window.event
        if (evt.keyCode == 27) {
          aboutParent.classList.remove('active')
        }
      }

      // list logic
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
        neighborhood: 'Eastside',
        address: '600 Ponce de Leon Ave.',
        url: 'http://www.9milestation.com/menu2-dinner',
        link: 'menu / order',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/i7NWA8rRoLBtQyl9KPrwdQ/o.jpg',
      })

      // // discover
      let result = items.slice(0, 4).map(function () {
          return this.splice(Math.floor(Math.random() * this.length), 1)[0]
      }, items.slice())

      // discover - one
      let imgOne = document.querySelector('.one-img')
      imgOne.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`

      let imgOneSm = document.querySelector('.one-img--sm')
      imgOneSm.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`

      let nameOne = document.querySelector('.one-name')
      nameOne.innerText = result[0].name

      let typeOne = document.querySelector('.one-type')
      typeOne.innerText = result[0].type

      let linkOne = document.querySelector('.one-link')
      linkOne.innerHTML = `<a target="_blank" href="${ result[0].url }">${ result[0].link }</a>`

      let linkOneSm = document.querySelector('.one-link--sm')
      linkOneSm.innerHTML = `<a target="_blank" href="${ result[0].url }">${ result[0].link }</a>`

      // discover - two
      let imgTwo = document.querySelector('.two-img')
      imgTwo.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`

      let imgTwoSm = document.querySelector('.two-img--sm')
      imgTwoSm.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`

      let nameTwo = document.querySelector('.two-name')
      nameTwo.innerText = result[1].name

      let typeTwo = document.querySelector('.two-type')
      typeTwo.innerText = result[1].type

      let linkTwo = document.querySelector('.two-link')
      linkTwo.innerHTML = `<a target="_blank" href="${ result[1].url }">${ result[1].link }</a>`

      let linkTwoSm = document.querySelector('.two-link--sm')
      linkTwoSm.innerHTML = `<a target="_blank" href="${ result[1].url }">${ result[1].link }</a>`

      // discover - three
      let imgThree = document.querySelector('.three-img')
      imgThree.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`

      let imgThreeSm = document.querySelector('.three-img--sm')
      imgThreeSm.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`

      let nameThree = document.querySelector('.three-name')
      nameThree.innerText = result[2].name

      let typeThree = document.querySelector('.three-type')
      typeThree.innerText = result[2].type

      let linkThree = document.querySelector('.three-link')
      linkThree.innerHTML = `<a target="_blank" href="${ result[2].url }">${ result[2].link }</a>`

      let linkThreeSm = document.querySelector('.three-link--sm')
      linkThreeSm.innerHTML = `<a target="_blank" href="${ result[2].url }">${ result[2].link }</a>`

      // discover - four
      let imgFour = document.querySelector('.four-img')
      imgFour.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`

      let imgFourSm = document.querySelector('.four-img--sm')
      imgFourSm.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`

      let nameFour = document.querySelector('.four-name')
      nameFour.innerText = result[3].name

      let typeFour = document.querySelector('.four-type')
      typeFour.innerText = result[3].type

      let linkFour = document.querySelector('.four-link')
      linkFour.innerHTML = `<a target="_blank" href="${ result[3].url }">${ result[3].link }</a>`

      let linkFourSm = document.querySelector('.four-link--sm')
      linkFourSm.innerHTML = `<a target="_blank" href="${ result[3].url }">${ result[3].link }</a>`


      // refresh sm
      const refresh = document.querySelector('.refresh')
      refresh.addEventListener('click', () => {
        result = items.slice(0, 4).map(function () {
            return this.splice(Math.floor(Math.random() * this.length), 1)[0]
        }, items.slice())

        // one
        imgOne.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`
        imgOneSm.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`
        nameOne.innerText = result[0].name
        typeOne.innerText = result[0].type
        linkOne.innerHTML = `<a target="_blank" href="${ result[0].url }">${ result[0].link }</a>`

        // two
        imgTwo.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`
        imgTwoSm.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`
        nameTwo.innerText = result[1].name
        typeTwo.innerText = result[1].type
        linkTwo.innerHTML = `<a target="_blank" href="${ result[1].url }">${ result[1].link }</a>`

        // three
        imgThree.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`
        imgThreeSm.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`
        nameThree.innerText = result[2].name
        typeThree.innerText = result[2].type
        linkThree.innerHTML = `<a target="_blank" href="${ result[2].url }">${ result[2].link }</a>`

        // four
        imgFour.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`
        imgFourSm.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`
        nameFour.innerText = result[3].name
        typeFour.innerText = result[3].type
        linkFour.innerHTML = `<a target="_blank" href="${ result[3].url }">${ result[3].link }</a>`
      })

      // refresh lg
      const refreshLg = document.querySelector('.refresh-lg')
      refreshLg.addEventListener('click', () => {
        result = items.slice(0, 4).map(function () {
            return this.splice(Math.floor(Math.random() * this.length), 1)[0]
        }, items.slice())

        // one
        imgOne.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`
        imgOneSm.innerHTML = `<img class="disc-img" src="${ result[0].image }" alt="">`
        nameOne.innerText = result[0].name
        typeOne.innerText = result[0].type
        linkOne.innerHTML = `<a target="_blank" href="${ result[0].url }">${ result[0].link }</a>`

        // two
        imgTwo.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`
        imgTwoSm.innerHTML = `<img class="disc-img" src="${ result[1].image }" alt="">`
        nameTwo.innerText = result[1].name
        typeTwo.innerText = result[1].type
        linkTwo.innerHTML = `<a target="_blank" href="${ result[1].url }">${ result[1].link }</a>`

        // three
        imgThree.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`
        imgThreeSm.innerHTML = `<img class="disc-img" src="${ result[2].image }" alt="">`
        nameThree.innerText = result[2].name
        typeThree.innerText = result[2].type
        linkThree.innerHTML = `<a target="_blank" href="${ result[2].url }">${ result[2].link }</a>`

        // four
        imgFour.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`
        imgFourSm.innerHTML = `<img class="disc-img" src="${ result[3].image }" alt="">`
        nameFour.innerText = result[3].name
        typeFour.innerText = result[3].type
        linkFour.innerHTML = `<a target="_blank" href="${ result[3].url }">${ result[3].link }</a>`
      })
    }
  }
</script>