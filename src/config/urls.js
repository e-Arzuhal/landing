const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:3000'

const APP_LOGIN_URL = `${APP_BASE_URL}/login`
const APP_REGISTER_URL = `${APP_BASE_URL}/register`

export { API_BASE_URL, APP_BASE_URL, APP_LOGIN_URL, APP_REGISTER_URL }
