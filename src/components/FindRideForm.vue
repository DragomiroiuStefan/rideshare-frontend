<script setup>
import { ref } from 'vue';

import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import { LocationService } from '@/service/LocationService.js';
import { useRideStore } from '@/stores/ride.js';

const rideStore = useRideStore()
const form = rideStore.findRidesForm

const locationOptions = ref([]);

const search = (event) => {
    LocationService.findByCityContaining(event.query)
        .then(function (response) {
            console.log(response);
            locationOptions.value = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};

function find() {
    rideStore.findRides()
    // router.push({ name: 'rides' });
}
</script>

<template>
    <div class="card shadow-2 formgroup-inline p-fluid">
        <div class="field w-14rem">
            <label for="departure" class="p-sr-only">Departure</label>
            <AutoComplete id="departure" v-model="form.departure" :suggestions="locationOptions" @complete="search" optionLabel="city" force-selection placeholder="Departure">
                <template #option="slotProps">
                    <i class="pi pi-map-marker mr-2 text-primary text-xl"></i>
                    <span class="mr-2 font-medium">{{ slotProps.option.city }} </span>
                    <span class="text-400">{{ slotProps.option.county }} </span>
                </template>
            </AutoComplete>
        </div>
        <div class="field w-14rem">
            <label for="arrival" class="p-sr-only">Arrival</label>
            <AutoComplete id="arrival" v-model="form.arrival" :suggestions="locationOptions" @complete="search" optionLabel="city" force-selection placeholder="Arrival">
                <template #option="slotProps">
                    <i class="pi pi-map-marker mr-2 text-primary text-xl"></i>
                    <span class="mr-2 font-medium">{{ slotProps.option.city }} </span>
                    <span class="text-400">{{ slotProps.option.county }} </span>
                </template>
            </AutoComplete>
        </div>
        <div class="field w-12rem">
            <label for="date" class="p-sr-only">Date</label>
            <Calendar id="date" v-model="form.date" dateFormat="dd/mm/yy" :minDate="new Date()" showIcon placeholder="Date" />
        </div>
        <div class="field w-6rem">
            <label for="seats" class="p-sr-only">Seats</label>
            <InputNumber id="seats" v-model="form.seats" mode="decimal" :min="1" :max="10" showButtons />
        </div>
        <div class="field">
            <Button @click="find" label="Find"></Button>
        </div>
    </div>
</template>

<style scoped></style>
