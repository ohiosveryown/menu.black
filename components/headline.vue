<template>
  <header class="width uc">
    <h1 class="title">
      <span class="row-one">
        <span>Menu</span>
        <span
          @click="randoEmoji()"
          class="emoji plausible-event-name=Emoji+Click">
          {{ emoji }}
        </span>
        <span class="dot">Dot</span>
      </span>

      <span class="row-two">
        <span class="version">
          <a target="_blank"
            href="https://github.com/ohiosveryown/menu.black">v2.0
          </a>
        </span>
        <span class="black">bĿack</span>
      </span>
    </h1>
  </header>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  @keyframes enter {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .enter { opacity: 0; animation: enter 1s ease 500ms forwards; }

  header {
    margin: 3.2rem auto 4rem;
    @include breakpoint(md) { margin: 8.4rem auto 14rem; }
    @include breakpoint(mdl) { margin: 8.4rem auto 10rem; }
  }

  h1 {
    font-size: 16.2vw;
    line-height: .82;
    @include breakpoint(md) { font-size: 16vw; }
    // @include breakpoint(lg) { font-size: 19.2rem; }
  }

  .row-one:after, .row-two:after {
    @include breakpoint(mdl) {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%; height: 104%;
      background: var(--gravity);
      transform-origin: right;
      overflow: hidden;
    }
  }

  .row-one:after { animation: enter 1s var(--inout) 500ms forwards; }
  .row-two:after { animation: enter 1s var(--inout) 650ms forwards; }

  .row-one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .emoji {
    font-size: 6vw;
    cursor: pointer;
    @include breakpoint(lg) {
      margin-top: 1.2rem;
      font-size: 7.2rem;
    }
  }

  .dot {
    color: transparent;
    text-stroke: 1px var(--cucumber);
    -webkit-text-stroke: 1px var(--cucumber);
  }

  .row-two {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  .version {
    margin: 1rem 2rem 0 0;
    font-size: 1.3rem;
    opacity: .48;
    @include breakpoint(md) {
      margin-right: 3.2rem;
      font-size: 1.6rem;
    }
  }
</style>


<script>
  export default {
    data: () => ({
      emojis: ['🥒', '🌶', '🫑', '🍕', '🍩', '🍔', '🌯', '🥦', '🧇', '🍟', '🥞', '🍳', '🍋', '🫒', '🥑', '🥝'],
      emoji: ''
    }),
    methods: {
      randoEmoji : function(e) {
        this.emoji = this.emojis[~~(Math.random() * this.emojis.length)]
      }
    },
    created() {
      this.randoEmoji()
    }
  }
</script>
