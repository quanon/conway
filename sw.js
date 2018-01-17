importScripts('/conway/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "quanon.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/conway/_nuxt/app.887411dfbdc48b6f9e38.js",
    "revision": "faa689480b77b77e95075704d79ddaff"
  },
  {
    "url": "/conway/_nuxt/layouts/default.d8486950d6a5a57c1d29.js",
    "revision": "3353dc6885d103e9322a3fd8aee1bc71"
  },
  {
    "url": "/conway/_nuxt/manifest.6da7e7c2ea13c42fcba1.js",
    "revision": "966c84354a14a499a20caec3676ab15a"
  },
  {
    "url": "/conway/_nuxt/pages/index.49d41e11ad20c9348d6b.js",
    "revision": "559471e2fc4016c1903b5bc0e71e8cc9"
  },
  {
    "url": "/conway/_nuxt/vendor.3341219949239d887eb4.js",
    "revision": "02f3f37c6001fa8ef20db594f93ac4f5"
  }
])


workboxSW.router.registerRoute(new RegExp('/conway/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/conway/.*'), workboxSW.strategies.networkFirst({}), 'GET')

