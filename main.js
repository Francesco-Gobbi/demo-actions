const express = require('express')
const app = express()
const port = 3000

app.get('/',async (req, res) => {
  res.send('Hello World!')
  if(req?.body?.hash){
    let message = req?.body?.hash
    let hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message))
    return 'Hash code: ' + Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, '0')).join('');

  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})