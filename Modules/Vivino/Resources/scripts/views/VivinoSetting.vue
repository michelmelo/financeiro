<template>
  <BaseSettingCard
    :title="$t('vivino.customer_portal_title')"
    :description="$t('vivino.customer_portal_description')"
  >
 

    <ThemeSezlector
      v-model="customerPortalSettings.customer_portal_theme"
      class="mt-6"
    />

    
    <BaseDivider class="my-8" />

  </BaseSettingCard>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useVivinoStore } from '../stores/vivino'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useGlobalStore } from '@/scripts/admin/stores/global'

import ThemeSelector from '~/scripts/components/ThemeSelector.vue'

const utils = inject('utils')
const whiteLogoStore = useVivinoStore()
const companyStore = useCompanyStore(true)
const globalStore = useGlobalStore(true)

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

  let logoRes = await whiteLogoStore.updateLogo(logoData)

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
