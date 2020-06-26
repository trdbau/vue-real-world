import axios from 'axios';

const apiClient = axios.create({
  bareUrl: 'https://',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
};
