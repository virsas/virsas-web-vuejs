import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n/index'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const language = () => {
  const languages = [
    { name: 'English', code: 'en-US' },
    { name: 'Čeština', code: 'cs' }
  ]

  const $q = useQuasar()
  const $route = useRoute()
  const $router = useRouter()
  const { locale } = useI18n({ useScope: 'global' })
  const lang = ref($q.lang.isoName)

  if ((typeof $route.params.lang === 'undefined') || !(['en-US', 'cs'].includes($route.params.lang))) {
    locale.value = 'en-US'
    lang.value = 'en-US'
    $router.replace({ params: { lang: 'en-US' } })
    import(
      'quasar/lang/' + 'en-US'
    ).then(lang => {
      $q.lang.set(lang.default)
    })
  } else {
    locale.value = $route.params.lang
    lang.value = $route.params.lang
    import(
      'quasar/lang/' + $route.params.lang
    ).then(lang => {
      $q.lang.set(lang.default)
    })
  }

  watch(lang, val => {
    if (['en-US', 'cs'].includes(val)) {
      $router.replace({ params: { lang: val } })
      locale.value = val
      import(
        'quasar/lang/' + val
      ).then(lang => {
        $q.lang.set(lang.default)
        lang = ref($q.lang.isoName)
      })
    }
  })

  return { languages, lang }
}

export default language
