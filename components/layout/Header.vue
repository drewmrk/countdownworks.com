<template>
  <header role="banner" class="header">
    <div class="triangle triangle--top-left"></div>
    <h1 class="title">
      <NuxtLink to="/" class="link">Countdown Works</NuxtLink>
    </h1>
    <div class="triangle triangle--top-right"></div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
$triangle-thickness: 30px;

.header {
  @include flex(row);

  align-content: center;
  align-items: center;
  height: 61px;
  justify-content: center;

  .title {
    flex: 1;
    font-weight: 300;
    letter-spacing: 0.008em;
    text-align: center;
    @include mobile {
      font-size: 2.15em;
    }
    @include desktop {
      font-size: 2.5em;
    }

    .link {
      @include hide-link-styles;
      @include desktop {
        transition: 0.35s all;

        &:hover {
          font-weight: 500;
          letter-spacing: 0.15em;
        }
      }
    }
  }

  .triangle {
    @include mobile {
      display: none;
    }
  }

  .triangle--top-left {
    border-bottom: $triangle-thickness solid transparent;
    border-left: $triangle-thickness solid hsl(180, 100%, 50%);
    border-right: $triangle-thickness solid transparent;
    border-top: $triangle-thickness solid hsl(180, 100%, 50%);
  }

  .triangle--top-right {
    border-bottom: $triangle-thickness solid hsl(80, 61%, 50%);
    border-left: $triangle-thickness solid transparent;
    border-right: $triangle-thickness solid hsl(80, 61%, 50%);
    border-top: $triangle-thickness solid transparent;
  }
}
</style>
