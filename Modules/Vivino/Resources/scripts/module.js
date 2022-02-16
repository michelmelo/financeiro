import VivinoSetting from './views/VivinoSetting.vue'
import moduleLocales from '~/locales/locales'
import '../sass/module.scss'

window.Crater.booting((app, router) => {
  window.Crater.addMessages(moduleLocales)

  router.addRoute('settings', {
    path: 'vivino',
    name: 'vivino',
    component: VivinoSetting,
  })

})
