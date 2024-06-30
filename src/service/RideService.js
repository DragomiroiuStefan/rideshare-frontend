import { apiClient } from '@/service/ApiClient';

export const RideService = {
    findAll() {
        return apiClient.get('/rides');
    },
    findById(id) {
        return apiClient.get('/rides/' + id);
    },
    findBy(departureLocation, arrivalLocation, date, seats) {
        return apiClient.get('/rides', {
            params: {
                departureLocation: departureLocation,
                arrivalLocation: arrivalLocation,
                date: date,
                seats: seats
            }
        });
    },
    create(ride) {
        return apiClient.post('/rides', ride);
    },
    update(ride) {
        return apiClient.put('/rides/' + ride.rideId, {
            name: ride.name,
            description: ride.description,
            owner: ride.owner
        });
    },
    delete(rideId) {
        return apiClient.delete('/rides/' + rideId);
    }
};
