
import { defineStore } from 'pinia'
import api from '../api/axios'

export const useIntroStore = defineStore('intro', {
  state: () => ({
    data: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchIntroData() {
      this.loading = true
      this.error = null
      try {
        const response = await api.get('/')
        this.data = response.data
      } catch (err) {
        this.error = err.message || 'Failed to fetch data'
        console.error('Error fetching intro data:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
