import { ImageTestVarLang } from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import Transloadit from '@ImageTestVarLang/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access ImageTestVarLang in tests
window.ImageTestVarLang = ImageTestVarLang
