// https://nuxt.com/docs/api/configuration/nuxt-config
const localApiBase = 'http://api.dorset365.local'
const localFrontendUrl = 'http://dorset365.local'

const apiBase = process.env.NUXT_PUBLIC_API_BASE || localApiBase
const frontendUrl = process.env.NUXT_PUBLIC_FRONTEND_URL || localFrontendUrl

if (process.env.NODE_ENV === 'production') {
  const apiUrl = new URL(apiBase)

  if (apiUrl.protocol !== 'https:' || apiUrl.hostname.endsWith('.local')) {
    throw new Error(
      'NUXT_PUBLIC_API_BASE must be set to the HTTPS Laravel API URL for production builds.'
    )
  }
}

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
      apiBase,
      // nuxt-auth-sanctum consumes this runtime config. In a deployed Nitro
      // server it can be overridden with NUXT_PUBLIC_SANCTUM_BASE_URL.
      sanctum: {
        baseUrl: apiBase,
        origin: frontendUrl,
      },
    }
  },

  vite: {
    server: {
      allowedHosts: ['dorset365.local']
    }
  },

  modules: ['nuxt-auth-sanctum'],

  sanctum: {
    baseUrl: apiBase,
    origin: frontendUrl,
    endpoints: {
      user: '/user'
    },
    redirect: {
      onLogin: '/dashboard',
      onLogout: '/auth/login',
      onAuthOnly: '/auth/login'
    }
  },

})
