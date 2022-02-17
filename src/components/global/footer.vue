<template>
  <div>
    <div class="row full-width justify-center bg-blue-grey-10">
      <div class="row footer">
        <div class="col-xs-12 col-sm-12 col-md-6 col-6 q-pa-lg">
          <FooterCompanyInfo />
        </div>
      </div>
      <q-separator dark class="full-width" />
      <div class="footer">
        <div class="text-right">
          <FooterLegal :lang="lang" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import language from 'src/functions/global/language'
import FooterCompanyInfo from 'src/components/global/footer/footerCompanyInfo.vue'
import FooterLegal from 'src/components/global/footer/footerLegal.vue'

export default {
  name: 'components/global/footer',
  components: { FooterCompanyInfo, FooterLegal },
  setup () {
    const { lang } = language()

    return {
      lang
    }
  }
}
</script>
