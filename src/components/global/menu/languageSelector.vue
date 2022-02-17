<template>
  <div>
    <q-btn class="q-mx-sm" color="white" text-color="black" unelevated round :label="lang == 'en-US' ? 'en' : lang">
      <q-menu class="q-px-none">
        <q-list>
          <q-item v-for="language in languages" :key="language.code" clickable v-close-popup @click="lang = language.code">
            <q-item-section>
              <q-item-label>{{ language.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import language from 'src/functions/global/language'

export default {
  name: 'components/global/menu/languageSelector',
  setup () {
    const { languages, lang } = language()

    return {
      lang,
      languages
    }
  }
}
</script>
