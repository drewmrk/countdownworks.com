<template>
  <nav role="navigation" class="nav">
    <ul class="list">
      <li class="item">
        <NuxtLink to="/create" class="link">Create a countdown</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  @include flex(row);

  box-shadow: 0 5px 20px 0 hsla(0, 0%, 0%, 0.10196078431372549);
  justify-content: center;

  .list {
    @include flex(row);

    align-items: center;
    list-style-type: none;

    .item {
      font-size: 1.1em;
      margin: 0 10px;
      padding: 10px;

      .link {
        @include hide-link-styles;
      }
    }
  }
}
</style>
