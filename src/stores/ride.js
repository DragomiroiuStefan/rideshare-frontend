import { ref } from 'vue';
import { defineStore } from 'pinia';
import { RideService } from '@/service/RideService.js';

export const useRideStore = defineStore('ride', () => {
    const findRidesForm = ref({
        departure: null,
        arrival: null,
        date: null,
        seats: 1
    });

    const rides = ref([])

    const ride = ref({
        connections: []
    });

    const directionsRequest = ref({
        departure: null,
        arrival: null,
        waypoints: []
    });

    function findRides() {
        console.log('findRides');
        RideService.findBy(
            findRidesForm.value.departure.locationId,
            findRidesForm.value.arrival.locationId,
            findRidesForm.value.date.toLocaleDateString('en-CA'),
            findRidesForm.value.seats
        )
            .then(response => rides.value = response.data)
            .catch(error => console.log(error));
    }

    return { findRidesForm, rides, ride, directionsRequest, findRides };
});
