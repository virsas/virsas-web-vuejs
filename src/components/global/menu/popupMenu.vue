<template>
  <div>
    <q-card>
      <q-card-actions align="right">
        <q-btn flat icon="fas fa-times" color="black" v-close-popup />
      </q-card-actions>
      <q-card-section class="row items-center justify-center">
        <q-list class="full-width">
          <q-item-label header>{{ $t('menu.header.company') }}</q-item-label>
          <MenuCompany :lang="lang" />
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import MenuCompany from 'src/components/global/menu/menuCompany.vue'

export default {
  components: { MenuCompany },
  name: 'components/global/menu/popupMenu',
  props: ['lang']
}
</script>
