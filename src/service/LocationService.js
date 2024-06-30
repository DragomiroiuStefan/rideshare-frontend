import { apiClient } from '@/service/ApiClient.js';

export const LocationService = {
    findAll() {
        return apiClient.get('/locations');
    },
    findById(id) {
        return apiClient.get('/locations/' + id);
    },
    findByCityContaining(city) {
        return apiClient.get('/locations/findByCityContaining?city=' + city);
    },
    create(location) {
        return apiClient.post('/locations', location);
    },
    update(location) {
        return apiClient.put('/locations/' + location.locationId, {
            locationId: location.locationId,
            city: location.city,
            county: location.county
        });
    },
    delete(locationId) {
        return apiClient.delete('/locations/' + locationId);
    }
};
