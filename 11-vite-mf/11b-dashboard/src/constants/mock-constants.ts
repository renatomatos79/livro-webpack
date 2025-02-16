import {FILTER_TYPE_BIKE, FILTER_TYPE_BUILDING, FILTER_TYPE_CAR, FILTER_TYPE_TRUCK} from "./filter-type-constants";

const MOCK_POLICE_STATIONS = [
    { name: "Delegacia  Apoio ao Turismo (DEAT)", location: { latitude: -22.9637, longitude: -43.2075 } },
    { name: "12ª Delegacia de Polícia - Copacabana", location: { latitude: -22.9664, longitude: -43.1875 } },
    { name: "15ª Delegacia de Polícia - Gávea", location: { latitude: -22.9825, longitude: -43.2228 } },
    { name: "19ª Delegacia de Polícia - Tijuca", location: { latitude: -22.9269, longitude: -43.2317 } },
    { name: "Delegacia de Polícia Civil - Botafogo", location: { latitude: -22.9475, longitude: -43.1861 } },
];

export const MOCK_FILTER_TYPES = [
    { itemType: FILTER_TYPE_BUILDING, itemId: 'DEAT', status: 'active', title: MOCK_POLICE_STATIONS[0].name, location: MOCK_POLICE_STATIONS[0].location },
    { itemType: FILTER_TYPE_BUILDING, itemId: '12º Copacabana', status: 'active', title: MOCK_POLICE_STATIONS[1].name, location: MOCK_POLICE_STATIONS[1].location },
    { itemType: FILTER_TYPE_BUILDING, itemId: '15º Gávea', status: 'active', title: MOCK_POLICE_STATIONS[2].name, location: MOCK_POLICE_STATIONS[2].location },
    { itemType: FILTER_TYPE_BUILDING, itemId: '19º Tijuca', status: 'active', title: MOCK_POLICE_STATIONS[3].name, location: MOCK_POLICE_STATIONS[3].location },
    { itemType: FILTER_TYPE_BUILDING, itemId: 'Del. Botafogo', status: 'active', title: MOCK_POLICE_STATIONS[4].name, location: MOCK_POLICE_STATIONS[4].location },

    { itemType: FILTER_TYPE_CAR, itemId: '90-NL-67', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[1], location: { latitude: 0, longitude: 0  }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_CAR, itemId: '90-NL-68', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[1], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_CAR, itemId: '90-NL-69', status: 'inactive', km: 200000, building: MOCK_POLICE_STATIONS[1], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_CAR, itemId: '90-NL-70', status: 'broken', km: 200000, building: MOCK_POLICE_STATIONS[1], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, longitude: 0, details: '' } },

    { itemType: FILTER_TYPE_BIKE, itemId: '12-16-68', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[0], location: { latitude: 0, longitude: 0, }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_BIKE, itemId: '12-16-69', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[0], location: { latitude: 0, longitude: 0, }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_BIKE, itemId: '12-16-70', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[0], location: { latitude: 0, longitude: 0, }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_BIKE, itemId: '12-16-71', status: 'inactive', km: 200000, building: MOCK_POLICE_STATIONS[0], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, longitude: 0, details: '' } },
    { itemType: FILTER_TYPE_BIKE, itemId: '12-16-72', status: 'broken', km: 200000, building: MOCK_POLICE_STATIONS[0], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, longitude: 0, details: '' } },

    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-71', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[4], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } },
    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-72', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[4], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } },
    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-73', status: 'active', km: 200000, building: MOCK_POLICE_STATIONS[4], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } },
    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-74', status: 'inactive', km: 200000, building: MOCK_POLICE_STATIONS[4], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } },
    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-75', status: 'inactive', km: 200000, building: MOCK_POLICE_STATIONS[3], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } },
    { itemType: FILTER_TYPE_TRUCK, itemId: '90-NL-76', status: 'broken', km: 200000, building: MOCK_POLICE_STATIONS[3], location: { latitude: 0, longitude: 0 }, target: { latitude: 0, lng: 0, details: '' } }
]