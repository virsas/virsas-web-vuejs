import { useQuasar } from 'quasar'
import { ref } from 'vue'

const cookies = () => {
  const q = useQuasar()
  const needAcceptCookies = ref(!q.cookies.has('vssweb_cookie_accepted'))
  const necessaryCookies = ref(true)
  const performanceCookies = ref(false)
  const preferences = ref(false)

  if (q.cookies.has('vssweb_cookie_performance')) {
    if (q.cookies.get('vssweb_cookie_performance') === 'true') {
      performanceCookies.value = true
    }
  }

  const acceptAllCookies = () => {
    needAcceptCookies.value = false
    q.cookies.set('vssweb_cookie_performance', true, { expires: 365, path: '/' })
    q.cookies.set('vssweb_cookie_necessary', true, { expires: 365, path: '/' })
    q.cookies.set('vssweb_cookie_accepted', true, { expires: 365, path: '/' })
    preferences.value = false
  }

  const acceptSelectedCookies = () => {
    needAcceptCookies.value = false
    q.cookies.set('vssweb_cookie_performance', performanceCookies.value, { expires: 365, path: '/' })
    q.cookies.set('vssweb_cookie_necessary', true, { expires: 365, path: '/' })
    q.cookies.set('vssweb_cookie_accepted', true, { expires: 365, path: '/' })
    preferences.value = false
  }

  return { needAcceptCookies, acceptAllCookies, acceptSelectedCookies, necessaryCookies, performanceCookies, preferences }
}

export default cookies
