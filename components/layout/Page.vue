<template>
  <div class="page">
    <div class="title--wrapper">
      <h1 v-if="title" class="title">
        {{ title === '%20' ? 'Countdown' : title.replace(/%20/g, ' ') }}
      </h1>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include flex(column);

  padding-bottom: 100px;

  .content {
    @include desktop {
      margin: 0 auto;
      width: 85%;
    }
  }

  .title--wrapper {
    @include mobile {
      padding: 25px;
    }
    @include desktop {
      padding: 50px;
    }

    .title {
      color: hsl(0, 0%, 55%);
      text-align: center;
      @include mobile {
        font-size: 2.5em;
      }
      @include desktop {
        font-size: 4em;
      }
    }
  }
}
</style>
