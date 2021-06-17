<template>
  <nav class="width title uc">
    <header
      class="tac"
      tabindex="0"
      @click="isOpen = !isOpen"
      @keydown.esc="isOpen = false">

      <span v-if="isOpen">Close About</span>
      <span v-else>About</span>
    </header>
    <section
      :class = "[ isOpen ? 'opened' : 'closed' ]">
      <p>menu dot black was created by me, Matt. I live in Atlanta and I love food. I wanted to make something to help create awareness and celebrate the diversity of Atlanta and its food.</p>
      <p>Food brings people together, and good food keeps people coming back. If you’d like to submit a spot, contact here. Be kind to one another, and enjoy the food.</p>
    </section>
  </nav>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  .opened {
    pointer-events: inherit;
    opacity: 1;
  }

  .closed {
    pointer-events: none;
    opacity: 0;
  }

  nav {
    margin-top: 4rem;
  }

  header {
    position: relative;
    cursor: pointer;
    opacity: .48;
    transition: opacity 300ms ease;
    &:hover { opacity: 1; }
  }

  section {
    position: absolute;
    top: 5.6rem;
    z-index: var(--zmax);
    border: 1px solid var(--onion);
    padding: 6.4rem;
    background: var(--gravity);
    box-shadow: 12px 12px 0 var(--cucumber);
  }

  p {
    font-size: 5.6vw;
    line-height: 1.24;
    @include breakpoint(md)  { font-size: 4vw; line-height: 1.15; }
    @include breakpoint(mdl) { font-size: 3.2vw; }
  }

  p + p {
    text-indent: 5ch;
  }
</style>


<script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    }
  }
</script>
