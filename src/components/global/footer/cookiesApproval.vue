<template>
  <div>
    <q-dialog v-model="preferences" persistent>
      <q-card>
        <q-card-section class="q-py-none">
          <q-toolbar class="q-pa-none">
            <img class="logo" alt="virsas logo" src="../../../assets/logowb.png" />
            <q-space />
            <q-btn flat round size="sm" color="blue-grey-10" icon="fas fa-times" v-close-popup />
          </q-toolbar>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-toolbar class="q-pa-none">
            <strong>{{ $t('page.footer.cookie_privacy_header') }}</strong>
            <q-space />
          </q-toolbar>
          <div class="text-body2">{{ $t('page.footer.cookie_privacy_text') }}</div>
        </q-card-section>

        <q-card-section>
          <q-toolbar class="q-pa-none">
            <strong>{{ $t('page.footer.cookie_necessary_header') }}</strong>
            <q-space />
            <q-toggle v-model="necessaryCookies" disable />
          </q-toolbar>
          <div class="text-body2">{{ $t('page.footer.cookie_necessary_text') }}</div>
        </q-card-section>

        <q-card-section>
          <q-toolbar class="q-pa-none">
            <strong>{{ $t('page.footer.cookie_performance_header') }}</strong>
            <q-space />
            <q-toggle v-model="performanceCookies" />
          </q-toolbar>
          <div class="text-body2">{{ $t('page.footer.cookie_performance_text') }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat color="primary" :label="$t('page.footer.cookie_accept_selected')" @click="acceptSelectedCookies()" />
          <q-btn unelevated color="primary" :label="$t('page.footer.cookie_accept_all')" @click="acceptAllCookies()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="needAcceptCookies" seamless position="bottom" full-width>
      <q-toolbar class="bg-white text-black">
          <q-card flat class="full-width">
            <q-card-section>
              <div class="text-h6 q-pb-md">{{ $t('page.footer.cookie_header') }}</div>
              <div class="text-subtitle2">
                {{ $t('page.footer.cookie_text') }}
                <router-link :to="{ name: 'cookiesShow', params: {lang: lang} }">{{ $t('page.footer.cookie_policy') }}</router-link>
              </div>
            </q-card-section>
          </q-card>
          <q-space/>
          <q-separator vertical />
          <q-card flat>
            <q-card-actions>
              <q-btn flat color="blue-grey-10" :label="$t('page.footer.cookie_settings')" @click="preferences = true" />
            </q-card-actions>
          </q-card>
          <q-card flat>
            <q-card-actions>
              <q-btn unelevated color="primary" :label="$t('page.footer.cookie_accept_all')" @click="acceptAllCookies()" />
            </q-card-actions>
          </q-card>
      </q-toolbar>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import language from 'src/functions/global/language'
import cookies from '../../../functions/cookies/cookies'

export default defineComponent({
  name: 'components/global/cookiesApproval',
  setup () {
    const { needAcceptCookies, acceptAllCookies, acceptSelectedCookies, necessaryCookies, performanceCookies, preferences } = cookies()
    const { lang } = language()

    console.log(performanceCookies.value)

    return {
      needAcceptCookies,
      acceptAllCookies,
      acceptSelectedCookies,
      necessaryCookies,
      performanceCookies,
      lang,
      preferences
    }
  }
})
</script>
