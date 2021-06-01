<template>
  <header class="width uc">
    <h1 class="title">
      <span class="row-one">
        <span>Menu</span>
        <span
          @click="randoEmoji()"
          class="emoji">
          {{ emoji }}
        </span>
        <span class="dot">Dot</span>
      </span>

      <span class="row-two">
        <span class="version">
          <a target="_blank"
            href="https://github.com/ohiosveryown/menu.black">v.1.5
          </a>
        </span>
        <span class="black">bĿack</span>
      </span>
    </h1>
  </header>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  h1 {
    margin: 3.2rem 0 0;
    font-size: 16vw;
    line-height: .92;
    @include breakpoint(lg) {
      margin-top: 8.4rem;
      font-size: 19.2rem;
    }
  }

  .row-one {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }

  .version {
    margin: 1rem 3.2rem 0 0;
    font-size: 1.6rem;
    opacity: .48;
    @include breakpoint(md) {

    }
  }
</style>


<script>
  export default {
    data() {
      return {
        emojis: [ '🥒', '🌶', '🫑', '🍕', '🍩', '🍔', '🌯', '🥦', '🧇', ],
        emoji: ''
      }
    },
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
