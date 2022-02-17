import axios from 'axios'
import { useNotificationStore } from '@/scripts/stores/notification'
const { defineStore } = window.pinia

export const useVivinoStore = defineStore({
  id: 'vivino',
  actions: {
    updateLogo(data) {
      const notificationStore = useNotificationStore(true)
      return new Promise((resolve, reject) => {
        window.axios
          .post('/api/m/vivino/upload-logos', data)
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    paginate(){
      return new Promise((resolve, reject) => {
        window.axios
          .get(`/api/vivino/orders/paginate`)
          .then((response) => {
            console.log(response)
            resolve(response)
          })
          .catch((err) => {
            console.log(err)
            handleError(err)
            reject(err)
          })
      })
    }

  },
})
