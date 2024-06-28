<script setup>
import { ref } from 'vue';
import router from '@/router/index.js';

import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

const form = ref({
    departure: '',
    arrival: '',
    date: '',
    seats: 1
});

const locationOptions = ref([]);

const search = (event) => {
    locationOptions.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};

function find() {
    router.push({ name: 'rides' });
}

</script>

<template>
    <div class="card formgroup-inline p-fluid">
        <div class="field w-14rem">
            <label for="departure" class="p-sr-only">Departure</label>
            <AutoComplete
                id="departure"
                v-model="form.departure"
                :suggestions="locationOptions"
                @complete="search"
                force-selection
                placeholder="Departure"
            />
        </div>
        <div class="field w-14rem">
            <label for="arrival" class="p-sr-only">Arrival</label>
            <AutoComplete
                id="arrival"
                v-model="form.arrival"
                :suggestions="locationOptions"
                @complete="search"
                force-selection
                placeholder="Arrival"
            />
        </div>
        <div class="field w-10rem">
            <label for="date" class="p-sr-only">Date</label>
            <Calendar
                id="date"
                v-model="form.date"
                dateFormat="dd/mm/yy"
                :minDate="new Date()"
                showIcon
                placeholder="Date"
            />
        </div>
        <div class="field w-6rem">
            <label for="seats" class="p-sr-only">Seats</label>
            <InputNumber
                id="seats"
                v-model="form.seats"
                mode="decimal"
                :min="1"
                :max="10"
                showButtons
            />
        </div>
        <div class="field">
            <Button @click="find" label="Find"></Button>
        </div>
    </div>
</template>

<style scoped>
</style>
