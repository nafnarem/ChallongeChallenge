import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://api.challonge.com/v2',
    timeout: 3000,
    headers: {
      'Authorization-Type': 'v1',
      'Authorization': 'tY47xec2i7xTF3DVa4AGzjGxIxMgo7lweoHvzVSt',
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/json'
    }});

export default Instance;