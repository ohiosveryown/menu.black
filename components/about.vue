<template>
  <nav class="width uc title">
    <header
      class="tac"
      tabindex="0"
      @click="isOpen = !isOpen"
      @keydown.esc="isOpen = false"
    >
      <span v-if="isOpen">Close About</span>
      <span v-else>About</span>
    </header>
    <section :class="[isOpen ? 'opened' : 'closed']">
      <p>
        menu dot black was created by me,
        <a target="_blank" href="https://twitter.com/cmykw_">
          <span class="matt">
            <span class="matt--bg" />
          </span>
        </a>
        curated with help from
        <a target="_blank" href="https://twitter.com/jordanjung">
          <span class="jordan">
            <span class="matt--bg" />
          </span>
        </a>
        We live in Atlanta and love food. We wanted to make something to help
        create awareness and celebrate the diversity of Atlanta and its food.
      </p>
      <p>
        Food brings people together, and good food keeps people coming back. If
        you’d like to submit a spot,
        <a target="_blank" href="https://forms.gle/pqWk7PNgPfjUwXGo8">
          <span class="contact">
            <span class="contact--bg" />
          </span>
        </a>
        Be kind to one another, and enjoy the food.
      </p>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
  @import "../style/grid.scss";

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
    // @include breakpoint(md) { text-transform: uppercase }
  }

  header {
    position: relative;
    margin: 0 auto;
    width: max-content;
    cursor: pointer;
    opacity: 0.48;
    transition: opacity 300ms ease;
    &:hover {
      opacity: 1;
    }
  }

  section {
    position: absolute;
    top: 5.6rem;
    z-index: var(--zmax);
    border: 1px solid var(--onion);
    padding: 2.4rem;
    background: var(--gravity);
    box-shadow: 12px 12px 0 var(--cucumber);
    @include breakpoint(md) {
      padding: 6.4rem;
    }
  }

  p {
    font-size: 5.2vw;
    line-height: 1.28;
    @include breakpoint(md) {
      font-size: 4vw;
      line-height: 1.15;
    }
    @include breakpoint(mdl) {
      font-size: 3.2vw;
    }
  }

  p + p {
    text-indent: 5ch;
  }

  .matt,
  .jordan,
  .contact {
    position: relative;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:before {
      content: "Matt ↗";
    }
  }

  .jordan,
  .contact {
    &:before {
      content: "Jordan ↗";
    }
  }

  .contact:before {
    content: "contact here ↗";
  }

  @media (pointer: fine) {
    .matt:hover,
    .jordan:hover,
    .contact:hover {
      color: transparent;
      text-stroke: 1px var(--cucumber);
      -webkit-text-stroke: 1px var(--cucumber);
    }
  }

  .matt--bg,
  .contact--bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--zmin);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: #92ff00;
    filter: blur(12px);
    @include breakpoint(md) {
      filter: blur(24px);
    }
  }
</style>

<script>
  export default {
    data: () => ({
      isOpen: false,
    }),
  }
</script>
