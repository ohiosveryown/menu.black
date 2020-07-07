<template>
  <section>
    <header>
      <h1 class="fs-md f--nmb">Hey There</h1>
      <svg class="close" width="30" height="29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.707 14.142l6.718-6.717-.707-.707L15 13.435 8.282 6.718l-.707.707 6.718 6.717-6.718 6.718.707.707L15 14.849l6.718 6.718.707-.707-6.718-6.718z" fill="#000"/></svg>
    </header>

    <article class="f--us">
      <p>menu.black was created by me, <a class="link" target="_blank" href="https://twitter.com/cmykw_">Matt</a>. I live in Atlanta, I love food and I wanted to make something to help create awareness and celebrate the diversity of Atlanta and it’s food. You can view the <a class="link" target="_blank" href="https://github.com/ohiosveryown/menu.black-2020">source here</a>.</p>
      <p>Thanks to <a class="link" target="_blank" href="https://twitter.com/imanashanti">@imanashanti</a> for helping curate the list!</p>
      <p>Food brings people together, and good food keeps people coming back. If you’d like to submit a spot, <a class="link" target="_blank" href="https://forms.gle/GbfRiMT4yZRxv9Ry9">contact here</a>. Be kind to one another, and enjoy the food.</p>
    </article>
    <img src="../static/img/veggies/veggies-02.png" alt="peppers">
  </section>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  section {
    position: fixed;
    z-index: var(--z3);
    border: 1px solid var(--gravity);
    background: var(--darkkale);
    overflow: hidden;

    @include breakpoint(mdl) {
      top: 9.6rem; right: 8rem;
      padding: 2rem 2.4rem;
      max-width: 52.4rem;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @include breakpoint(md) { margin-bottom: 2rem; }
  }

  h1 { @include breakpoint(md) { font-size: 3.2rem; }}
  svg { cursor: pointer; }
  p { margin-bottom: 1.6rem; }

  img {
    position: absolute;
    bottom: -4.8rem; right: -8rem;
    z-index: var(--zmin);
    transform: scaleX(-1);
    mix-blend-mode: soft-light;
    opacity: .4;
  }

</style>


<script>
  export default {

  }
</script>