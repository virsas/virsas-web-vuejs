<template>
  <div>
    <h6 class="full-width">{{ $t('menu.footer.virsas') }}</h6>
    <div class="full-width">&copy; {{ $t('menu.footer.copyright') }}</div>
    <br />
    <div class="full-width">
      <span class="q-mr-xs">{{ $t('menu.footer.company_id') }}:</span>
      <span class="text-bold">{{ $t('menu.footer.cid') }}</span>
    </div>
    <div class="full-width">
      <span class="q-mr-xs">{{ $t('menu.footer.company_vat') }}:</span>
      <span class="text-bold">{{ $t('menu.footer.dic') }}</span>
    </div>
    <br />
    <div class="full-width text-bold">{{ $t('menu.footer.address') }}</div>
    <div class="full-width">{{ $t('menu.footer.street') }}</div>
    <div class="full-width">{{ $t('menu.footer.prague') }}</div>
    <div class="full-width">{{ $t('menu.footer.czechia') }}</div>
  </div>
</template>

<script>
export default {
  name: 'components/global/footer/footerCompanyInfo'
}
</script>
