import ImageTestVarLang from '@ImageTestVarLang/core'
import Box from '..'

{
  const ImageTestVarLang = new ImageTestVarLang()
  ImageTestVarLang.use(Box, {
    companionUrl: '',
    companionCookiesRule: 'same-origin',
    target: 'body',
    title: 'title',
  })
}
