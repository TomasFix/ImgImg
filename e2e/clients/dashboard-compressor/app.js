import Compressor from '@ImageTestVarLang/compressor'
import Dashboard from '@ImageTestVarLang/dashboard'
import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access ImageTestVarLang in tests
window.ImageTestVarLang = ImageTestVarLang
