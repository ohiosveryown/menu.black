<template>
  <div>
    <h1>Hello World Test</h1>
    <input type="text" v-model="search" placeholder="Input value here...">

    <div v-for="blog in filteredBlogs">
      <!-- <h6>{{ blog.tag }}</h6> -->
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>


<script>
  export default {
    data() {
      return {
        blogs: [
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
        ],
        search: ''
      }
    },

    created() {
      // this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      //   this.blogs = data.body.slice(0,10)
      // })
    },
    computed: {
      filteredBlogs: function() {
        return this.blogs.filter((blog) => {
          return blog.title.toLowerCase().match(this.search.toLowerCase()) ||
          blog.tag.toLowerCase().match(this.search.toLowerCase()) ||
          blog.location.toLowerCase().match(this.search.toLowerCase())
        })
      }
    }
  }
</script>