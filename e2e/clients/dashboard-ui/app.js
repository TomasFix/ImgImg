import ImageTestVarLang from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import RemoteSources from '@ImageTestVarLang/remote-sources'
import Webcam from '@ImageTestVarLang/webcam'
import ScreenCapture from '@ImageTestVarLang/screen-capture'
import GoldenRetriever from '@ImageTestVarLang/golden-retriever'
import ImageEditor from '@ImageTestVarLang/image-editor'
import DropTarget from '@ImageTestVarLang/drop-target'
import Audio from '@ImageTestVarLang/audio'
import Compressor from '@ImageTestVarLang/compressor'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.ImageTestVarLang.io'

const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access ImageTestVarLang in tests
window.ImageTestVarLang = ImageTestVarLang
