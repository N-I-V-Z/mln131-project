export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const ROUTES = {
  HOME: '/',
  MACLENIN_CONCEPT: '/maclenin-concept',
  PARTY_ROLE: '/party-role',
  MUSEUM: '/museum',
  QUIZ: '/quiz',
  CHATBOT: '/chatbot',
};

export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'user_data',
};

export const APP_CONFIG = {
  APP_NAME: 'MLN131 Project',
  VERSION: '1.0.0',
};