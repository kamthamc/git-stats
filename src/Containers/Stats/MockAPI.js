import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { repos } from './MockData';


var mock = new MockAdapter(axios);

// Mock GET request to /repositories

// Mocking just the repositories api for easy data generation

mock.onGet('/repositories').reply(200, repos);
