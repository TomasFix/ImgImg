import Dashboard from '@ImageTestVarLang/dashboard'
import Tus from '@ImageTestVarLang/tus'
import Unsplash from '@ImageTestVarLang/unsplash'
import Url from '@ImageTestVarLang/url'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })
