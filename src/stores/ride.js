import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useRideStore = defineStore('ride', () => {
  const ride = ref({
    connections: []
  })

  const directionsRequest = ref({
    departure: null,
    arrival: null,
    waypoints: []
  })

  return {ride, directionsRequest}
})
