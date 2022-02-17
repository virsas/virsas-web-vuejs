<template>
  <div class="row full-width justify-center">
    <h1 class="text-h3 q-mb-md">{{ $t('page.about.about') }}</h1>
    <q-img class="serviceimg q-mb-md" basic alt="admin image" src="../../../assets/about.png" />
  </div>
</template>

<script>
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n/index'

export default {
  name: 'AboutShow',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    const $route = useRoute()

    const metaData = {
      title: process.env.VIRSAS_WEB_TITLE + ' | ' + t('page.about.html_title'),
      meta: {
        description: { name: 'description', content: t('page.about.html_description') },
        og_title: { property: 'og:title', content: process.env.VIRSAS_WEB_TITLE + ' | ' + t('page.about.html_title') },
        og_description: { property: 'og:description', content: t('page.about.html_description') },
        og_url: { property: 'og:url', content: process.env.VIRSAS_WEB_WEBSITE + $route.fullPath },
        og_image: { property: 'og:image', content: 'https://www.virsas.com/assets/icon.png' }
      }
    }
    useMeta(metaData)
  }
}
</script>
