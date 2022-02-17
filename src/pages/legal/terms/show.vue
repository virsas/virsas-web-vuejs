<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t('terms.header') }}</h1>
    <p>{{ $t('terms.description') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.definition') }}</h2>
    <p>{{ $t('terms.definition_1') }}</p>
    <p>{{ $t('terms.definition_2') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.acceptance') }}</h2>
    <p>{{ $t('terms.acceptance_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.accounts') }}</h2>
    <p>{{ $t('terms.accounts_1') }}</p>
    <p>{{ $t('terms.accounts_2') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.limits') }}</h2>
    <p>{{ $t('terms.limits_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.verification') }}</h2>
    <p>{{ $t('terms.verification_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.virus') }}</h2>
    <p>{{ $t('terms.virus_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.feedback') }}</h2>
    <p>{{ $t('terms.feedback_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.modification') }}</h2>
    <p>{{ $t('terms.modification_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.exclusion') }}</h2>
    <p>{{ $t('terms.exclusion_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.termination') }}</h2>
    <p>{{ $t('terms.termination_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.rights') }}</h2>
    <p>{{ $t('terms.rights_1') }}</p>
    <p>{{ $t('terms.rights_2') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.disputes') }}</h2>
    <p>{{ $t('terms.disputes_1') }}</p>
    <p>{{ $t('terms.disputes_2') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.contact') }}</h2>
    <p>{{ $t('terms.contact_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('terms.changes') }}</h2>
    <p>{{ $t('terms.changes_1') }}</p>
    <p class="text-caption text-right">{{ $t('terms.update') }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n/index'

export default {
  name: 'termsShow',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    const $route = useRoute()

    const metaData = {
      title: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.terms'),
      meta: {
        description: { name: 'description', content: t('menu.footer.terms') },
        og_title: { property: 'og:title', content: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.terms') },
        og_description: { property: 'og:description', content: t('menu.footer.terms') },
        og_url: { property: 'og:url', content: process.env.VIRSAS_WEB_WEBSITE + $route.fullPath },
        og_image: { property: 'og:image', content: 'https://www.virsas.com/assets/icon.png' }
      }
    }
    useMeta(metaData)
  }
}
</script>
