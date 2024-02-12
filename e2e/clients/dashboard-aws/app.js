import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'
import Dashboard from '@ImageTestVarLang/dashboard'
import AwsS3 from '@ImageTestVarLang/aws-s3'



const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

