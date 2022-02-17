<template>
  <div class="full-width text-center">
    <h1 class="text-h3"><span class="text-primary">Vir</span>tual <span class="text-primary">S</span>ystems <span class="text-primary">A</span>nd <span class="text-primary">S</span>ervices</h1>
    <p class="text-body1">{{ $t('page.home.virsas_description') }}</p>
    <q-img class="full-width" alt="home image" src="../../assets/home.jpg" />
  </div>
</template>

<script>
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n/index'

export default {
  name: 'HomeShow',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    const $route = useRoute()

    const metaData = {
      title: process.env.VIRSAS_WEB_TITLE + ' | ' + t('page.home.html_title'),
      meta: {
        description: { name: 'description', content: t('page.home.html_description') },
        og_title: { property: 'og:title', content: process.env.VIRSAS_WEB_TITLE + ' | ' + t('page.home.html_title') },
        og_description: { property: 'og:description', content: t('page.home.html_description') },
        og_url: { property: 'og:url', content: process.env.VIRSAS_WEB_WEBSITE + $route.fullPath },
        og_image: { property: 'og:image', content: 'https://www.virsas.com/assets/icon.png' }
      }
    }
    useMeta(metaData)
  }
}
</script>
