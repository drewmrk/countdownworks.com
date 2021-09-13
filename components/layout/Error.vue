<template>
  <Page title="Whoops!">
    <h2 class="details">That page could not be found</h2>
  </Page>
</template>

<script>
import Page from '@/components/layout/Page'

export default {
  name: 'Error',
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
  .details {
    font-size: 2.25em;
    text-align: center;
  }
</style>
