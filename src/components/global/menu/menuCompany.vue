<template>
  <div>
    <q-item :to='{ name: "aboutShow", params: {lang: lang} }' clickable v-close-popup>
      <q-item-section>{{ $t('menu.header.about') }}</q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'components/global/menu/menuCompany',
  props: ['lang']
}
</script>
