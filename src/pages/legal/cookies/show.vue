<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t('cookies.header') }}</h1>
    <h2 class="text-h5 q-my-md">{{ $t('cookies.description') }}</h2>
    <p>{{ $t('cookies.description_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('cookies.cookies') }}</h2>
    <p>{{ $t('cookies.cookies_1') }}</p>
    <h3 class="text-h6 q-my-md">{{ $t('cookies.cookies_usage') }}</h3>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_a') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_b') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_c') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_d') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_e') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('cookies.cookies_usage_f') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('cookies.period') }}</h2>
    <p>{{ $t('cookies.period_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('cookies.management') }}</h2>
    <p>{{ $t('cookies.management_1') }}</p>
    <p class="q-ml-lg"><a href="https://support.google.com/chrome/answer/95647?hl=en&hlrm=en">&bull; {{ $t('cookies.management_1_a') }}</a></p>
    <p class="q-ml-lg"><a href="https://support.apple.com/en-ph/guide/safari/sfri11471/mac">&bull; {{ $t('cookies.management_1_b') }}</a></p>
    <p class="q-ml-lg"><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">&bull; {{ $t('cookies.management_1_c') }}</a></p>
    <p class="q-ml-lg"><a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/">&bull; {{ $t('cookies.management_1_d') }}</a></p>
    <p class="q-ml-lg"><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">&bull; {{ $t('cookies.management_1_e') }}</a></p>
    <p class="text-caption text-right">{{ $t('cookies.update') }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n/index'

export default {
  name: 'cookiesShow',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    const $route = useRoute()

    const metaData = {
      title: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.cookies'),
      meta: {
        description: { name: 'description', content: t('menu.footer.cookies') },
        og_title: { property: 'og:title', content: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.cookies') },
        og_description: { property: 'og:description', content: t('menu.footer.cookies') },
        og_url: { property: 'og:url', content: process.env.VIRSAS_WEB_WEBSITE + $route.fullPath },
        og_image: { property: 'og:image', content: 'https://www.virsas.com/assets/icon.png' }
      }
    }
    useMeta(metaData)
  }
}
</script>
