import config from 'config.js'

const baseUrl = config.apis.restapi.url

// RATE
export const FETCH_LATEST_RATE = (base, symbol) => `${baseUrl}latest?symbols=${symbol}&base=${base}`;
