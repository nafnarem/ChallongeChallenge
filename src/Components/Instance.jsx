import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://api.challonge.com/v2',
    timeout: 5000,
    headers: {
      'Authorization-Type': 'v1',
      'Authorization': 'removedapikeys',
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/json'
    }});

export default Instance;