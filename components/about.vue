<template>
  <nav class="width">
    <span class="uc tac">about</span>
  </nav>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  nav {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  span {
    position: relative;
    cursor: pointer;
    opacity: .48;
    transition: opacity 300ms ease;
    &:hover { opacity: 1; }
  }
</style>


<script>
  export default {

  }
</script>
