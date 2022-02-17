<template>
  <div>
    <q-layout view="hHh lpr fff">
      <q-header>
        <Header />
      </q-header>
      <q-footer>
        <Footer />
      </q-footer>
      <q-page-container>
        <q-page>
          <Body />
        </q-page>
        <CookiesApproval />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// view components
import Header from 'src/components/global/header.vue'
import Body from 'src/components/global/body.vue'
import Footer from 'src/components/global/footer.vue'
import CookiesApproval from 'src/components/global/footer/cookiesApproval.vue'

export default {
  name: 'ThemeLayout',
  components: { Header, Body, Footer, CookiesApproval }
}
</script>
