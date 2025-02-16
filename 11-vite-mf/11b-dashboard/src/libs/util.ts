export function getRandomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function getRandomDirection(directions = ["north", "south", "east", "west"]) {
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

export function addDistanceToLocation(lat: number, lng: number, distanceKm: number, direction = 'north') {
    const earthRadiusKm = 6371; // Radius of Earth in kilometers

    // Convert distance to radians (distance in km / radius of Earth)
    const distanceRadians = distanceKm / earthRadiusKm;

    // Calculate new latitude and longitude based on direction
    let newLat = lat;
    let newLng = lng;

    switch (direction.toLowerCase()) {
        case 'north':
            newLat = lat + (distanceRadians * (180 / Math.PI));
            break;
        case 'south':
            newLat = lat - (distanceRadians * (180 / Math.PI));
            break;
        case 'east':
            newLng = lng + (distanceRadians * (180 / Math.PI)) / Math.cos(lat * (Math.PI / 180));
            break;
        case 'west':
            newLng = lng - (distanceRadians * (180 / Math.PI)) / Math.cos(lat * (Math.PI / 180));
            break;
        default:
            throw new Error("Invalid direction: use 'north', 'south', 'east', or 'west'");
    }

    return { latitude: newLat, longitude: newLng };
}

export function addDistance(obj: any, display: string) {
    const { latitude, longitude } = obj.building.location;
    const fakeDistance = getRandomBetween(0.0010, 1)
    const fakeDirection = getRandomDirection(["north", "east", "west"])
    const location = addDistanceToLocation(latitude, longitude, fakeDistance, fakeDirection)
    const title = `${display} ${obj.itemId} - Unidade: ${obj.building.name} - Status: ${obj.status}`
    return { ...obj, title, location }
}