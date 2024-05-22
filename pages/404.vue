<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <nuxt-link to="/">Go back home</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Page Not Found',
    };
  },
}
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.error-page h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.error-page a {
  font-size: 1.5rem;
  color: #4a90e2;
  text-decoration: none;
}
</style>
