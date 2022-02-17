<template>
  <BaseSettingCard
    :title="$t('vivino.customer_portal_title')"
    :description="$t('vivino.customer_portal_description')"
  >


    <BaseTable
      ref="table"
      class="mt-16"
      :data="getPaginate"
      :columns="colunas"
    ></BaseTable>


  </BaseSettingCard>
</template>

<script setup>
import {ref, reactive, inject} from 'vue'
import {useVivinoStore} from '../stores/vivino'
import {useCompanyStore} from '@/scripts/admin/stores/company'
import {useGlobalStore} from '@/scripts/admin/stores/global'

import ThemeSelector from '~/scripts/components/ThemeSelector.vue'

const utils = inject('utils')
const vivinoStore = useVivinoStore()
const companyStore = useCompanyStore(true)
const globalStore = useGlobalStore(true)

const colunas = [
  {key: 'id', label: 'ID'},
  {key: 'status', label: 'Status'},
  {key: 'items_total_sum', label: 'Total'},
  {key: 'items_units_sum', label: 'Units'},
  {key: 'items_shipping_sum', label: 'Shipping'},
  {key: 'items_tax_sum', label: 'Tax'},
  {key: 'sla_type', label: 'Sla'},
  {key: 'sla_expires_at', label: 'Date Sla'}
];

async function getPaginate() {
  let response = await vivinoStore.paginate();

  console.log(response)
  console.log({response})

  return {
    data: response.data.data,
    pagination: {
      totalPages: response.data.meta.last_page,
      currentPage: response.data.meta.current_page,
      totalCount: response.data.meta.total,
    },
  }

}

let logo = ref([])

if (companyStore.selectedCompanySettings.customer_portal_logo) {
  logo.value = [
    {
      image:
        '/storage/' + companyStore.selectedCompanySettings.customer_portal_logo,
    },
  ]
}

const customerPortalSettings = reactive({
  customer_portal_theme: null,
})

const adminPortalSettings = reactive({
  admin_portal_theme: null,
})

utils.mergeSettings(customerPortalSettings, {
  ...companyStore.selectedCompanySettings,
})

utils.mergeSettings(adminPortalSettings, {
  ...globalStore.globalSettings,
})

let customerLogoBlob = ref(null)
let isSavingCustomerSettings = ref(false)
let isSavingAdminSettings = ref(false)

function onCustomerLogoChange(fileName, file, fileCount, fileList) {
  customerLogoBlob.value = file
}

function onCustomerLogoRemove() {
  customerLogoBlob.value = null
}

async function saveCustomerPortalSettings() {
  isSavingCustomerSettings.value = true

  let logoData = new FormData()

  if (customerLogoBlob.value) {
    logoData.append('customer_portal_logo', customerLogoBlob.value)
  }

  let logoRes = await vivinoStore.updateLogo(logoData)

  companyStore.selectedCompanySettings.customer_portal_logo = logoRes.data.url

  await companyStore.updateCompanySettings({
    data: {
      settings: {
        ...customerPortalSettings,
      },
    },
    message: 'settings.preferences.updated_message',
  })

  isSavingCustomerSettings.value = false
}

async function saveAdminPortalSettings() {
  isSavingAdminSettings.value = true

  await globalStore.updateGlobalSettings({
    data: {
      settings: {
        ...adminPortalSettings,
      },
    },
    message: 'settings.preferences.updated_message',
  })

  isSavingAdminSettings.value = false
}
</script>
