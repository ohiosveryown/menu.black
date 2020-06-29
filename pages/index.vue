<template>
  <div>

    <div class="random"></div>

    <div id="users">

      <input class="search" placeholder="Search" />
      <button class="sort" data-sort="location">
        Sort By Location
      </button>

      <ul class="list"></ul>

    </div>

  </div>
</template>

<script>
  export default {
    mounted() {
      var options = {
        valueNames: [ 'location', 'name', 'born' ],
        // Since there are no elements in the list, this will be used as template.
        item:
          `<li>
            <h6 class="location"></h6>
            <h3 class="name"></h3>
            <p class="born"></p>
          </li>`
      };

      var values = [
        {
          location: 'East Atlanta',
          name: 'Jonny Strömberg',
          born: 1986
        },
        {
          location: 'Decatur',
          name: 'Jonas Arnklint',
          born: 1985
        },
        {
          location: 'Downtown',
          name: 'Martina Elm',
          born: 1986
        }
      ];

      var userList = new List('users', options, values);

      userList.add({
        location: 'Midtown',
        name: 'Gustaf Lindqvist',
        born: 1983
      })

      let result = values.slice(0, 3).map(function () {
          return this.splice(Math.floor(Math.random() * this.length), 1)[0]
      }, values.slice())

      let random = document.querySelector('.random')
      random.innerText = result[0].name + ' / ' + result[1].name
    }
  }
</script>