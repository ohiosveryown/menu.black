<template>
  <nav class="width">
    <h2 class="uc taj">
      Is a
      <span class="power">✊🏼✊🏽✊🏾✊🏿</span>
      growing
      <span class="collection">
        collection
      </span>
      of
      <span class="black">
        black
      </span>
      owned food
      <span class="food">🍛🥙🥘</span>
      spots in the
      <span class="arrow">
        <svg width="46" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.478 19.008h37.696c1.216 0 1.728-.128 2.816-.384.512-.128.704 0 .768.32.064.256-.32.448-.704.576-.64.192-1.344.512-1.6.704l-11.84 10.048v4.096l17.92-15.36v-3.072L27.614.576v4.096l11.84 10.048c.256.192.96.512 1.6.704.384.128.768.32.704.576-.064.32-.256.448-.768.32-1.088-.256-1.6-.384-2.816-.384H.478v3.072z" fill="#fff"/></svg>
      </span>
      Atlanta area, curated for your
      <span class="smile">
        <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.92 17.48c1.56 0 2.84-3.76 2.84-8.44C15.76 4.4 14.48.6 12.92.6c-1.6 0-2.88 3.8-2.88 8.44 0 4.68 1.28 8.44 2.88 8.44zm-11.2 2.4h.2c.56 0 .96-.4 1.04-.96.04-.24.2-.8.24-1C4.56 21.2 8.6 29.4 17.08 29.4c.88 0 1.8-.08 2.8-.24 3.72-.68 6.6-2.6 8.24-5.56 1.4-2.48 1.92-5.52 1.4-8.64-.96-5.68-4.4-8.44-7.6-8.44.48-2.24 1.44-3.72 1.56-3.88.32-.52.2-1.2-.32-1.56-.52-.36-1.24-.2-1.56.32-.08.08-5.2 7.84.44 15.96.24.28.6.48.96.48.2 0 .44-.08.64-.2.52-.36.64-1.08.28-1.6-1.8-2.6-2.32-5.12-2.28-7.24 2.92-.28 5.04 3.12 5.64 6.56 1.2 7.24-3.48 10.76-7.84 11.56C9.2 28.8 5.4 18.04 4.88 16.44c.28-.12.48-.2.52-.2.6-.12 1-.72.88-1.32-.16-.64-.76-1-1.36-.88-.12.04-3.52.8-4.12 4.52-.12.64.32 1.2.92 1.28v.04z" fill="#fff"/></svg>
      </span>
      consumption
      <span class="star">
        <svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.197 9.712l9.28 3.008c.512.192.576.832.064 1.024l-9.344 3.2 1.28 2.88 8.704-4.48c.512-.256.896.256.704.768l-4.288 8.704 2.88 1.216 3.008-9.28c.192-.512.832-.576 1.024-.064l3.2 9.344 2.88-1.28-4.48-8.704c-.256-.512.256-.896.768-.704l8.704 4.288 1.216-2.88-9.28-3.008c-.512-.192-.576-.832-.064-1.024l9.344-3.2-1.28-2.88-8.704 4.48c-.512.256-.896-.256-.704-.768l4.288-8.704-2.88-1.216-3.008 9.28c-.192.512-.832.576-1.024.064L9.285.432l-2.88 1.28 4.48 8.704c.256.512-.256.896-.768.704L1.413 6.832.197 9.712z" fill="#fff"/></svg>
      </span>
    </h2>
  </nav>
</template>


<style lang="scss" scoped>
  @import '../style/grid.scss';

  h2 {
    color: var(--cucumber);
    font-size: 6.8vw;
    line-height: 1.1;
    @include breakpoint(md) { font-size: 5.6vw; }
    @include breakpoint(lg) { font-size: 6.7rem; }
  }

  .power, .food {
    display: inline-flex;
    padding: 0 1.2rem;
    font-size: 3.2vw;
    transform: translateY(-6px);
    @include breakpoint(md) { font-size: 3.8rem; transform: translateY(-4px); }
    @include breakpoint(lg) { font-size: 3.8rem; }
  }

  .collection {
    position: relative;
    &:after {
      @include breakpoint(md) {
        content: '';
        position: absolute;
        z-index: var(--zmin);
        bottom: -.56rem; left: -1rem;
        width: 100%; height: 100%;
        background: url('../static/img/underline.svg') bottom no-repeat;
      }
    }
  }

  .black {
    position: relative;
    &:after {
      @include breakpoint(md) {
        content: '';
        position: absolute;
        z-index: var(--zmin);
        top: -.4rem; left: -1.2rem;
        border: 1px solid var(--onion);
        width: 90%; height: 120%;
        border-radius: 50%;
        transform: scale(1.3);
      }
      @include breakpoint(lg) {
        top: -.68rem;
        transform: scale(1.2);
      }
    }

    svg {
      position: absolute;
      bottom: -.5rem; left: -1rem;
      width: 100%;
    }
  }

  .arrow {
    display: inline-flex;
    transform: translateY(.72rem) scale(.48);
    @include breakpoint(md)  { transform: translateY(.32rem) scale(.64); }
    @include breakpoint(mdl) { transform: translateY(-.56rem) scale(1); }
  }

  .smile {
    display: inline-flex;
    padding: 0 3.2rem;
    transform: translateY(.44rem) scale(.64);
    @include breakpoint(md)  { transform: translateY(.32rem) scale(.72); }
    @include breakpoint(mdl) { padding: 0 5.6rem; transform: translateY(-.4rem) scale(1); }
  }

  .star {
    display: inline-flex;
    transform: translateY(.4rem) scale(.48);
    @include breakpoint(md)  { transform: translateY(0) scale(.64); }
    @include breakpoint(mdl) { transform: translate(1rem, -.8rem); }
  }
</style>


<script>
  export default {

  }
</script>
