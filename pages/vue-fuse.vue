<template>
  <div>
      <p>Type in the input below to search using the VueFuse component, or use the button to call the $search method.<p>

      <div>
        <VueFuse
          placeholder="Search"
          event-name="results"
          :list="books"
          :keys="['tag', 'location', 'title']"
        />
        <!-- <button @click="runSearch">This Button Uses Search Method, with term 'John'</button> -->
      </div>

      <div v-for="book in results" :key="book.name">
        <div>{{ book.tag }}</div>
        <div>{{ book.location }}</div>
      </div>
  </div>
</template>

<script>
  import VueFuse from 'vue-fuse'

  export default {
    components: {
      VueFuse
    },
    data () {
      return {
        results: [],
        books: [
          {
            "userId": 1,
            "id": 1,
            "tag": "pizza",
            "location": "east atlanta",
            "title": "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "tag": "bbq",
            "location": "kirkwood",
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
        ]
      }
    },

    // methods: {
    //   runSearch () {
    //     this.$search('John', this.books, { keys: ['name'] }).then(result => {
    //       this.results = result
    //     })
    //   }
    // },

    created () {
      this.$on('results', results => {
        this.results = results
      })
    }
  }
</script>