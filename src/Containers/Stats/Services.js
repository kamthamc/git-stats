import axios from 'axios';

export function fetchRepositories() {
  return axios.get('/repositories');
}