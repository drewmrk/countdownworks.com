<template>
  <div class="app">
    <Header />
    <Nav />
    <main role="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>
