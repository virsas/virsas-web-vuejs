<template>
  <div>
    <router-link class="text-white" :to="{ name: 'cookiesShow', params: {lang: lang} }">{{ $t('menu.footer.cookies') }}</router-link>
    <span class="q-mx-sm">&#124;</span>
    <router-link class="text-white" :to="{ name: 'termsShow', params: {lang: lang} }">{{ $t('menu.footer.terms') }}</router-link>
    <span class="q-mx-sm">&#124;</span>
    <router-link class="text-white" :to="{ name: 'privacyShow', params: {lang: lang} }">{{ $t('menu.footer.privacy') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'components/global/footer/footerLegal',
  props: ['lang']
}
</script>
