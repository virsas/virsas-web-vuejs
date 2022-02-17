import { useQuasar } from 'quasar'
import { ref } from 'vue'

const cookies = () => {
  const $q = useQuasar()
  const needAcceptCookies = ref(!$q.cookies.has('cookie_accepted'))
  const necessaryCookies = ref(true)
  const preferences = ref(false)

  if (!$q.cookies.has('cookie_performance')) {
    $q.cookies.set('cookie_performance', false, { expires: 365, path: '/' })
  }
  const performanceCookies = ref($q.cookies.get('cookie_performance'))

  const acceptCookies = () => {
    needAcceptCookies.value = false
    $q.cookies.set('cookie_accepted', true, { expires: 365, path: '/' })
  }

  const confirmPreferences = () => {
    if (performanceCookies.value === true) {
      $q.cookies.set('cookie_performance', true, { expires: 365, path: '/' })
    } else {
      $q.cookies.set('cookie_performance', false, { expires: 365, path: '/' })
    }
    preferences.value = false
  }

  return { needAcceptCookies, acceptCookies, confirmPreferences, preferences, necessaryCookies, performanceCookies }
}

export default cookies
