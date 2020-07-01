<template>
  <nav>

    <ul class="f--usb">
      <li>menu.black</li>
      <li>atlanta</li>
      <li>about</li>
    </ul>

  </nav>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  nav {
    position: fixed;
    z-index: var(--z3);
    top: 0; right: 0; left: 0;
    padding: 2.4rem 0;
    border-bottom: 1px solid var(--gravity);
    width: 100%;
    background: rgba(151,185,158,.56);
    backdrop-filter: blur(20px);
  }

  @supports not (backdrop-filter: blur(20px)) {
    nav { background: var(--kale); }
  }

  ul {
    display: flex;
    position: relative;
    margin: 0 auto;
    width: calc(100% - 6.4rem);

    @include breakpoint(md) {
      width: calc(100% -  11.2rem);
    }
  }

  li {
    font-size: 1.3rem;
    text-transform: uppercase;
   }

   li:first-of-type {
    text-decoration: underline;
    cursor: pointer;
    &:hover { text-decoration: none; }
   }

  li:nth-of-type(2) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  li:last-of-type {
    position: absolute;
    right: 0;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
    &:hover { text-decoration: none; }
  }



</style>


<script>
  export default {

  }
</script>