<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t('privacy.header') }}</h1>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.description') }}</h2>
    <p>{{ $t('privacy.description_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.definition') }}</h2>
    <p>{{ $t('privacy.definition_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.rights') }}</h2>
    <p>{{ $t('privacy.rights_1') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.rights_1_a') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.rights_1_b') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.rights_1_c') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.rights_1_d') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.rights_1_e') }}</p>
    <p>{{ $t('privacy.rights_2') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.what_collect') }}</h2>
    <p>{{ $t('privacy.what_collect_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.retention') }}</h2>
    <p>{{ $t('privacy.retention_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.protection') }}</h2>
    <p>{{ $t('privacy.protection_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.sharing') }}</h2>
    <p>{{ $t('privacy.sharing_1') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.sharing_1_a') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.sharing_1_b') }}</p>
    <p class="q-ml-lg">&bull; {{ $t('privacy.sharing_1_c') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.advertising') }}</h2>
    <p>{{ $t('privacy.advertising_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.children') }}</h2>
    <p>{{ $t('privacy.children_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.changes') }}</h2>
    <p>{{ $t('privacy.changes_1') }}</p>
    <h2 class="text-h5 q-my-md">{{ $t('privacy.reach') }}</h2>
    <p>{{ $t('privacy.reach_1') }}</p>
    <p class="text-caption text-right">{{ $t('privacy.update') }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n/index'

export default {
  name: 'privacyShow',
  setup () {
    const { t } = useI18n({ useScope: 'global' })
    const $route = useRoute()

    const metaData = {
      title: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.privacy'),
      meta: {
        description: { name: 'description', content: t('menu.footer.privacy') },
        og_title: { property: 'og:title', content: process.env.VIRSAS_WEB_TITLE + ' | ' + t('menu.footer.privacy') },
        og_description: { property: 'og:description', content: t('menu.footer.privacy') },
        og_url: { property: 'og:url', content: process.env.VIRSAS_WEB_WEBSITE + $route.fullPath },
        og_image: { property: 'og:image', content: 'https://www.virsas.com/assets/icon.png' }
      }
    }
    useMeta(metaData)
  }
}
</script>
