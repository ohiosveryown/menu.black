<template>
  <section>
    <header>
      <h1 class="fs-md f--nmb">Hey There</h1>
      <svg class="close" width="30" height="29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.707 14.142l6.718-6.717-.707-.707L15 13.435 8.282 6.718l-.707.707 6.718 6.717-6.718 6.718.707.707L15 14.849l6.718 6.718.707-.707-6.718-6.718z" fill="#000"/></svg>
    </header>

    <article class="f--us">
      <p>menu.black was created by me, <a class="link" target="_blank" href="https://twitter.com/cmykw_">Matt</a> I live in Atlanta, I love food and I wanted to make something to help create awareness and celebrate the diversity of Atlanta and it’s food. You can view the <a class="link" target="_blank" href="https://github.com/ohiosveryown/menu.black-2020">source here</a>.</p>
      <p>Thanks to <a class="link" target="_blank" href="https://twitter.com/imanashanti">@imanashanti</a> for her lists of restaurants.</p>
      <p>Food brings people together, and good food keeps people coming back. If you’d like to submit a spot, <a class="link" target="_blank" href="https://forms.gle/VeK4sspTLQUjYNLQA">contact here</a>. Be kind to one another, and enjoy the food.</p>
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

    top: 9.6rem; right: 0; left: 0;
    margin: 0 auto;
    padding: 2rem 2.4rem;
    width: calc(100% -  8.8rem);

    @include breakpoint(md) { width: calc(100% -  16rem); }

    @include breakpoint(mdl) {
      top: 9.6rem; right: 4rem; left: auto;
      padding: 2rem 2.4rem;
      max-width: 52.4rem;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
  }

  h1 { @include breakpoint(md) { font-size: 3.2rem; }}
  svg { cursor: pointer; }
  p { margin-bottom: 1.6rem; }

  h1:after {
    display: inline-block;
    content: '';
    margin-left: 1.2rem;
    width: 2.4rem; height: 2.4rem;
    background-image: url('../static/img/veggies/veggies-07.png');
    background-size: 2.4rem 2.4rem;
    transform: rotate(20deg) translateY(.5rem);
    @include breakpoint(md) { transform: rotate(20deg) translateY(.2rem); }
  }

  img {
    position: absolute;
    bottom: -4.8rem; right: -8rem;
    z-index: var(--zmin);
    transform: scaleX(-1);
    mix-blend-mode: soft-light;
    opacity: .4;
  }

  article {
    max-height: 70vh;
    overflow-y: scroll;
  }

  .link:after {
    display: inline-block;
    content: '';
    margin-left: .6rem;
    margin: 0 .8rem 0 .4rem;
    width: 1rem; height: 1rem;
    background-image: url('../static/img/new-tab.svg');
    background-size: 1rem 1rem;
  }

</style>


<script>
  export default {

  }
</script>
