// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/app.css'
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://api.dorset365.local'
    }
  },

  vite: {
    server: {
      allowedHosts: ['dorset365.local']
    }
  },

  modules: ['nuxt-auth-sanctum'],

  sanctum: {
    baseUrl: process.env.NUXT_PUBLIC_API_BASE || 'http://api.dorset365.local',
    origin: process.env.NUXT_PUBLIC_FRONTEND_URL || 'http://dorset365.local',
    endpoints: {
      user: '/user/confirmed-password-status'
    },
    redirect: {
      onLogin: '/dashboard',
      onLogout: '/auth/login',
      onAuthOnly: '/auth/login'
    }
  },

})
