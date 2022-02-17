<template>
  <div class="gradient">
    <q-dialog v-model="menu" persistent maximized>
      <PopupMenu />
    </q-dialog>
    <q-toolbar class="head top_menu q-pa-none">
      <div class="lt-md">
        <q-btn class="q-mx-sm text-white" unelevated round icon="fas fa-bars" @click="menu=true" />
      </div>
      <q-item clickable :to="{ name: 'homeShow', params: {lang: lang} }" class="logo full-height">
        <q-item-section>
          <img class="logo" alt="virsas logo" src="../../assets/logoww.png" />
        </q-item-section>
      </q-item>
      <div class="gt-sm full-height">
        <q-btn class="full-height" unelevated :label="$t('menu.header.company')">
          <q-menu>
            <q-list>
              <MenuCompany :lang="lang" />
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <q-space />
      <LanguageSelector />
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from 'vue'
import language from 'src/functions/global/language'
import LanguageSelector from 'src/components/global/menu/languageSelector.vue'
import PopupMenu from 'src/components/global/menu/popupMenu.vue'
import MenuCompany from 'src/components/global/menu/menuCompany.vue'

export default {
  name: 'components/global/header',
  components: { LanguageSelector, PopupMenu, MenuCompany },
  setup () {
    const { lang } = language()

    const menu = ref(null)

    return {
      lang,
      menu
    }
  }
}
</script>
